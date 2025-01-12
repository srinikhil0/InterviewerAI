// src/pages/static/About.tsx
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  const missions = [
    {
      icon: <FaRocket />,
      title: "Our Mission",
      description: "To democratize interview preparation by providing AI-powered tools that help millions of people around the world to succeed in their dream job interviews."
    },
    {
      icon: <FaLightbulb />,
      title: "Our Vision",
      description: "To become the world's leading platform for interview preparation, making professional growth accessible to everyone."
    },
    {
      icon: <FaUsers />,
      title: "Our Community",
      description: "A diverse global community of job seekers and professionals supporting each other in career growth and development."
    },
    {
      icon: <FaHandshake />,
      title: "Our Values",
      description: "Commitment to excellence, continuous innovation, inclusivity, and putting our users' success first."
    }
  ];

  const stats = [
    { number: "50K+", label: "Users" },
    { number: "100K+", label: "Practice Interviews" },
    { number: "90%", label: "Success Rate" },
    { number: "30+", label: "Industries Covered" }
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
            About InterviewerAI
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We're revolutionizing interview preparation with AI technology, helping candidates 
            across the globe land their dream jobs through personalized practice and feedback.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {stat.number}
              </div>
              <div className="text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mission & Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {missions.map((item, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Our Story
          </h2>
          <div className="text-white/70 space-y-4">
            <p>
              InterviewerAI was born from a simple observation: traditional interview preparation 
              methods weren't keeping pace with modern hiring practices. We saw an opportunity to 
              leverage AI technology to create a more effective, accessible, and personalized 
              interview preparation experience.
            </p>
            <p>
              Starting with a focus on technical interviews for software engineering roles, we've 
              expanded our platform to cover multiple industries and roles, helping candidates 
              worldwide prepare for their dream jobs with confidence.
            </p>
            <p>
              Today, we're proud to be a leading platform in AI-powered interview preparation, 
              continuously innovating and expanding our services to meet the evolving needs of 
              job seekers globally.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Ready to Transform Your Interview Experience?
          </h2>
          <Link 
            to="/register" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-lg"
          >
            Get Started Free
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;