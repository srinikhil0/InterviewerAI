// src/components/home/HowItWorks.tsx
import { 
  DocumentTextIcon, 
  BuildingOfficeIcon, 
  UserCircleIcon, 
  ChatBubbleBottomCenterTextIcon 
} from '@heroicons/react/24/outline';

const steps = [
  {
    icon: DocumentTextIcon,
    title: "Upload Your Resume",
    description: "Share your professional background and let our AI understand your experience.",
    color: "text-blue-600",
  },
  {
    icon: BuildingOfficeIcon,
    title: "Select Target Company",
    description: "Choose your dream company and role for a tailored interview experience.",
    color: "text-purple-600",
  },
  {
    icon: UserCircleIcon,
    title: "Meet Your AI Interviewer",
    description: "Connect with your personalized AI interviewer in a realistic interview setting.",
    color: "text-green-600",
  },
  {
    icon: ChatBubbleBottomCenterTextIcon,
    title: "Get Instant Feedback",
    description: "Receive detailed feedback and suggestions to improve your performance.",
    color: "text-orange-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How InterviewerAI Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Four simple steps to ace your next interview
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center ${step.color} relative z-10`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-center text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;