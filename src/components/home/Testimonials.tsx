
import { QuoteIcon } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

function Testimonial({ quote, name, role, company, image }: TestimonialProps) {
  return (
    <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 flex flex-col h-full">
      <div className="mb-6">
        <QuoteIcon className="h-8 w-8 text-blue-200" />
      </div>
      
      <p className="text-gray-700 mb-6 flex-grow">"{quote}"</p>
      
      <div className="flex items-center">
        <img src={image} alt={name} className="h-12 w-12 rounded-full mr-4 object-cover" />
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-gray-600 text-sm">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      quote: "PathFinder's AI assessment was spot-on in recommending a career pivot into data science. The skill gap analysis gave me a clear roadmap to follow, and now I'm in a job I love!",
      name: "Sarah Johnson",
      role: "Data Scientist",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "After feeling stuck in my career for years, PathFinder helped me visualize potential growth paths. The personalized learning recommendations were invaluable in transitioning to product management.",
      name: "Michael Chen",
      role: "Product Manager",
      company: "Innovate Inc",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "As someone who was unsure about which direction to take after graduation, PathFinder's assessment gave me clarity and confidence in my career choices. The industry insights feature keeps me informed.",
      name: "Priya Patel",
      role: "Marketing Specialist",
      company: "CreativeHub",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories from Our Community</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how PathFinder has helped professionals across industries find their ideal career paths.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-blue-800 font-medium">
            Join thousands of professionals who have transformed their careers with PathFinder
          </p>
        </div>
      </div>
    </section>
  );
}
