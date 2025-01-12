import { motion } from 'framer-motion';
import { FaCloudUploadAlt, FaIndustry, FaRobot, FaChartLine } from 'react-icons/fa';

interface Step {
  icon: JSX.Element;
  title: string;
  description: string;
  gradient: string;
}

const steps: Step[] = [
  {
    icon: <FaCloudUploadAlt className="w-8 h-8" />,
    title: "Upload Your Resume",
    description: "Start by uploading your resume. Our AI will analyze your experience, skills, and career goals to personalize your interview practice.",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: <FaIndustry className="w-8 h-8" />,
    title: "Select Your Industry",
    description: "Choose your target industry from our comprehensive list including Technology, Healthcare, Engineering, Business, Legal, and more.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <FaRobot className="w-8 h-8" />,
    title: "Practice with AI",
    description: "Engage in realistic interview sessions with our AI interviewer. Get industry-specific questions and natural follow-up discussions.",
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Receive Feedback",
    description: "Get instant feedback on your responses, detailed performance analytics, and personalized suggestions for improvement.",
    gradient: "from-green-500 to-emerald-500"
  }
];

const HowItWorks = () => {
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
            How It Works
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Get started with our AI-powered interview preparation platform in just a few simple steps.
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform -translate-y-1/2 hidden lg:block" />

          {/* Steps Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 relative group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 
                              flex items-center justify-center text-white font-bold z-10">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${step.gradient} 
                              flex items-center justify-center mb-4 group-hover:scale-110 
                              transition-transform duration-300`}>
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/70">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <a
            href="/register"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg 
                     bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium 
                     hover:from-cyan-600 hover:to-blue-600 transition-all"
          >
            Start Practicing Now
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;