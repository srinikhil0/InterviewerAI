import { motion } from 'framer-motion';
import {
  FaRobot,
  FaIndustry,
  FaChartLine,
  FaHeart,
  FaFileAlt,
  FaComments,
  FaBrain,
  FaUserGraduate
} from 'react-icons/fa';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: <FaRobot className="w-8 h-8" />,
    title: "AI-Powered Interviews",
    description: "Experience realistic interviews with our advanced AI interviewer that adapts to your responses and provides natural follow-up questions.",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: <FaIndustry className="w-8 h-8" />,
    title: "Industry-Specific Practice",
    description: "Prepare for interviews across multiple industries including Technology, Healthcare, Engineering, Business, Legal, and more.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Performance Analytics",
    description: "Track your progress with detailed analytics, identify areas for improvement, and monitor your interview success rate.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: <FaHeart className="w-8 h-8" />,
    title: "Heart System",
    description: "Practice with our unique heart system - free users get 5 hearts that regenerate over time, while premium users enjoy unlimited attempts.",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: <FaFileAlt className="w-8 h-8" />,
    title: "Resume Analysis",
    description: "Our AI analyzes your resume to generate personalized interview questions that match your experience and target role.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: <FaComments className="w-8 h-8" />,
    title: "Real-time Feedback",
    description: "Receive instant feedback on your responses, including suggestions for improvement and alternative approaches.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <FaBrain className="w-8 h-8" />,
    title: "Adaptive Learning",
    description: "Our system learns from your performance to adjust question difficulty and focus on areas where you need more practice.",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: <FaUserGraduate className="w-8 h-8" />,
    title: "Comprehensive Preparation",
    description: "From technical skills to behavioral questions, prepare for every aspect of your interview with our comprehensive platform.",
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    icon: <FaComments className="w-8 h-8" />,
    title: "Mock Interview Recordings",
    description: "Record and review your interview sessions to analyze your communication style, body language, and identify areas for improvement.",
    gradient: "from-pink-500 to-rose-500"
  }
];

const Features = () => {
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
            Powerful Features for Interview Success
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover the tools and features that will help you ace your next interview with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 
                       transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.gradient} 
                            flex items-center justify-center mb-4 group-hover:scale-110 
                            transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Interview Preparation?
          </h2>
          <a
            href="/register"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg 
                     bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium 
                     hover:from-cyan-600 hover:to-blue-600 transition-all"
          >
            Get Started Free
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;