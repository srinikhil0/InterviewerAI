import { motion } from 'framer-motion';
import { FaUserShield, FaHandshake, FaBan, FaExclamationTriangle } from 'react-icons/fa';

interface Section {
  icon: JSX.Element;
  title: string;
  content: string[];
}

const sections: Section[] = [
  {
    icon: <FaHandshake className="w-6 h-6" />,
    title: "User Agreement",
    content: [
      "You must be at least 18 years old to use our service",
      "You agree to provide accurate and complete information",
      "You are responsible for maintaining account security",
      "You agree not to share your account credentials",
      "You accept responsibility for all activities under your account"
    ]
  },
  {
    icon: <FaUserShield className="w-6 h-6" />,
    title: "User Conduct",
    content: [
      "Do not submit false or misleading information",
      "Do not attempt to bypass any platform restrictions",
      "Do not use the service for unauthorized purposes",
      "Respect intellectual property rights",
      "Do not engage in any harmful or malicious activities"
    ]
  },
  {
    icon: <FaBan className="w-6 h-6" />,
    title: "Prohibited Activities",
    content: [
      "Creating multiple accounts for abuse",
      "Sharing interview content without authorization",
      "Attempting to reverse engineer the AI system",
      "Using automated scripts or bots",
      "Interfering with platform security measures"
    ]
  },
  {
    icon: <FaExclamationTriangle className="w-6 h-6" />,
    title: "Disclaimers and Limitations",
    content: [
      "Service provided 'as is' without warranties",
      "We are not responsible for interview outcomes",
      "We may modify or terminate services at any time",
      "We reserve the right to refuse service",
      "Usage limits apply to free tier accounts"
    ]
  }
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-16 px-4 pt-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-white/70">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8"
        >
          <p className="text-white/70 leading-relaxed">
            Welcome to InterviewerAI. By accessing or using our platform, you agree to be bound by these 
            Terms of Service. Please read these terms carefully before using our service. If you do not 
            agree with any part of these terms, you may not use our service.
          </p>
        </motion.div>

        {/* Main Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 
                              flex items-center justify-center mr-4">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-white/70 flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-white/70 mb-4">
            If you have any questions about our Terms of Service, please contact us at:
          </p>
          <a
            href="mailto:legal@interviewerai.com"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            legal@interviewerai.com
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;