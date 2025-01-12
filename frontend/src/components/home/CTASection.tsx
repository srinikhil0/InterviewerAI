// src/components/home/CTASection.tsx
import { Link } from 'react-router-dom';
import { PLANS } from '../../config/plans';

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    features: PLANS.FREE.features.features,
    buttonText: 'Get Started',
    buttonLink: '/signup',
  },
  {
    name: 'Premium',
    price: '$19.99/month',
    features: PLANS.PREMIUM.features.features,
    buttonText: 'Go Premium',
    buttonLink: '/premium',
    highlighted: true,
  },
];

const CTASection = () => {
  return (
    <section className="py-24 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="mt-4 text-xl text-primary-100">
            Choose the plan that works best for you
          </p>
          
          {/* Pricing Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-white text-primary-900 shadow-xl'
                    : 'bg-primary-800 text-white'
                }`}
              >
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== '$0' && <span className="text-sm ml-2"></span>}
                </div>
                
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className={`w-5 h-5 mr-3 ${
                          plan.highlighted ? 'text-primary-600' : 'text-primary-300'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.buttonLink}
                  className={`mt-8 block w-full py-3 px-6 rounded-full text-center font-semibold ${
                    plan.highlighted
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-white text-primary-900 hover:bg-gray-100'
                  } transition-colors`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-primary-100">Available Anytime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-primary-100">Companies Covered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-primary-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;