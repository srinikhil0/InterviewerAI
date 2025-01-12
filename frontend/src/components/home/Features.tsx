// src/components/home/Features.tsx
import { 
  UserCircleIcon, 
  BuildingOfficeIcon, 
  ChartBarIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    title: "Intelligent AI Interviewer",
    description: "Experience realistic interviews with our advanced AI interviewer that adapts to your background and target role.",
    icon: UserCircleIcon,
  },
  {
    title: "Company-Specific Preparation",
    description: "Practice interviews tailored to your target company's culture, values, and interview process.",
    icon: BuildingOfficeIcon,
  },
  {
    title: "Comprehensive Feedback",
    description: "Get instant, detailed feedback on your responses with specific improvement suggestions.",
    icon: ChartBarIcon,
  },
  {
    title: "Flexible Practice",
    description: "Practice anytime with our free tier offering 5 interview attempts that regenerate every 6 hours.",
    icon: ClockIcon,
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose InterviewerAI?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Your personal interview coach for any company, any role
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <feature.icon className="w-16 h-16 p-3 bg-primary-100 text-primary-600 rounded-full" />
              </div>
              <h3 className="mt-8 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;