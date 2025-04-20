
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MessageSquare, Star, User } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

// Mock data for the mentor profile
const MENTOR = {
  id: "1",
  name: "Dr. Sarah Johnson",
  title: "Computer Science Professor",
  domain: "Computer Science",
  experience: "15 years",
  rating: 4.9,
  reviewCount: 128,
  bio: "I'm a Computer Science professor specializing in AI and machine learning with over 15 years of experience. I've worked on cutting-edge research projects at top universities and tech companies. My passion is helping students navigate the complex and rapidly evolving tech landscape. I provide guidance on curriculum choices, research opportunities, and industry preparation.",
  expertise: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Computer Vision",
    "Software Engineering"
  ],
  education: [
    {
      degree: "Ph.D. in Computer Science",
      institution: "Stanford University",
      year: "2008"
    },
    {
      degree: "M.S. in Computer Science",
      institution: "Massachusetts Institute of Technology",
      year: "2003"
    },
    {
      degree: "B.S. in Computer Engineering",
      institution: "University of California, Berkeley",
      year: "2001"
    }
  ],
  workExperience: [
    {
      role: "Professor of Computer Science",
      organization: "University of Washington",
      period: "2015 - Present"
    },
    {
      role: "Research Scientist",
      organization: "Google AI",
      period: "2010 - 2015"
    },
    {
      role: "Assistant Professor",
      organization: "Carnegie Mellon University",
      period: "2008 - 2010"
    }
  ],
  reviews: [
    {
      id: "1",
      name: "James Wilson",
      rating: 5,
      date: "2 months ago",
      comment: "Dr. Johnson helped me map out my computer science degree and provided invaluable advice on which specializations would align with my career goals. Her guidance was instrumental in my job search."
    },
    {
      id: "2",
      name: "Priya Patel",
      rating: 5,
      date: "3 months ago",
      comment: "Excellent mentor! Dr. Johnson's knowledge of the industry and academic requirements is extensive. She helped me prepare for graduate school applications and interviews."
    },
    {
      id: "3",
      name: "Miguel Rodriguez",
      rating: 4,
      date: "5 months ago",
      comment: "Very helpful in providing resources and guidance for my AI project. Dr. Johnson is responsive and provides detailed feedback."
    }
  ],
  availability: [
    { day: "Monday", slots: ["10:00 AM - 11:00 AM", "2:00 PM - 3:00 PM"] },
    { day: "Wednesday", slots: ["1:00 PM - 2:00 PM", "4:00 PM - 5:00 PM"] },
    { day: "Friday", slots: ["11:00 AM - 12:00 PM"] }
  ],
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
};

const MentorProfile = () => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  const handleSchedule = () => {
    if (selectedSlot) {
      toast({
        title: "Meeting scheduled!",
        description: `Your meeting with ${MENTOR.name} has been scheduled for ${selectedSlot}`,
      });
      // In a real application, this would create a meeting in the database
    }
  };
  
  const handleMessage = () => {
    navigate("/messages"); // This would navigate to the messaging page in a real app
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6">
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="h-24 w-24 rounded-full bg-white overflow-hidden flex-shrink-0">
                  <img 
                    src={MENTOR.image} 
                    alt={MENTOR.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h1 className="text-2xl font-bold">{MENTOR.name}</h1>
                  <p className="text-blue-100">{MENTOR.title}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-blue-100 bg-opacity-20 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {MENTOR.domain}
                    </span>
                    <span className="bg-blue-100 bg-opacity-20 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {MENTOR.experience} experience
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{MENTOR.rating}</span>
                    <span className="text-blue-100 text-sm ml-1">({MENTOR.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button className="bg-blue-800 hover:bg-blue-700 flex-1" onClick={handleSchedule} disabled={!selectedSlot}>
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </Button>
                <Button variant="outline" className="flex-1" onClick={handleMessage}>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
              
              <Tabs defaultValue="about">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="availability">Availability</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Bio</h3>
                    <p className="text-gray-700">{MENTOR.bio}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Areas of Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {MENTOR.expertise.map((skill, index) => (
                        <span 
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Education</h3>
                    <div className="space-y-3">
                      {MENTOR.education.map((edu, index) => (
                        <div key={index} className="flex flex-col">
                          <span className="font-medium text-gray-900">{edu.degree}</span>
                          <span className="text-gray-600">{edu.institution}, {edu.year}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Experience</h3>
                    <div className="space-y-3">
                      {MENTOR.workExperience.map((exp, index) => (
                        <div key={index} className="flex flex-col">
                          <span className="font-medium text-gray-900">{exp.role}</span>
                          <span className="text-gray-600">{exp.organization}, {exp.period}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <div className="space-y-6">
                    {MENTOR.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <User className="h-5 w-5 text-gray-400 mr-2" />
                            <span className="font-medium">{review.name}</span>
                          </div>
                          <span className="text-gray-500 text-sm">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? "text-yellow-500 fill-current" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="availability">
                  <div className="space-y-4">
                    {MENTOR.availability.map((avail, dayIndex) => (
                      <div key={dayIndex} className="border-b border-gray-200 pb-4 last:border-0">
                        <h3 className="font-medium text-gray-900 mb-2">{avail.day}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {avail.slots.map((slot, slotIndex) => (
                            <div 
                              key={slotIndex}
                              className={`border rounded-md p-3 flex items-center cursor-pointer transition-colors ${
                                selectedSlot === `${avail.day} - ${slot}` 
                                  ? "border-blue-800 bg-blue-50" 
                                  : "border-gray-200 hover:bg-gray-50"
                              }`}
                              onClick={() => setSelectedSlot(`${avail.day} - ${slot}`)}
                            >
                              <Clock className="h-4 w-4 text-gray-500 mr-2" />
                              <span>{slot}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="schedule">
                  <div className="text-center py-8">
                    <Calendar className="h-16 w-16 text-blue-800 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule a Meeting</h3>
                    <p className="text-gray-600 mb-4">
                      {selectedSlot ? (
                        <>You selected: <span className="font-medium text-blue-800">{selectedSlot}</span></>
                      ) : (
                        "Select an available time slot from the Availability tab"
                      )}
                    </p>
                    <Button 
                      className="bg-blue-800 hover:bg-blue-700" 
                      disabled={!selectedSlot}
                      onClick={handleSchedule}
                    >
                      Confirm Meeting
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MentorProfile;
