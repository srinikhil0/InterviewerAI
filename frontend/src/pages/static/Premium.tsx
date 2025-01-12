// src/pages/premium/Premium.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaCrown, 
  FaHeart, 
  FaInfinity, 
  FaChartLine, 
  FaVideo, 
  FaAd, 
  FaHeadset,
  FaCheckCircle,
  FaArrowLeft
} from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

const Premium = () => {
  const { user } = useAuth();
  const [isAnnual, setIsAnnual] = useState(false);

  const features = [
    {
      icon: <FaInfinity className="w-5 h-5" />,
      title: "Unlimited Hearts",
      description: "Practice interviews without limitations"
    },
    {
      icon: <FaChartLine className="w-5 h-5" />,
      title: "Advanced Analytics",
      description: "Detailed performance tracking and insights"
    },
    {
      icon: <FaVideo className="w-5 h-5" />,
      title: "Interview Recording",
      description: "Record and review your practice sessions"
    },
    {
      icon: <FaAd className="w-5 h-5" />,
      title: "Ad-Free Experience",
      description: "Distraction-free interview practice"
    },
    {
      icon: <FaHeadset className="w-5 h-5" />,
      title: "Priority Support",
      description: "Get help when you need it most"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="text-2xl font-bold text-white">
            InterviewerAI
          </Link>
          <Link 
            to={user ? "/dashboard" : "/"}
            className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300"
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to {user ? 'Dashboard' : 'Home'}
          </Link>
        </div>

        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">
            <FaCrown className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Upgrade to Premium
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Take your interview preparation to the next level with unlimited practice sessions and advanced features
          </p>
        </motion.div>

        {/* Pricing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-2 rounded-l-lg ${!isAnnual ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white/70'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-2 rounded-r-lg ${isAnnual ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white/70'}`}
          >
            Annual (Save 20%)
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
          >
            <div className="flex items-center mb-4">
              <FaHeart className="w-6 h-6 text-cyan-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Free Plan</h3>
            </div>
            <div className="mb-6">
              <p className="text-3xl font-bold text-white">$0</p>
              <p className="text-white/70">Forever free</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-white/80">
                <FaCheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                <span>5 Interview Hearts</span>
              </li>
              <li className="flex items-center text-white/80">
                <FaCheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                <span>6 Hours Heart Regeneration</span>
              </li>
              <li className="flex items-center text-white/80">
                <FaCheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                <span>Basic Performance Stats</span>
              </li>
              <li className="flex items-center text-white/80">
                <FaCheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                <span>Resume Analysis</span>
              </li>
            </ul>
            <Link
              to={user ? "/dashboard" : "/register"}
              className="block w-full text-center py-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
            >
              {user ? 'Current Plan' : 'Get Started'}
            </Link>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-xl p-6 border-2 border-cyan-500/20"
          >
            <div className="flex items-center mb-4">
              <FaCrown className="w-6 h-6 text-cyan-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Premium Plan</h3>
            </div>
            <div className="mb-6">
              <p className="text-3xl font-bold text-white">
                ${isAnnual ? '191.99' : '19.99'}
                <span className="text-lg font-normal text-white/70">
                  /{isAnnual ? 'year' : 'month'}
                </span>
              </p>
              {isAnnual && (
                <p className="text-cyan-400">Save 20% with annual billing</p>
              )}
            </div>
            <ul className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-white/80">
                  <div className="w-5 h-5 text-cyan-400 mr-2">
                    {feature.icon}
                  </div>
                  <span>{feature.title}</span>
                </li>
              ))}
            </ul>
            <button
              className="w-full py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600"
            >
              Upgrade Now
            </button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Premium;