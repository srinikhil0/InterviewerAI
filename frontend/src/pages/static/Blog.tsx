// src/pages/static/Blog.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendar, FaUser, FaClock, FaTags } from 'react-icons/fa';
import { useState, useMemo } from 'react';

interface AdCard {
  id: string;
  type: 'ad';
  title: string;
  description: string;
}

interface BlogPost {
  id: string;
  type: 'post';
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  industry: string;
  featured?: boolean;
}

type CardItem = BlogPost | AdCard;

const industries = [
  'All',
  'Technology',
  'Healthcare',
  'Engineering',
  'Business',
  'Legal',
  'Finance',
  'Education'
] as const;

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<typeof industries[number]>('All');

  const blogPosts = useMemo(() => [
    {
      id: '1',
      type: 'post' as const,
      title: 'Top 10 Technical Interview Questions at Google in 2024',
      excerpt: 'Comprehensive guide to the most common technical interview questions at Google, with tips on how to approach them effectively.',
      author: 'Sarah Chen',
      date: 'Mar 15, 2024',
      readTime: '8 min read',
      category: 'Technical Interviews',
      image: '/blog/tech-interview.jpg',
      industry: 'Technology',
      featured: true as const
    },
    {
      id: '2',
      type: 'post' as const,
      title: 'How to Prepare for Behavioral Interviews: A Complete Guide',
      excerpt: 'Master the STAR method and learn how to structure your responses to behavioral interview questions.',
      author: 'Michael Rodriguez',
      date: 'Mar 12, 2024',
      readTime: '6 min read',
      category: 'Interview Tips',
      image: '/blog/behavioral.jpg',
      industry: 'Technology',
      featured: false as const
    },
    {
      id: '3',
      type: 'post' as const,
      title: 'The Role of AI in Modern Interview Preparation',
      excerpt: 'Discover how artificial intelligence is transforming the way candidates prepare for job interviews.',
      author: 'Dr. Emily Watson',
      date: 'Mar 10, 2024',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/blog/ai-prep.jpg',
      industry: 'Technology',
      featured: false as const
    },
    {
      id: '4',
      type: 'post' as const,
      title: 'Resume Tips That Will Get You More Interviews',
      excerpt: 'Learn how to optimize your resume to increase your chances of landing interviews at top companies.',
      author: 'James Wilson',
      date: 'Mar 8, 2024',
      readTime: '7 min read',
      category: 'Resume Building',
      image: '/blog/resume-tips.jpg',
      industry: 'Technology',
      featured: false as const
    },
    {
      id: '5',
      type: 'post' as const,
      title: 'System Design Interview Preparation: A Developers Guide',
      excerpt: 'Master the art of system design interviews with our comprehensive guide covering scalability, performance, and reliability.',
      author: 'David Kumar',
      date: 'Mar 6, 2024',
      readTime: '10 min read',
      category: 'Technical Interviews',
      image: '/blog/system-design.jpg',
      industry: 'Technology',
      featured: false as const
    },
    {
      id: '6',
      type: 'post' as const,
      title: 'Mastering Data Structure Questions in Interviews',
      excerpt: 'Deep dive into common data structure problems and efficient solution strategies for technical interviews.',
      author: 'Lisa Zhang',
      date: 'Mar 4, 2024',
      readTime: '9 min read',
      category: 'Technical Interviews',
      image: '/blog/data-structures.jpg',
      industry: 'Technology',
      featured: false as const
    },
    {
      id: '7',
      type: 'post' as const,
      title: 'How to Negotiate Your Salary: Expert Tips',
      excerpt: 'Learn proven strategies for salary negotiation and how to communicate your value effectively.',
      author: 'Robert Martinez',
      date: 'Mar 2, 2024',
      readTime: '6 min read',
      category: 'Career Advice',
      image: '/blog/salary-negotiation.jpg',
      industry: 'Technology',
      featured: false as const
    },
    {
      id: '8',
      type: 'post' as const,
      title: 'Common Interview Mistakes and How to Avoid Them',
      excerpt: 'Identify and avoid the most common interview pitfalls that can cost you your dream job.',
      author: 'Emma Thompson',
      date: 'Feb 28, 2024',
      readTime: '7 min read',
      category: 'Interview Tips',
      image: '/blog/interview-mistakes.jpg',
      industry: 'Technology',
      featured: false as const
    },
    {
      id: '9',
      type: 'post' as const,
      title: 'Preparing for Leadership Role Interviews',
      excerpt: 'Essential tips and strategies for interviewing for management and leadership positions.',
      author: 'John Davidson',
      date: 'Feb 26, 2024',
      readTime: '8 min read',
      category: 'Leadership',
      image: '/blog/leadership-interviews.jpg',
      industry: 'Technology',
      featured: false as const
    },
    {
      id: '10',
      type: 'post' as const,
      title: 'Remote Interview Success Strategies',
      excerpt: 'Master the art of virtual interviews with tips on technology, body language, and online presence.',
      author: 'Sarah Chen',
      date: 'Feb 24, 2024',
      readTime: '6 min read',
      category: 'Interview Tips',
      image: '/blog/remote-interviews.jpg',
      industry: 'Technology',
      featured: false as const
    }
  ] as const, []);

  const filteredPosts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    const nonFeaturedPosts = blogPosts.filter(post => !post.featured);
    
    return nonFeaturedPosts.filter(post => {
      const matchesSearch = !query || 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);
        
      const matchesIndustry = selectedIndustry === 'All' || post.industry === selectedIndustry;
      
      return matchesSearch && matchesIndustry;
    });
  }, [searchQuery, selectedIndustry, blogPosts]);

  const adCards: AdCard[] = [
    {
      id: 'ad1',
      type: 'ad',
      title: 'Upgrade to Premium',
      description: 'Get unlimited interview practice with our premium plan'
    },
    {
      id: 'ad2',
      type: 'ad',
      title: 'Try Mock Interviews',
      description: 'Practice with our AI interviewer and get instant feedback'
    },
    {
      id: 'ad3',
      type: 'ad',
      title: 'Resume Review',
      description: 'Get your resume analyzed by our AI-powered tool'
    }
  ];

  const insertAdIntoRow = (posts: readonly BlogPost[], ad: AdCard): CardItem[] => {
    const firstEightPosts = posts.slice(0, 8);
    const result: CardItem[] = [...firstEightPosts];
    
    const randomPosition = Math.floor(Math.random() * 9);
    result.splice(randomPosition, 0, ad);
    
    return result;
  };

  const featuredPost = blogPosts.find(post => post.featured);

  // Get first 8 non-featured posts and first ad
  const firstEightPosts = filteredPosts.slice(0, 8);
  const firstAd = adCards[0];
  const firstGridContent = insertAdIntoRow(firstEightPosts, firstAd);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-16 px-4 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interview Insights Blog
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Expert advice, industry insights, and practical tips to help you ace your interviews
            and advance your career.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posts by title, content, author, or category..."
                className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-lg 
                           border border-white/20 text-white placeholder-white/50
                           focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-white/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Industry Filter Dropdown */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value as typeof industries[number])}
                className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-lg 
                          border border-white/20 text-white
                          focus:outline-none focus:ring-2 focus:ring-cyan-500
                          appearance-none cursor-pointer"
              >
                {industries.map((industry) => (
                  <option 
                    key={industry} 
                    value={industry}
                    className="bg-blue-900 text-white"
                  >
                    {industry}
                  </option>
                ))}
              </select>
              {/* Custom dropdown arrow */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-white/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800">
                <div className="w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20" />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                    Featured
                  </span>
                  <span className="text-white/60 text-sm flex items-center">
                    <FaCalendar className="w-4 h-4 mr-2" />
                    {featuredPost.date}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-white/70 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-white/60 text-sm flex items-center">
                      <FaUser className="w-4 h-4 mr-2" />
                      {featuredPost.author}
                    </span>
                    <span className="text-white/60 text-sm flex items-center">
                      <FaClock className="w-4 h-4 mr-2" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Recent Posts Grid with Ads */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8">Recent Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {firstGridContent.map((item) => (
              item.type === 'ad' ? (
                // Ad Card
                <div
                  key={item.id}
                  className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl overflow-hidden border-2 border-cyan-500/30"
                >
                  <div className="p-6 flex flex-col items-center text-center h-full justify-center">
                    <span className="text-xs font-medium text-cyan-400 mb-4">SPONSORED</span>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      {item.description}
                    </p>
                    <Link
                      to="/static/premium"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ) : (
                // Blog Post Card (existing card code)
                <div
                  key={item.id}
                  className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-800">
                    <div className="w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-white/60 text-sm flex items-center">
                        <FaCalendar className="w-3 h-3 mr-1" />
                        {item.date}
                      </span>
                      <span className="text-white/60 text-sm flex items-center">
                        <FaTags className="w-3 h-3 mr-1" />
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm flex items-center">
                        <FaUser className="w-3 h-3 mr-1" />
                        {item.author}
                      </span>
                      <Link
                        to={`/blog/${item.id}`}
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;