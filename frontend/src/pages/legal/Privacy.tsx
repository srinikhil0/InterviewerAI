import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserLock, FaCookie, FaEnvelope } from 'react-icons/fa';

interface Section {
  icon: JSX.Element;
  title: string;
  content: string[];
}

const sections: Section[] = [
  {
    icon: <FaShieldAlt className="w-6 h-6" />,
    title: "Information We Collect",
    content: [
      "Personal information (name, email address)",
      "Professional information from your resume",
      "Interview responses and performance data",
      "Usage data and analytics",
      "Device and browser information"
    ]
  },
  {
    icon: <FaUserLock className="w-6 h-6" />,
    title: "How We Use Your Information",
    content: [
      "Personalize your interview experience",
      "Improve our AI interviewer's responses",
      "Provide performance analytics and feedback",
      "Send important updates about our service",
      "Ensure platform security and prevent fraud"
    ]
  },
  {
    icon: <FaCookie className="w-6 h-6" />,
    title: "Cookies and Tracking",
    content: [
      "Essential cookies for platform functionality",
      "Analytics cookies to improve user experience",
      "Session cookies for authentication",
      "Preference cookies to remember your settings",
      "You can manage cookie preferences in your browser"
    ]
  },
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    title: "Contact and Data Rights",
    content: [
      "Request access to your personal data",
      "Request deletion of your data",
      "Opt-out of marketing communications",
      "Update your personal information",
      "Contact us for privacy-related questions"
    ]
  }
];

const Privacy = () => {
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
            Privacy Policy
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
            At InterviewerAI, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, and protect your personal information when you use our platform. By using our service, 
            you agree to the collection and use of information in accordance with this policy.
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
            If you have any questions about our Privacy Policy, please contact us at:
          </p>
          <a
            href="mailto:privacy@interviewerai.com"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            privacy@interviewerai.com
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;