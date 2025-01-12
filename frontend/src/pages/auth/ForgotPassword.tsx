// src/pages/auth/ForgotPassword.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaEnvelope } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

interface FirebaseError {
  code: string;
  message: string;
}

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      setLoading(true);
      await resetPassword(email);
      setSuccessMessage('Password reset email sent! Please check your inbox.');
      setEmail(''); // Clear the email field after success
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

      <div className="max-w-md mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/login"
              className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 mb-6"
            >
              <FaArrowLeft className="w-4 h-4 mr-2" />
              Back to Login
            </Link>

            <h2 className="text-2xl font-bold text-white mb-2">
              Reset Password
            </h2>
            <p className="text-white/70 mb-6">
              Enter your email address and we'll send you instructions to reset your password.
            </p>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 mb-4 text-red-200">
                {error}
              </div>
            )}

            {successMessage && (
              <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-3 mb-4 text-green-200">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-lg bg-white/5 border border-white/10 pl-10 pr-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="you@example.com"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-4 w-4 text-white/50" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-white/50">
                Remember your password?{' '}
                <Link to="/login" className="font-medium text-cyan-400 hover:text-cyan-300">
                  Sign in
                </Link>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 bg-white/10 backdrop-blur-lg rounded-xl p-4"
        >
          <h3 className="text-sm font-medium text-white mb-2">
            Didn't receive the email?
          </h3>
          <ul className="text-sm text-white/70 space-y-2">
            <li>• Check your spam folder</li>
            <li>• Make sure you entered the correct email address</li>
            <li>• Wait a few minutes and try again</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ForgotPassword;