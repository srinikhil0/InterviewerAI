// src/pages/auth/Register.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGoogle, FaHeart, FaCrown, FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

interface PasswordValidation {
  minLength: boolean;
  hasNumber: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasSpecial: boolean;
}

interface FirebaseError {
  code: string;
  message: string;
}

const Register = () => {
  const navigate = useNavigate();
  const { signUp, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState<PasswordValidation>({
    minLength: false,
    hasNumber: false,
    hasUppercase: false,
    hasLowercase: false,
    hasSpecial: false,
  });

  const validatePassword = (value: string) => {
    setPasswordValidation({
      minLength: value.length >= 8,
      hasNumber: /\d/.test(value),
      hasUppercase: /[A-Z]/.test(value),
      hasLowercase: /[a-z]/.test(value),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(value),
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate all password requirements
    const isValidPassword = Object.values(passwordValidation).every(Boolean);
    if (!isValidPassword) {
      setError('Please meet all password requirements');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      await signUp(email, password);
      navigate('/dashboard');
    } catch (error) {
      const firebaseError = error as FirebaseError;
      setError(firebaseError.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      navigate('/dashboard');
    } catch (error) {
      const firebaseError = error as FirebaseError;
      setError(firebaseError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-8 px-4">
      <div className="max-w-7xl mx-auto mb-8">
        <Link to="/" className="text-2xl font-bold text-white">
          InterviewerAI
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Side - Registration Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Create Your Account
              </h2>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 mb-4 text-red-200">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-blue-100 mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                    className="block w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="••••••••"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-blue-100 mb-1">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="••••••••"
                  />
                </div>

                {/* Password Requirements - Simplified */}
                <div className="bg-white/5 rounded-lg p-3 space-y-1.5">
                  <h4 className="text-sm font-medium text-blue-100 mb-2">Password Requirements:</h4>
                  {Object.entries(passwordValidation).map(([key, isValid]) => (
                    <div key={key} className="flex items-center text-sm">
                      <FaCheckCircle className={`w-3.5 h-3.5 mr-2 ${isValid ? 'text-cyan-400' : 'text-white/30'}`} />
                      <span className={isValid ? 'text-cyan-400' : 'text-white/50'}>
                        {key === 'minLength' && 'At least 8 characters'}
                        {key === 'hasNumber' && 'Contains a number'}
                        {key === 'hasUppercase' && 'Contains an uppercase letter'}
                        {key === 'hasLowercase' && 'Contains a lowercase letter'}
                        {key === 'hasSpecial' && 'Contains a special character (!@#$%^&*(),.?":{}|<>)'}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-transparent text-white/50">Or continue with</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  className="w-full flex items-center justify-center py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaGoogle className="w-4 h-4 mr-2" />
                  Google
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-white/50">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-cyan-400 hover:text-cyan-300">
                  Login
                </Link>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Free Plan Features */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                  <FaHeart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white ml-3">Free Plan Features</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-white/80">
                  <FaCheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  <span>5 Interview Hearts</span>
                </li>
                <li className="flex items-center text-white/80">
                  <FaCheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  <span>6 Hours Heart Regeneration</span>
                </li>
                <li className="flex items-center text-white/80">
                  <FaCheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  <span>Basic Performance Stats</span>
                </li>
                <li className="flex items-center text-white/80">
                  <FaCheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  <span>Resume Analysis</span>
                </li>
              </ul>
            </div>

            {/* Premium Upgrade */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                  <FaCrown className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white ml-3">Upgrade to Premium</h3>
              </div>
              <p className="text-white/80 mb-4">
                Get unlimited hearts, advanced analytics, and an ad-free experience
              </p>
              <Link
                to="/static/premium"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;