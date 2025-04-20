
import {
  BrainCircuit,
  GraduationCap,
  LineChart,
  ListTodo,
  LucideIcon,
  PieChart,
  RotateCcw,
  User
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
}

function FeatureCard({ title, description, icon: Icon, iconColor, bgColor }: FeatureCardProps) {
  return (
    <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition">
      <div className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function Features() {
  const features = [
    {
      title: "AI Career Assessment",
      description: "Get personalized career recommendations based on your skills, interests, and personality.",
      icon: BrainCircuit,
      iconColor: "text-blue-800",
      bgColor: "bg-blue-50",
    },
    {
      title: "Skill Gap Analysis",
      description: "Identify the skills you need to develop for your dream career path.",
      icon: PieChart,
      iconColor: "text-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      title: "Personalized Learning Paths",
      description: "Custom learning recommendations to help you close skill gaps efficiently.",
      icon: GraduationCap,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      title: "Industry Insights",
      description: "Stay informed about trends and demands in your field of interest.",
      icon: LineChart,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Goal Tracking",
      description: "Set career milestones and track your progress with interactive dashboards.",
      icon: ListTodo,
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Career Simulations",
      description: "Visualize different career paths and potential outcomes before making decisions.",
      icon: RotateCcw,
      iconColor: "text-red-500",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features to Guide Your Career Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform provides the tools you need to make confident career decisions and grow professionally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
