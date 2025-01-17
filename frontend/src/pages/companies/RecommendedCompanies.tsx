import { useState, useEffect } from 'react';
import {
  BuildingOfficeIcon,
  AdjustmentsHorizontalIcon,
  StarIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline';

interface Company {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  logoUrl: string;
  description: string;
  roles: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  matchScore: number;
  interviewCount: number;
  successRate: string;
}

const RecommendedCompanies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: 'all',
    difficulty: 'all',
    matchScore: 0,
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // In real implementation, this would be an API call
    const fetchRecommendedCompanies = async () => {
      try {
        setLoading(true);
        // Mock data - replace with actual API call
        const response = await mockFetchCompanies();
        setCompanies(response);
      } catch (error) {
        console.error('Error fetching companies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedCompanies();
  }, []);

  const filteredCompanies = companies.filter(company => {
    return (
      (filters.category === 'all' || company.category === filters.category) &&
      (filters.difficulty === 'all' || company.difficulty === filters.difficulty) &&
      company.matchScore >= filters.matchScore
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Recommended Companies
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Personalized recommendations based on your profile
            </p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 text-gray-700 bg-white rounded-lg shadow-sm hover:bg-gray-50"
          >
            <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="all">All Categories</option>
                  <option value="IT">Information Technology</option>
                  <option value="Automobile">Automobile</option>
                  <option value="Healthcare">Healthcare</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty
                </label>
                <select
                  value={filters.difficulty}
                  onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="all">All Levels</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Match Score
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filters.matchScore}
                  onChange={(e) => setFilters({ ...filters, matchScore: Number(e.target.value) })}
                  className="w-full"
                />
                <span className="text-sm text-gray-600">{filters.matchScore}% match</span>
              </div>
            </div>
          </div>
        )}

        {/* Companies Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
              <div
                key={company.id}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform-gpu"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-xl mr-4 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
                    {company.logoUrl ? (
                      <img
                        src={company.logoUrl}
                        alt={company.name}
                        className="w-12 h-12 object-contain"
                      />
                    ) : (
                      <BuildingOfficeIcon className="h-8 w-8 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
                    <div className="flex items-center mt-1">
                      <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {company.category}
                      </div>
                      <div className="ml-2 flex items-center">
                        {[...Array(getDifficultyStars(company.difficulty))].map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{company.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <FunnelIcon className="h-4 w-4 mr-1 text-green-500" />
                    {company.matchScore}% Match
                  </div>
                  <div>
                    {company.interviewCount} interviews
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700">Available Roles:</h4>
                  <div className="flex flex-wrap gap-2">
                    {company.roles.map((role, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 transform-gpu font-medium">
                  Start Interview Prep
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Helper function for difficulty stars
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

// Updated mock function without requiring user profile
const mockFetchCompanies = async (): Promise<Company[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock data
  return [
    {
      id: '1',
      name: 'TechCorp',
      category: 'IT',
      subcategory: 'Software',
      logoUrl: '',
      description: 'Leading software development company specializing in cloud solutions.',
      roles: ['Software Engineer', 'Frontend Developer', 'Backend Developer'],
      difficulty: 'Medium',
      matchScore: 95,
      interviewCount: 1500,
      successRate: '75%',
    },
    // Add more mock companies...
  ];
};

export default RecommendedCompanies; 