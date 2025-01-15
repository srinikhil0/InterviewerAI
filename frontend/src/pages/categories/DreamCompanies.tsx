import React from 'react';
import { BuildingOfficeIcon, StarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

interface CompanyCardProps {
  name: string;
  logo: string;
  description: string;
  interviewCount: number;
  successRate: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const CompanyCard: React.FC<CompanyCardProps> = ({ name, logo, description, interviewCount, successRate, difficulty }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform-gpu">
    <div className="flex items-center mb-4">
      <img src={logo} alt={name} className="w-12 h-12 rounded-lg mr-4" />
      <div>
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <div className="flex items-center mt-1">
          {[...Array(getDifficultyStars(difficulty))].map((_, i) => (
            <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
          ))}
          <span className="text-sm text-gray-600 ml-2">{difficulty}</span>
        </div>
      </div>
    </div>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <div className="flex items-center justify-between text-sm text-gray-600">
      <div className="flex items-center">
        <UserGroupIcon className="h-4 w-4 mr-1" />
        {interviewCount} Interviews
      </div>
      <div className="flex items-center">
        <ClockIcon className="h-4 w-4 mr-1" />
        Success Rate: {successRate}
      </div>
    </div>
    <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 transform-gpu font-medium">
      Start Interview Prep
    </button>
  </div>
);

const getDifficultyStars = (difficulty: 'Easy' | 'Medium' | 'Hard'): number => {
  switch (difficulty) {
    case 'Easy':
      return 1;
    case 'Medium':
      return 2;
    case 'Hard':
      return 3;
    default:
      return 0;
  }
};

const DreamCompanies = () => {
  const companies = [
    {
      name: 'Google',
      logo: '/company-logos/google.png',
      description: 'Prepare for Google\'s technical interviews focusing on algorithms, system design, and coding challenges.',
      interviewCount: 1500,
      successRate: '75%',
      difficulty: 'Hard' as const,
    },
    {
      name: 'Microsoft',
      logo: '/company-logos/microsoft.png',
      description: 'Practice Microsoft-style interviews with a focus on problem-solving and software architecture.',
      interviewCount: 1200,
      successRate: '80%',
      difficulty: 'Medium' as const,
    },
    {
      name: 'Amazon',
      logo: '/company-logos/amazon.png',
      description: 'Master Amazon\'s leadership principles and technical interview process.',
      interviewCount: 2000,
      successRate: '70%',
      difficulty: 'Hard' as const,
    },
    {
      name: 'Meta',
      logo: '/company-logos/meta.png',
      description: 'Prepare for Meta\'s coding interviews and system design challenges.',
      interviewCount: 1000,
      successRate: '72%',
      difficulty: 'Hard' as const,
    },
    {
      name: 'Apple',
      logo: '/company-logos/apple.png',
      description: 'Practice Apple\'s unique interview style focusing on both technical skills and creativity.',
      interviewCount: 800,
      successRate: '68%',
      difficulty: 'Hard' as const,
    },
    {
      name: 'Netflix',
      logo: '/company-logos/netflix.png',
      description: 'Get ready for Netflix\'s senior-level engineering interviews and system design.',
      interviewCount: 500,
      successRate: '65%',
      difficulty: 'Hard' as const,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Dream Companies
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Practice interviews tailored for top tech companies
          </p>
        </div>

        {/* Featured Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {companies.map((company) => (
            <CompanyCard key={company.name} {...company} />
          ))}
        </div>

        {/* Interview Process Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Interview Process Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100">
              <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-inner w-fit mb-4">
                <BuildingOfficeIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Company Research</h3>
              <p className="text-sm text-gray-600">Learn about company culture, values, and interview patterns</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100">
              <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-inner w-fit mb-4">
                <ClockIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Practice Sessions</h3>
              <p className="text-sm text-gray-600">Complete mock interviews with company-specific questions</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100">
              <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-inner w-fit mb-4">
                <UserGroupIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Feedback & Analysis</h3>
              <p className="text-sm text-gray-600">Get detailed feedback and performance analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamCompanies; 