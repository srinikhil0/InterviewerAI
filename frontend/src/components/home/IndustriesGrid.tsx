// src/components/home/IndustriesGrid.tsx
import { motion } from 'framer-motion';
import { FaLaptopCode, FaUserMd, FaCogs, FaGraduationCap, FaBalanceScale, FaChartLine, FaUniversity, FaCar } from 'react-icons/fa';

interface Industry {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  roles: string[];
  isActive: boolean;
}

const industries: Industry[] = [
  {
    id: 'it',
    name: 'Information Technology',
    icon: FaLaptopCode,
    description: 'Software development, cybersecurity, and IT infrastructure roles',
    roles: ['Software Engineer', 'Data Scientist', 'Product Manager'],
    isActive: true,
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: FaUserMd,
    description: 'Medical, pharmaceutical, and healthcare administration positions',
    roles: ['Medical Officer', 'Healthcare Administrator', 'Research Scientist'],
    isActive: false,
  },
  {
    id: 'engineering',
    name: 'Engineering',
    icon: FaCogs,
    description: 'Mechanical, electrical, and civil engineering opportunities',
    roles: ['Mechanical Engineer', 'Electrical Engineer', 'Civil Engineer'],
    isActive: false,
  },
  {
    id: 'education',
    name: 'Education',
    icon: FaGraduationCap,
    description: 'Teaching, administration, and educational technology roles',
    roles: ['Professor', 'Educational Tech Specialist', 'Academic Advisor'],
    isActive: false,
  },
  {
    id: 'legal',
    name: 'Legal',
    icon: FaBalanceScale,
    description: 'Legal practice, compliance, and regulatory positions',
    roles: ['Corporate Lawyer', 'Legal Consultant', 'Compliance Officer'],
    isActive: false,
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: FaChartLine,
    description: 'Banking, investment, and financial analysis roles',
    roles: ['Investment Banker', 'Financial Analyst', 'Risk Manager'],
    isActive: false,
  },
  {
    id: 'mba',
    name: 'Business/MBA',
    icon: FaUniversity,
    description: 'Management, consulting, and business strategy positions',
    roles: ['Business Consultant', 'Strategy Manager', 'Operations Director'],
    isActive: false,
  },
  {
    id: 'automobile',
    name: 'Automobile',
    icon: FaCar,
    description: 'Automotive design, manufacturing, and R&D roles',
    roles: ['Automotive Engineer', 'Production Manager', 'R&D Specialist'],
    isActive: false,
  },
];

const IndustriesGrid = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your target industry to get personalized interview preparation
            tailored to your career goals
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              variants={item}
              className={`relative group rounded-2xl p-6 ${
                industry.isActive
                  ? 'bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100'
                  : 'bg-white'
              } shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <div className="absolute inset-0 bg-grid-gray-900/[0.1] bg-[size:20px_20px]" />
              </div>

              <div className="relative">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                  industry.isActive
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  <industry.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {industry.description}
                </p>

                {/* Popular Roles */}
                <div className="space-y-2">
                  {industry.roles.map((role, index) => (
                    <div
                      key={index}
                      className="text-sm text-gray-500 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-2" />
                      {role}
                    </div>
                  ))}
                </div>

                {/* Coming Soon Badge */}
                {!industry.isActive && (
                  <div className="absolute top-4 right-4 bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                    Coming Soon
                  </div>
                )}

                {/* Active Badge */}
                {industry.isActive && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                    Available
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesGrid;