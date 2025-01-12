// src/components/home/Hero.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import interviewAnimation from '../../assets/animations/Home_interview.json';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Personal AI
              <span className="block mt-2">Interview Coach</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-2xl">
              Practice interviews with our intelligent AI interviewer that adapts
              to your resume and target companies. Get personalized feedback
              and improve your chances of landing your dream job.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-sm text-blue-200">Practice Interviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-blue-200">Companies Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-sm text-blue-200">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-blue-200">Availability</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transform transition-all duration-200 hover:scale-105"
              >
                Start Free Practice
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-blue-800/50 hover:bg-blue-800/70 backdrop-blur-sm transform transition-all duration-200 hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* 3D Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 backdrop-blur-3xl border border-white/10">
                <div className="p-6 h-full flex flex-col items-center justify-center">
                  <Lottie 
                    animationData={interviewAnimation}
                    loop={true}
                    className="w-full h-full"
                    style={{ maxWidth: '500px' }}
                  />
                  
                  {/* Floating Features */}
                  <div className="absolute top-10 left-10 bg-white/10 backdrop-blur-lg rounded-xl p-3 animate-float-slow">
                    <span className="text-white/80 text-sm">AI-Powered Feedback</span>
                  </div>
                  <div className="absolute bottom-20 right-10 bg-white/10 backdrop-blur-lg rounded-xl p-3 animate-float">
                    <span className="text-white/80 text-sm">Real-time Analysis</span>
                  </div>
                  <div className="absolute top-20 right-20 bg-white/10 backdrop-blur-lg rounded-xl p-3 animate-float-fast">
                    <span className="text-white/80 text-sm">Industry Specific</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;