
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MessageSquare, Star, User } from "lucide-react";
import { useState } from "react";

// Mock mentor data for demonstration
const MENTORS = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Computer Science Professor",
    domain: "Computer Science",
    experience: "15 years",
    rating: 4.9,
    reviewCount: 128,
    bio: "Computer Science professor specializing in AI and machine learning. I help students navigate the rapidly evolving tech landscape.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Robert Chen",
    title: "Business Consultant",
    domain: "Business Management",
    experience: "12 years",
    rating: 4.7,
    reviewCount: 94,
    bio: "Former Fortune 500 executive helping students understand business strategy and career development in corporate environments.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Dr. Emily Patel",
    title: "Medical Researcher",
    domain: "Medical",
    experience: "10 years",
    rating: 4.8,
    reviewCount: 72,
    bio: "Medical researcher and practitioner. I guide students interested in healthcare careers and medical sciences.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 4,
    name: "Michael Okafor",
    title: "Creative Director",
    domain: "Design & Creative Arts",
    experience: "8 years",
    rating: 4.6,
    reviewCount: 56,
    bio: "Creative director with experience in multiple design disciplines. I help students develop their creative skills and portfolios.",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Mentors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");

  const filteredMentors = MENTORS.filter((mentor) => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          mentor.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = selectedDomain === "" || mentor.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find a Mentor</h1>
          <p className="text-gray-600 mb-8">Connect with experienced professionals to guide your career journey</p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-grow">
              <Input
                placeholder="Search by name or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="w-full md:w-64">
              <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Domains</SelectItem>
                  <SelectItem value="Computer Science">Computer Science</SelectItem>
                  <SelectItem value="Business Management">Business Management</SelectItem>
                  <SelectItem value="Medical">Medical</SelectItem>
                  <SelectItem value="Design & Creative Arts">Design & Creative Arts</SelectItem>
                  <SelectItem value="Engineering">Engineering</SelectItem>
                  <SelectItem value="Science">Science</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-6">
            {filteredMentors.length > 0 ? filteredMentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-full overflow-hidden">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                      <div className="text-gray-600">{mentor.title}</div>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className="ml-1 font-medium">{mentor.rating}</span>
                      <span className="text-gray-500 ml-1">({mentor.reviewCount} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {mentor.domain}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {mentor.experience} experience
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{mentor.bio}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-blue-800 hover:bg-blue-700">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Meeting
                    </Button>
                    <Button variant="outline">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                    <Button variant="ghost">
                      <User className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            )) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-md">
                <div className="text-gray-500 mb-2">No mentors found matching your criteria</div>
                <Button variant="outline" onClick={() => {setSearchTerm(""); setSelectedDomain("")}}>
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mentors;
