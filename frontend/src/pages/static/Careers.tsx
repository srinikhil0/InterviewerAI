import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUsers, FaLaptopCode, FaRocket, FaHeart } from 'react-icons/fa';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  experience: string;
  description: string;
}

const jobPositions: JobPosition[] = [
  {
    id: '1',
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead the development of our AI interview engine and help shape the future of interview preparation.'
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Build and maintain our web application, working with React, Node.js, and cloud technologies.'
  },
  {
    id: '3',
    title: 'Content Writer',
    department: 'Content',
    location: 'Remote',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Create engaging content for our blog and help develop interview questions across various industries.'
  }
];

const perks = [
  {
    icon: <FaLaptopCode className="w-6 h-6" />,
    title: 'Remote First',
    description: 'Work from anywhere in the world. We believe in flexibility and work-life balance.'
  },
  {
    icon: <FaRocket className="w-6 h-6" />,
    title: 'Growth Opportunities',
    description: 'Regular learning sessions, conference budgets, and career development support.'
  },
  {
    icon: <FaHeart className="w-6 h-6" />,
    title: 'Comprehensive Benefits',
    description: 'Health insurance, wellness programs, and competitive compensation packages.'
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: 'Inclusive Culture',
    description: 'Join a diverse team that values different perspectives and ideas.'
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-16 px-4 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Mission
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Help us revolutionize the way people prepare for interviews and build their dream careers.
          </p>
        </motion.div>

        {/* Company Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="text-cyan-400 mb-4">{perk.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{perk.title}</h3>
                <p className="text-white/70">{perk.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
          <div className="space-y-4">
            {jobPositions.map((job) => (
              <div
                key={job.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/careers/${job.id}`}
                    className="mt-4 md:mt-0 inline-flex items-center justify-center px-6 py-2 rounded-lg 
                             bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium 
                             hover:from-cyan-600 hover:to-blue-600 transition-all"
                  >
                    Apply Now
                  </Link>
                </div>
                <p className="text-white/70">{job.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;