// src/pages/Home.tsx
import Hero from '../../components/home/Hero';
import Features from '../../components/home/Features';
import HowItWorks from '../../components/home/HowItWorks';
import InterviewSteps from '../../components/home/InterviewSteps';
import CTASection from '../../components/home/CTASection';
import IndustriesGrid from '../../components/home/IndustriesGrid';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <IndustriesGrid />
      <Features />
      <HowItWorks />
      <InterviewSteps />
      <CTASection />
    </div>
  );
};

export default Home;