// src/components/layout/Navbar.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 top-0 left-0 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                InterviewerAI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/features" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Features
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              How it Works
            </Link>
            
            {!user ? (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Login
                </Link>
                <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                  Sign up
                </Link>
              </div>
            ) : (
              <Link to="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                Dashboard
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-b border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/features" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-base font-medium">
            Features
          </Link>
          <Link to="/how-it-works" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-base font-medium">
            How it Works
          </Link>
          {!user ? (
            <>
              <Link to="/login" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-base font-medium">
                Login
              </Link>
              <Link to="/register" className="block px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 text-base font-medium rounded-full">
                Sign up
              </Link>
            </>
          ) : (
            <Link to="/dashboard" className="block px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 text-base font-medium rounded-full">
              Dashboard
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;