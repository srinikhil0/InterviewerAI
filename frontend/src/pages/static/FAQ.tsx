import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  questions: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Getting Started",
    questions: [
      {
        question: "How do I start practicing interviews?",
        answer: "Simply sign up for a free account, upload your resume, and select your target industry and company. Our AI interviewer will analyze your background and start a personalized interview session."
      },
      {
        question: "Is there a cost to use the platform?",
        answer: "We offer both free and premium plans. The free plan includes 5 interview attempts with basic features. Premium users get unlimited interviews, advanced analytics, and ad-free experience."
      },
      {
        question: "What happens if I run out of hearts?",
        answer: "Free plan users get 5 hearts, which regenerate every 6 hours. Each failed interview costs one heart. You can upgrade to premium for unlimited hearts or wait for regeneration."
      }
    ]
  },
  {
    title: "Interview Process",
    questions: [
      {
        question: "What types of interviews do you offer?",
        answer: "We cover various interview types including technical interviews, behavioral interviews, and role-specific interviews across different industries."
      },
      {
        question: "How realistic are the AI interviews?",
        answer: "Our AI interviewer is trained on real interview experiences and industry best practices. It adapts to your responses and provides natural follow-up questions, simulating a real interview environment."
      },
      {
        question: "Can I practice specific types of questions?",
        answer: "Yes, you can focus on specific areas like technical skills, behavioral questions, or industry-specific scenarios. The AI adapts the questions based on your preferences and experience level."
      }
    ]
  },
  {
    title: "Technical Requirements",
    questions: [
      {
        question: "What browsers are supported?",
        answer: "Our platform works best on modern browsers like Chrome, Firefox, Safari, and Edge. Make sure your browser is updated to the latest version for optimal performance."
      },
      {
        question: "Do I need any special software?",
        answer: "No special software is required. Everything runs in your web browser. Just ensure you have a stable internet connection for the best experience."
      }
    ]
  },
  {
    title: "Account & Privacy",
    questions: [
      {
        question: "How is my data protected?",
        answer: "We take privacy seriously. Your data is encrypted and stored securely. We never share your personal information or interview responses with third parties."
      },
      {
        question: "Can I delete my account and data?",
        answer: "Yes, you can delete your account and all associated data at any time from your account settings. This action is permanent and cannot be undone."
      }
    ]
  }
];

const FAQ = () => {
  const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>(
    Object.fromEntries(faqData.map(category => [category.title, true]))
  );
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (title: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-16 px-4 pt-20">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Find answers to common questions about our interview preparation platform.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {faqData.map((category) => (
            <div
              key={category.title}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full px-6 py-4 flex items-center justify-between text-white hover:bg-white/5 transition-colors"
              >
                <h2 className="text-xl font-semibold">{category.title}</h2>
                {openCategories[category.title] ? (
                  <FaChevronUp className="w-5 h-5 text-cyan-400" />
                ) : (
                  <FaChevronDown className="w-5 h-5 text-cyan-400" />
                )}
              </button>

              {/* Questions */}
              {openCategories[category.title] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-white/10"
                >
                  {category.questions.map((item) => (
                    <div key={item.question} className="border-b border-white/10 last:border-b-0">
                      <button
                        onClick={() => toggleQuestion(item.question)}
                        className="w-full px-6 py-4 flex items-center justify-between text-white hover:bg-white/5 transition-colors"
                      >
                        <h3 className="text-left font-medium">{item.question}</h3>
                        {openQuestions[item.question] ? (
                          <FaChevronUp className="w-4 h-4 text-cyan-400 flex-shrink-0 ml-4" />
                        ) : (
                          <FaChevronDown className="w-4 h-4 text-cyan-400 flex-shrink-0 ml-4" />
                        )}
                      </button>
                      {openQuestions[item.question] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-6 pb-4 text-white/70"
                        >
                          <p>{item.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-white/70 mb-4">
            Can't find what you're looking for?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg 
                     bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium 
                     hover:from-cyan-600 hover:to-blue-600 transition-all"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;