// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { AuthProvider } from './context/AuthContextProvider';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Static Pages
import Home from './pages/static/Home';
import Features from './pages/static/Features';
import HowItWorks from './pages/static/HowItWorks';
import About from './pages/static/About';
import Contact from './pages/static/Contact';
import Careers from './pages/static/Careers';
import Blog from './pages/static/Blog';
import FAQ from './pages/static/FAQ';
import Premium from './pages/static/Premium';
// Legal Pages
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Cookies from './pages/legal/Cookies';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

// Protected Pages
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/dashboard/Profile';
import InterviewSession from './pages/interview/InterviewSession';
import InterviewHistory from './pages/interview/InterviewHistory';
import Settings from './pages/dashboard/Settings';
import BlogEditor from './pages/dashboard/BlogEditor';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Static Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/static/premium" element={<Premium />} />
            
            {/* Legal Pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />

            {/* Auth Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/interview"
              element={
                <ProtectedRoute>
                  <InterviewSession />
                </ProtectedRoute>
              }
            />
            <Route
              path="/interview-history"
              element={
                <ProtectedRoute>
                  <InterviewHistory />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/dashboard/blog-editor" 
              element={
                <ProtectedRoute allowedRoles={['admin', 'editor']}>
                  <BlogEditor />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;