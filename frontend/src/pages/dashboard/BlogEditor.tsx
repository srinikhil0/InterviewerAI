import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { industries, Industry } from '../../types/blog';
import { storage, db } from '../../config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp, doc, getDoc } from 'firebase/firestore';

interface FormData {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  industry: Industry;
  featured: boolean;
  image: File | null;
}

const BlogEditor = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    industry: 'Technology',
    featured: false,
    image: null,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Check if user has permission to edit blogs
  useEffect(() => {
    const checkAuthorization = async () => {
      if (!user) {
        navigate('/login');
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const userData = userDoc.data();
        const hasAccess = userData?.role === 'admin' || userData?.role === 'editor';
        
        if (!hasAccess) {
          navigate('/');
          return;
        }

        setIsAuthorized(true);
      } catch (error) {
        console.error('Error checking authorization:', error);
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthorization();
  }, [user, navigate]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 
                    flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Show unauthorized message (should never see this due to navigation)
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 
                    flex items-center justify-center">
        <div className="text-white text-xl">You are not authorized to access this page.</div>
      </div>
    );
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      // Upload image to Firebase Storage
      let imageUrl = '';
      if (formData.image) {
        const imageRef = ref(storage, `blog-images/${Date.now()}-${formData.image.name}`);
        await uploadBytes(imageRef, formData.image);
        imageUrl = await getDownloadURL(imageRef);
      }

      // Add blog post to Firestore
      const blogPost = {
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        industry: formData.industry,
        featured: formData.featured,
        image: imageUrl,
        author: user?.displayName || 'Anonymous',
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        readTime: `${Math.ceil(formData.content.split(' ').length / 200)} min read`,
        createdAt: serverTimestamp(),
        type: 'post'
      };

      await addDoc(collection(db, 'blog-posts'), blogPost);
      setSuccess('Blog post published successfully!');
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        category: '',
        industry: 'Technology',
        featured: false,
        image: null,
      });
    } catch (err) {
      setError('Failed to publish blog post. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
        >
          <h1 className="text-3xl font-bold text-white mb-8">Create New Blog Post</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Input */}
            <div>
              <label className="block text-white mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 
                         text-white placeholder-white/50 focus:outline-none focus:ring-2 
                         focus:ring-cyan-500"
                required
              />
            </div>

            {/* Excerpt Input */}
            <div>
              <label className="block text-white mb-2">Excerpt</label>
              <textarea
                value={formData.excerpt}
                onChange={e => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 
                         text-white placeholder-white/50 focus:outline-none focus:ring-2 
                         focus:ring-cyan-500 h-24"
                required
              />
            </div>

            {/* Content Input */}
            <div>
              <label className="block text-white mb-2">Content</label>
              <textarea
                value={formData.content}
                onChange={e => setFormData(prev => ({ ...prev, content: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 
                         text-white placeholder-white/50 focus:outline-none focus:ring-2 
                         focus:ring-cyan-500 h-64"
                required
              />
            </div>

            {/* Category Input */}
            <div>
              <label className="block text-white mb-2">Category</label>
              <input
                type="text"
                value={formData.category}
                onChange={e => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 
                         text-white placeholder-white/50 focus:outline-none focus:ring-2 
                         focus:ring-cyan-500"
                required
              />
            </div>

            {/* Industry Select */}
            <div>
              <label className="block text-white mb-2">Industry</label>
              <select
                value={formData.industry}
                onChange={e => setFormData(prev => ({ ...prev, industry: e.target.value as Industry }))}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 
                         text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              >
                {industries.filter((i: Industry) => i !== 'All').map((industry: Industry) => (
                  <option key={industry} value={industry} className="bg-blue-900">
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Featured Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={e => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                className="w-4 h-4 text-cyan-500 border-white/20 rounded 
                         focus:ring-cyan-500 bg-white/10"
              />
              <label className="ml-2 text-white">Featured Post</label>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-white mb-2">Cover Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 
                         text-white file:mr-4 file:py-2 file:px-4 file:rounded-full 
                         file:border-0 file:text-sm file:font-semibold file:bg-cyan-500 
                         file:text-white hover:file:bg-cyan-600"
              />
            </div>

            {/* Error and Success Messages */}
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}
            {success && (
              <p className="text-green-400 text-sm">{success}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 
                       to-blue-500 text-white font-medium hover:from-cyan-600 
                       hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Publishing...' : 'Publish Post'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogEditor; 