// src/components/home/InterviewSteps.tsx
const interviewSteps = [
  {
    title: "Resume Screening",
    description: "AI analysis of your resume to understand your background and experience.",
    icon: "📄",
  },
  {
    title: "Initial Chat",
    description: "Friendly conversation about your career goals and expectations.",
    icon: "💬",
  },
  {
    title: "Technical Assessment",
    description: "In-depth technical discussion and problem-solving scenarios.",
    icon: "💻",
  },
  {
    title: "Behavioral Interview",
    description: "Evaluation of your soft skills and cultural fit.",
    icon: "🤝",
  },
  {
    title: "System Design",
    description: "Discussion of architecture and system design principles.",
    icon: "🏗️",
  },
  {
    title: "Final Feedback",
    description: "Comprehensive feedback and improvement suggestions.",
    icon: "📊",
  },
];

const InterviewSteps = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Complete Interview Process
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience every stage of the interview process
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interviewSteps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterviewSteps;