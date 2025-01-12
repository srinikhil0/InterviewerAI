// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Static Pages
import Home from './pages/static/Home';
import Features from './pages/static/Features';
import HowItWorks from './pages/static/HowItWorks';
import About from './pages/static/About';
import Contact from './pages/static/Contact';
import Careers from './pages/static/Careers';
import Blog from './pages/static/Blog';
import FAQ from './pages/static/FAQ';

// Legal Pages
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Cookies from './pages/legal/Cookies';

const App = () => {
  return (
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

          {/* Legal Pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;