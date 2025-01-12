// src/components/home/Hero.tsx
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Personal AI Interview Coach
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Practice interviews with our intelligent AI interviewer that adapts to your resume and target companies. Get personalized feedback and improve your chances of landing your dream job.
            </p>
            <div className="mt-10 flex gap-4">
              <Link
                to="/signup"
                className="px-8 py-3 bg-white text-primary-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Practice
              </Link>
              <Link
                to="/how-it-works"
                className="px-8 py-3 border border-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px]">
            {/* 3D avatar preview will be added here */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-primary-800/50 backdrop-blur-sm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stat number="1000+" label="Practice Interviews" />
            <Stat number="500+" label="Companies Covered" />
            <Stat number="95%" label="User Satisfaction" />
            <Stat number="24/7" label="Availability" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ number, label }: { number: string; label: string }) => (
  <div>
    <div className="text-3xl md:text-4xl font-bold">{number}</div>
    <div className="text-gray-300 mt-2">{label}</div>
  </div>
);

export default Hero;