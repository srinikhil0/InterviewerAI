
const About = () => {
  const team = [
    {
      name: "InterviewerAI Team",
      role: "Helping candidates succeed",
      description: "We're a team of developers, AI specialists, and HR professionals dedicated to making interview preparation accessible to everyone."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Using cutting-edge AI technology to create realistic interview experiences",
      icon: "💡"
    },
    {
      title: "Accessibility",
      description: "Making professional interview preparation available to everyone",
      icon: "🌍"
    },
    {
      title: "Quality",
      description: "Providing high-quality, realistic interview practice and feedback",
      icon: "⭐"
    },
    {
      title: "Growth",
      description: "Helping candidates improve and achieve their career goals",
      icon: "📈"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            About InterviewerAI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to revolutionize interview preparation using AI technology,
            making it accessible, effective, and personalized for everyone.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Team
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            {team.map((member, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-primary-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;