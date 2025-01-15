import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const AuthNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 top-0 left-0 border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 transform-gpu">
          {/* Logo with 3D effect */}
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center group">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent transform transition-transform group-hover:scale-105 hover:shadow-xl">
                InterviewerAI
              </span>
            </Link>
          </div>

          {/* Desktop Menu with 3D hover effects */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-md hover:-translate-y-0.5 transform-gpu">
              Dashboard
            </Link>
            <Link to="/interview" className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-md hover:-translate-y-0.5 transform-gpu">
              Interview
            </Link>
            <Link to="/history" className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-md hover:-translate-y-0.5 transform-gpu">
              History
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-md hover:-translate-y-0.5 transform-gpu">
              Resources
            </Link>
            
            {/* Profile Dropdown with 3D effects */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-md hover:-translate-y-0.5 transform-gpu flex items-center">
                Profile
              </button>
              <div className="absolute right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform-gpu">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl py-2 ring-1 ring-black/5 transform transition-all">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Profile Settings
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Account Settings
                  </Link>
                  <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
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

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-b border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/dashboard" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-base font-medium">
            Dashboard
          </Link>
          <Link to="/interview" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-base font-medium">
            Interview
          </Link>
          <Link to="/history" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-base font-medium">
            History
          </Link>
          <Link to="/resources" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-base font-medium">
            Resources
          </Link>
          <Link to="/profile" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-base font-medium">
            Profile Settings
          </Link>
          <Link to="/settings" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-base font-medium">
            Account Settings
          </Link>
          <button
            onClick={logout}
            className="block w-full text-left px-3 py-2 text-red-600 hover:bg-gray-100 text-base font-medium"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AuthNavbar;