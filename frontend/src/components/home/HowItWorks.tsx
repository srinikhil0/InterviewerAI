// src/components/home/HowItWorks.tsx
import { motion } from 'framer-motion';
import { 
  FaFileUpload, 
  FaIndustry, 
  FaRobot, 
  FaChartLine 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Step {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

const steps: Step[] = [
  {
    title: 'Upload Your Resume',
    description: 'Start by uploading your resume. Our AI analyzes your experience and skills to personalize your interview experience.',
    icon: FaFileUpload,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Select Your Industry',
    description: 'Choose your target industry and role. We will tailor the interview questions to match industry-specific requirements.',
    icon: FaIndustry,
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Practice with AI',
    description: 'Engage in realistic interviews with our AI interviewer. Get dynamic questions based on your responses.',
    icon: FaRobot,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Receive Feedback',
    description: 'Get detailed feedback on your performance, including areas of improvement and suggested responses.',
    icon: FaChartLine,
    gradient: 'from-orange-500 to-amber-500'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
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
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to prepare for your dream job interview
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                  <span className="text-sm font-bold text-gray-900">
                    {index + 1}
                  </span>
                </div>

                {/* Card */}
                <div className="pt-8 h-full">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${step.gradient}`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transform transition-all duration-200 hover:scale-105"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;