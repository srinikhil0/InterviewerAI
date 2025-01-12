import { motion } from 'framer-motion';
import { FaCookie, FaShieldAlt, FaToggleOn, FaQuestionCircle } from 'react-icons/fa';

interface Section {
  icon: JSX.Element;
  title: string;
  content: string[];
}

const sections: Section[] = [
  {
    icon: <FaCookie className="w-6 h-6" />,
    title: "Essential Cookies",
    content: [
      "Authentication and security",
      "Session management",
      "User preferences",
      "Load balancing",
      "These cookies cannot be disabled"
    ]
  },
  {
    icon: <FaShieldAlt className="w-6 h-6" />,
    title: "Analytics Cookies",
    content: [
      "Understanding how you use our platform",
      "Measuring feature effectiveness",
      "Identifying technical issues",
      "Improving user experience",
      "These cookies can be disabled"
    ]
  },
  {
    icon: <FaToggleOn className="w-6 h-6" />,
    title: "Managing Cookies",
    content: [
      "Control cookies through browser settings",
      "Delete cookies from your device",
      "Set cookie preferences on our platform",
      "Opt-out of non-essential cookies",
      "Note: Some features may be affected"
    ]
  },
  {
    icon: <FaQuestionCircle className="w-6 h-6" />,
    title: "Third-Party Cookies",
    content: [
      "Google Analytics for usage statistics",
      "Firebase for authentication",
      "Payment processor cookies",
      "Social media integration",
      "Review third-party privacy policies"
    ]
  }
];

const Cookies = () => {
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
            Cookie Policy
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
            InterviewerAI uses cookies to enhance your experience on our platform. This Cookie Policy 
            explains how we use cookies, what data they collect, and how you can control them. By 
            using our service, you consent to our use of cookies in accordance with this policy.
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

        {/* Browser Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-white/10 backdrop-blur-lg rounded-xl p-6"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            How to Control Cookies in Your Browser
          </h2>
          <div className="space-y-2 text-white/70">
            <p>• Chrome: Settings → Privacy and Security → Cookies and other site data</p>
            <p>• Firefox: Options → Privacy & Security → Cookies and Site Data</p>
            <p>• Safari: Preferences → Privacy → Cookies and website data</p>
            <p>• Edge: Settings → Cookies and site permissions → Cookies</p>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-white/70 mb-4">
            If you have any questions about our Cookie Policy, please contact us at:
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

export default Cookies;
