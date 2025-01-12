const Terms = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By accessing and using InterviewerAI, you agree to be bound by these 
              Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Use License
            </h2>
            <p className="text-gray-600">
              We grant you a personal, non-transferable license to use InterviewerAI 
              for interview preparation purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Provide accurate information</li>
              <li>Maintain account security</li>
              <li>Use the service appropriately</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default Terms;