import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FirebaseError } from 'firebase/app';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
    special: false
  });
  const navigate = useNavigate();
  const { signUp, signInWithGoogle } = useAuth();

  const validatePassword = (password: string) => {
    setPasswordValidation({
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    });

    const errors = [];
    if (!passwordValidation.length) errors.push('Password must be at least 8 characters long');
    if (!passwordValidation.lowercase) errors.push('Password must contain at least one lowercase letter');
    if (!passwordValidation.uppercase) errors.push('Password must contain at least one uppercase letter');
    if (!passwordValidation.number) errors.push('Password must contain at least one number');
    if (!passwordValidation.special) errors.push('Password must contain at least one special character');
    return errors;
  };

  const getErrorMessage = (error: FirebaseError) => {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return 'An account with this email already exists.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/operation-not-allowed':
        return 'Email/password accounts are not enabled. Please contact support.';
      case 'auth/weak-password':
        return 'Password is too weak. Please choose a stronger password.';
      default:
        return 'Failed to create account. Please try again.';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset error
    setError('');

    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate password strength
    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setError(passwordErrors.join('\n'));
      return;
    }

    try {
      setLoading(true);
      await signUp(email, password);
      navigate('/dashboard');
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(getErrorMessage(error));
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      await signInWithGoogle();
      navigate('/dashboard');
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(getErrorMessage(error));
      } else {
        setError('Failed to sign in with Google. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        
        <div className="bg-pink-50 border border-pink-200 text-pink-700 px-4 py-3 rounded-md">
          <p className="font-medium mb-2">Password requirements:</p>
          <ul className="text-sm space-y-1">
            <li className={`flex items-center ${passwordValidation.length ? 'text-green-600' : 'text-red-600'}`}>
              <span className={`mr-2 ${passwordValidation.length ? 'text-green-600' : 'text-red-600'}`}>
                {passwordValidation.length ? '✓' : '×'}
              </span>
              Must be at least 8 characters long
            </li>
            <li className={`flex items-center ${passwordValidation.lowercase ? 'text-green-600' : 'text-red-600'}`}>
              <span className={`mr-2 ${passwordValidation.lowercase ? 'text-green-600' : 'text-red-600'}`}>
                {passwordValidation.lowercase ? '✓' : '×'}
              </span>
              Must contain at least one lowercase letter
            </li>
            <li className={`flex items-center ${passwordValidation.uppercase ? 'text-green-600' : 'text-red-600'}`}>
              <span className={`mr-2 ${passwordValidation.uppercase ? 'text-green-600' : 'text-red-600'}`}>
                {passwordValidation.uppercase ? '✓' : '×'}
              </span>
              Must contain at least one uppercase letter
            </li>
            <li className={`flex items-center ${passwordValidation.number ? 'text-green-600' : 'text-red-600'}`}>
              <span className={`mr-2 ${passwordValidation.number ? 'text-green-600' : 'text-red-600'}`}>
                {passwordValidation.number ? '✓' : '×'}
              </span>
              Must contain at least one number
            </li>
            <li className={`flex items-center ${passwordValidation.special ? 'text-green-600' : 'text-red-600'}`}>
              <span className={`mr-2 ${passwordValidation.special ? 'text-green-600' : 'text-red-600'}`}>
                {passwordValidation.special ? '✓' : '×'}
              </span>
              Must contain at least one special character:
              <span className="font-mono ml-1">!@#$%^&*(),.?":{}|&lt;&gt;</span>
            </li>
          </ul>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            {error.split('\n').map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {loading ? 'Creating account...' : 'Sign up'}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <img
                className="h-5 w-5 mr-2"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
              />
              Sign up with Google
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register; 