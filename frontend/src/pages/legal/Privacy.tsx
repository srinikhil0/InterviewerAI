const Privacy = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Name and contact information</li>
              <li>Resume and professional experience</li>
              <li>Interview responses and feedback</li>
              <li>Account preferences and settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Provide and improve our interview simulation service</li>
              <li>Personalize your interview experience</li>
              <li>Generate feedback and suggestions</li>
              <li>Analyze and improve our AI systems</li>
            </ul>
          </section>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default Privacy;