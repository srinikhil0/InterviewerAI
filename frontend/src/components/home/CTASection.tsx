// src/components/home/CTASection.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaRocket, 
  FaHeart,  
  FaCheckCircle,
  FaCrown,
} from 'react-icons/fa';

const plans = [
  {
    name: 'Free Plan',
    icon: FaHeart,
    features: [
      '5 Interview Hearts',
      '6 Hours Heart Regeneration',
      'Basic Performance Stats',
      'Resume Analysis',
      'Community Support',
      'Contains Ads'
    ]
  },
  {
    name: 'Premium Plan',
    icon: FaCrown,
    features: [
      'Unlimited Hearts',
      'No Regeneration Time',
      'Advanced Analytics',
      'Interview Recording',
      'Priority Support',
      'Ad-Free Experience'
    ]
  }
];

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Ace Your Next Interview?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start practicing with our AI interviewer today and boost your confidence. 
              Get instant feedback and improve your interview skills.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-blue-200">Availability</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-blue-200">Companies</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transform transition-all duration-200 hover:scale-105"
              >
                <FaRocket className="w-5 h-5 mr-2" />
                Start Free Practice
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transform transition-all duration-200 hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Plans */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-4">{plan.name}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-blue-100">
                      <FaCheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default CTASection;