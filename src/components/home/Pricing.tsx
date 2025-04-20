
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingPlanProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

function PricingPlan({ 
  title, 
  description, 
  price, 
  features, 
  highlighted = false, 
  buttonText 
}: PricingPlanProps) {
  return (
    <div className={`rounded-2xl overflow-hidden border ${
      highlighted 
        ? 'border-blue-200 shadow-lg shadow-blue-100' 
        : 'border-gray-200 shadow-sm'
    }`}>
      {highlighted && (
        <div className="bg-blue-800 py-1.5 text-center">
          <p className="text-xs font-medium text-white">Most Popular</p>
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="mb-6">
          <p className="text-4xl font-bold text-gray-900">{price}</p>
          {price !== "Free" && <p className="text-gray-600 text-sm">per month, billed annually</p>}
        </div>
        
        <Button 
          className={`w-full mb-8 ${
            highlighted 
              ? 'bg-blue-800 hover:bg-blue-700' 
              : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {buttonText}
        </Button>
        
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className={`h-5 w-5 mr-3 ${
                highlighted ? 'text-blue-800' : 'text-gray-600'
              }`} />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Pricing() {
  const plans = [
    {
      title: "Free",
      description: "Perfect for exploring career options",
      price: "Free",
      buttonText: "Get Started",
      features: [
        "Basic career assessment",
        "Limited job recommendations",
        "Career insights newsletter",
        "Community access"
      ]
    },
    {
      title: "Pro",
      description: "For serious career planning",
      price: "$19",
      buttonText: "Start Free Trial",
      highlighted: true,
      features: [
        "Full AI career assessment",
        "Unlimited job recommendations",
        "Personalized career path planning",
        "Skill gap analysis",
        "Learning resource recommendations",
        "Resume optimization",
        "Priority support"
      ]
    },
    {
      title: "Enterprise",
      description: "For teams and organizations",
      price: "$49",
      buttonText: "Contact Sales",
      features: [
        "Everything in Pro plan",
        "Team analytics dashboard",
        "Career development for teams",
        "Custom career tracks",
        "HR integration",
        "Dedicated account manager",
        "Custom reporting"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for your career journey. All plans include access to our core AI features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need a custom solution? <a href="#" className="text-blue-800 font-medium hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
}
