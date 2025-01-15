import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  DocumentTextIcon,
  PlayIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  CodeBracketIcon,
  BeakerIcon,
  CpuChipIcon,
  CommandLineIcon,
  CloudIcon,
} from '@heroicons/react/24/outline';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: string;
  trend?: 'up' | 'down';
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, change, trend }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform-gpu">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600 font-medium">{title}</p>
        <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">{value}</p>
        {change && (
          <p className={`text-sm mt-2 font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {change} from last month
          </p>
        )}
      </div>
      <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-inner">
        {icon}
      </div>
    </div>
  </div>
);

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, icon, color = "blue", link }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform-gpu">
    <div className={`p-3 bg-gradient-to-br from-${color}-50 to-${color}-100 rounded-xl shadow-inner w-fit mb-4`}>
      {icon}
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
    <Link 
      to={link}
      className={`mt-4 text-${color}-600 hover:text-${color}-700 text-sm font-medium inline-flex items-center`}
    >
      Explore
      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Welcome back, User!
            </h1>
            <p className="text-gray-600 mt-2 text-lg">Here's what's happening with your interview preparation</p>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform-gpu font-medium">
            Start New Interview
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Interviews"
            value="24"
            icon={<UserGroupIcon className="h-8 w-8 text-blue-600" />}
            change="+12%"
            trend="up"
          />
          <StatsCard
            title="Practice Hours"
            value="48.5"
            icon={<ClockIcon className="h-8 w-8 text-blue-600" />}
            change="+8%"
            trend="up"
          />
          <StatsCard
            title="Average Score"
            value="85%"
            icon={<ChartBarIcon className="h-8 w-8 text-blue-600" />}
            change="+5%"
            trend="up"
          />
          <StatsCard
            title="Skills Mastered"
            value="12"
            icon={<AcademicCapIcon className="h-8 w-8 text-blue-600" />}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Sessions */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Recent Interview Sessions
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map((session) => (
                  <div 
                    key={session} 
                    className="flex items-center p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-x-1 transform-gpu"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-inner mr-4">
                      <DocumentTextIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Frontend Developer Interview #{session}</h3>
                      <p className="text-sm text-gray-600">Completed 2 days ago • Score: 88%</p>
                    </div>
                    <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium hover:bg-blue-50 rounded-lg transition-colors">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
              <Link 
                to="/history" 
                className="text-blue-600 hover:text-blue-700 text-sm mt-6 inline-flex items-center font-medium hover:translate-x-1 transition-transform"
              >
                View all sessions 
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Quick Actions
              </h2>
              <div className="space-y-4">
                <button className="w-full flex items-center p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 transform-gpu">
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-inner mr-3">
                    <PlayIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-900">Start Practice Interview</span>
                </button>
                <button className="w-full flex items-center p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 transform-gpu">
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-inner mr-3">
                    <DocumentTextIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-900">Upload Resume</span>
                </button>
                <button className="w-full flex items-center p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 transform-gpu">
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-inner mr-3">
                    <AcademicCapIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-900">View Learning Resources</span>
                </button>
              </div>
            </div>

            {/* Upcoming Interviews */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Upcoming Interviews
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
                  <p className="font-semibold text-gray-900">Senior Frontend Developer</p>
                  <p className="text-sm text-gray-600 mt-1">Tomorrow at 2:00 PM</p>
                </div>
                <Link 
                  to="/schedule" 
                  className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center font-medium hover:translate-x-1 transition-transform"
                >
                  Schedule more interviews
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Interview Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dream Companies */}
            <CategoryCard
              title="Dream Companies"
              description="Practice interviews tailored for top tech companies like Google, Amazon, Microsoft, and more."
              icon={<BuildingOfficeIcon className="h-6 w-6 text-blue-600" />}
              color="blue"
              link="/companies"
            />
            
            {/* Frontend Development */}
            <CategoryCard
              title="Frontend Development"
              description="Master React, Angular, Vue.js interviews with real-world coding challenges."
              icon={<CodeBracketIcon className="h-6 w-6 text-indigo-600" />}
              color="indigo"
              link="/frontend"
            />
            
            {/* Backend Development */}
            <CategoryCard
              title="Backend Development"
              description="Practice system design, APIs, and server-side programming interviews."
              icon={<BeakerIcon className="h-6 w-6 text-purple-600" />}
              color="purple"
              link="/backend"
            />
            
            {/* Data Structures & Algorithms */}
            <CategoryCard
              title="DSA Interview Prep"
              description="Comprehensive practice on algorithms, data structures, and problem-solving."
              icon={<CpuChipIcon className="h-6 w-6 text-green-600" />}
              color="green"
              link="/dsa"
            />
            
            {/* DevOps & Cloud */}
            <CategoryCard
              title="DevOps & Cloud"
              description="Prepare for DevOps engineer roles and cloud platform certifications."
              icon={<CloudIcon className="h-6 w-6 text-cyan-600" />}
              color="cyan"
              link="/devops"
            />
            
            {/* System Design */}
            <CategoryCard
              title="System Design"
              description="Learn to design scalable systems and tackle architecture interviews."
              icon={<CommandLineIcon className="h-6 w-6 text-rose-600" />}
              color="rose"
              link="/system"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;