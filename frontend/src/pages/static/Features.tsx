const Features = () => {
  const features = [
    {
      title: "AI-Powered Interviews",
      description: "Experience realistic interviews with our advanced AI interviewer that adapts to your responses.",
      icon: "🤖"
    },
    {
      title: "Resume-Based Questions",
      description: "Get questions tailored to your experience and skills mentioned in your resume.",
      icon: "📄"
    },
    {
      title: "Real-time Feedback",
      description: "Receive instant feedback on your responses and detailed improvement suggestions.",
      icon: "💡"
    },
    {
      title: "Complete Interview Process",
      description: "Practice every stage of the interview process from initial screening to final rounds.",
      icon: "🎯"
    },
    {
      title: "Available 24/7",
      description: "Practice at your convenience, any time of day or night.",
      icon: "⏰"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your improvement over time with detailed performance analytics.",
      icon: "📈"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Features
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to ace your next interview
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;