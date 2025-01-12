const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Your Resume",
      description: "Share your professional background and let our AI understand your experience and skills.",
      icon: "📄"
    },
    {
      number: "02",
      title: "Select Interview Type",
      description: "Choose the type of interview you want to practice, from initial screening to technical rounds.",
      icon: "🎯"
    },
    {
      number: "03",
      title: "Practice Interview",
      description: "Engage in a realistic interview with our AI interviewer, answering questions tailored to your profile.",
      icon: "💬"
    },
    {
      number: "04",
      title: "Get Feedback",
      description: "Receive detailed feedback on your performance and specific areas for improvement.",
      icon: "📊"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            How It Works
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Four simple steps to prepare for your dream job
          </p>
        </div>

        <div className="mt-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } mb-20 last:mb-0`}
            >
              <div className="w-1/2 px-8">
                <div className="text-6xl mb-4">{step.icon}</div>
                <div className="text-primary-600 font-bold text-xl mb-2">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {step.description}
                </p>
              </div>
              <div className="w-1/2 px-8">
                {/* Placeholder for step illustration */}
                <div className="bg-primary-100 rounded-lg h-64 flex items-center justify-center">
                  <span className="text-6xl">{step.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;