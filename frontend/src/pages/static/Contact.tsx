import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Implement form submission logic (e.g., Firebase Cloud Function)
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error: unknown) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      content: 'contact@interviewerai.com',
      link: 'mailto:contact@interviewerai.com'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Location',
      content: 'Remote First Company',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      link: 'https://linkedin.com/company/interviewerai'
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      link: 'https://twitter.com/interviewerai'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-16 px-4 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                           text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                           text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                           text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                           text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 
                         text-white font-medium hover:from-cyan-600 hover:to-blue-600 
                         transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-cyan-400">{info.icon}</div>
                    <div>
                      <h3 className="text-white font-semibold">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white/70 hover:text-cyan-400 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-white/70">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-cyan-400 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;