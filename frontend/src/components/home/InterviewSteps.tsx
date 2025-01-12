// src/components/home/InterviewSteps.tsx
import { motion } from 'framer-motion';
import { 
  FaFileAlt, 
  FaPhoneAlt, 
  FaLaptopCode, 
  FaUsers, 
  FaHandshake, 
  FaChartLine 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface InterviewStep {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  duration: string;
}

const interviewSteps: InterviewStep[] = [
  {
    title: 'Resume Screening',
    description: 'Practice optimizing your resume with AI feedback to pass the initial screening process.',
    icon: FaFileAlt,
    gradient: 'from-blue-500 to-cyan-500',
    duration: '30-45 min'
  },
  {
    title: 'Phone Screen',
    description: 'Master the initial phone interview with our AI interviewer asking common screening questions.',
    icon: FaPhoneAlt,
    gradient: 'from-purple-500 to-indigo-500',
    duration: '45-60 min'
  },
  {
    title: 'Technical Round',
    description: 'Practice technical questions, coding problems, and system design challenges.',
    icon: FaLaptopCode,
    gradient: 'from-green-500 to-emerald-500',
    duration: '60-90 min'
  },
  {
    title: 'Team Fit Interview',
    description: 'Prepare for behavioral questions and demonstrate your collaboration skills.',
    icon: FaUsers,
    gradient: 'from-orange-500 to-amber-500',
    duration: '45-60 min'
  },
  {
    title: 'Final Round',
    description: 'Practice with senior-level interviewers and handle complex scenarios.',
    icon: FaHandshake,
    gradient: 'from-red-500 to-pink-500',
    duration: '60-90 min'
  },
  {
    title: 'Performance Review',
    description: 'Get comprehensive feedback and improvement strategies for each interview stage.',
    icon: FaChartLine,
    gradient: 'from-teal-500 to-cyan-500',
    duration: '30-45 min'
  }
];

const InterviewSteps = () => {
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
            Complete Interview Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practice every stage of the interview process with our AI interviewer
          </p>
        </motion.div>

        {/* Interview Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interviewSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${step.gradient}`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>

                {/* Duration Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {step.duration}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
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
            Start Practicing Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InterviewSteps;