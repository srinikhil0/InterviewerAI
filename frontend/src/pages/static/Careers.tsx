const Careers = () => {
  const openPositions = [
    {
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join us in developing cutting-edge AI interview systems and natural language processing solutions."
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain our web platform, working with modern technologies like React, Node.js, and Cloud services."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Lead the product development of our AI interview platform, working closely with engineering and design teams."
    }
  ];

  const perks = [
    {
      title: "Remote First",
      description: "Work from anywhere in the world",
      icon: "🌍"
    },
    {
      title: "Flexible Hours",
      description: "Balance work and life your way",
      icon: "⏰"
    },
    {
      title: "Learning Budget",
      description: "Annual budget for courses and conferences",
      icon: "📚"
    },
    {
      title: "Latest Tech",
      description: "Work with cutting-edge technologies",
      icon: "💻"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us revolutionize interview preparation with AI technology. 
            We're looking for passionate individuals to join our mission.
          </p>
        </div>

        {/* Perks Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Join Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{perk.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {perk.title}
                </h3>
                <p className="text-gray-600">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {position.title}
                    </h3>
                    <p className="text-gray-600">
                      {position.department} • {position.location} • {position.type}
                    </p>
                  </div>
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors">
                    Apply
                  </button>
                </div>
                <p className="text-gray-600">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;