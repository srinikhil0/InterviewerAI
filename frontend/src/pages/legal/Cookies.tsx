const Cookies = () => {
  const cookieTypes = [
    {
      type: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.",
      canDisable: false
    },
    {
      type: "Performance Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      canDisable: true
    },
    {
      type: "Functional Cookies",
      description: "These cookies enable the website to provide enhanced functionality and personalization, such as remembering your preferences and settings.",
      canDisable: true
    },
    {
      type: "Analytics Cookies",
      description: "These cookies help us analyze how you use our website, which helps us improve our services and your interview preparation experience.",
      canDisable: true
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-gray-600">
              This Cookie Policy explains how InterviewerAI uses cookies and similar technologies 
              to recognize you when you visit our website. It explains what these technologies 
              are and why we use them, as well as your rights to control our use of them.
            </p>
          </section>

          {/* What are cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What are Cookies?
            </h2>
            <p className="text-gray-600">
              Cookies are small data files that are placed on your computer or mobile device 
              when you visit a website. They are widely used by website owners to make their 
              websites work, or work more efficiently, as well as to provide reporting information.
            </p>
          </section>

          {/* Types of Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Types of Cookies We Use
            </h2>
            <div className="space-y-6">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {cookie.type}
                  </h3>
                  <p className="text-gray-600 mb-2">{cookie.description}</p>
                  <div className="text-sm text-gray-500">
                    {cookie.canDisable ? 
                      "Can be disabled" : 
                      "Cannot be disabled (necessary for website functionality)"}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How to control cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Control Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              You can set or amend your web browser controls to accept or refuse cookies. 
              If you choose to reject cookies, you may still use our website though your 
              access to some functionality may be restricted.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                How to manage cookies in different web browsers:
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Chrome: Settings → Privacy and Security → Cookies</li>
                <li>Firefox: Options → Privacy & Security → Cookies</li>
                <li>Safari: Preferences → Privacy → Cookies</li>
                <li>Edge: Settings → Privacy & Security → Cookies</li>
              </ul>
            </div>
          </section>

          {/* Updates to policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Updates to This Policy
            </h2>
            <p className="text-gray-600">
              We may update this Cookie Policy from time to time to reflect changes 
              to the cookies we use or for other operational, legal, or regulatory 
              reasons. Please revisit this Cookie Policy regularly to stay informed 
              about our use of cookies and related technologies.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Questions?
            </h2>
            <p className="text-gray-600">
              If you have any questions about our use of cookies or this Cookie Policy, 
              please contact us at{' '}
              <a 
                href="mailto:privacy@interviewer-ai.com" 
                className="text-primary-600 hover:text-primary-700"
              >
                privacy@interviewer-ai.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
