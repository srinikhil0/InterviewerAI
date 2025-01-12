// src/components/home/Features.tsx
import { motion } from 'framer-motion';
import { 
  FaRobot, 
  FaChartLine, 
  FaIndustry,
  FaComments, 
  FaFileAlt, 
  FaClock
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const features: Feature[] = [
  {
    title: 'AI-Powered Interviews',
    description: 'Experience dynamic interviews with our advanced AI that adapts questions based on your responses.',
    icon: FaRobot,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Real-time Feedback',
    description: 'Receive instant, detailed feedback on your answers, communication style, and areas for improvement.',
    icon: FaChartLine,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Industry-Specific Questions',
    description: 'Practice with questions tailored to your industry, role, and experience level.',
    icon: FaIndustry,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Natural Conversation Flow',
    description: 'Engage in fluid, context-aware discussions that mirror real interview scenarios.',
    icon: FaComments,
    color: 'from-orange-500 to-amber-500'
  },
  {
    title: 'Resume Analysis',
    description: 'Get personalized questions based on your resume and career trajectory.',
    icon: FaFileAlt,
    color: 'from-red-500 to-pink-500'
  },
  {
    title: 'Flexible Practice',
    description: 'Practice anytime, anywhere, with unlimited attempts to perfect your interview skills.',
    icon: FaClock,
    color: 'from-teal-500 to-cyan-500'
  }
];

const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Better Interview Preparation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform provides everything you need to ace your interviews
            across any industry
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >
              <div className="h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${feature.color}`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transform transition-all duration-200 hover:scale-105"
          >
            Try All Features Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;