import { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is InterviewerAI?",
      answer: "InterviewerAI is an AI-powered platform that provides realistic interview practice. It uses advanced AI to simulate real interview experiences, offering personalized feedback and improvement suggestions."
    },
    {
      question: "How does the hearts system work?",
      answer: "Free users get 5 hearts, with each heart representing one interview attempt. When you don't pass an interview stage, you lose a heart. Hearts regenerate every 6 hours, allowing you to try again."
    },
    {
      question: "How realistic are the interviews?",
      answer: "Our AI interviewer is trained on real interview scenarios and adapts to your responses, creating a very realistic interview experience. The questions are tailored to your resume and the interview stage."
    },
    {
      question: "What types of interviews are supported?",
      answer: "We support all stages of the interview process including resume screening, initial calls, technical interviews, and behavioral interviews."
    },
    {
      question: "How does the feedback system work?",
      answer: "You receive real-time feedback on your responses, including detailed suggestions for improvement. The feedback covers both technical accuracy and communication skills."
    },
    {
      question: "Can I practice for specific companies?",
      answer: "Yes, our system adapts to different company interview styles and requirements, helping you prepare for specific target companies."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about InterviewerAI
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="text-primary-600">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;