
import {
  ArrowUpRight,
  BookOpen,
  Calendar,
  LayoutDashboard,
  LineChart,
  MessageSquare,
  Sparkles,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome back, Sarah</h2>
            <p className="text-gray-600">Here's an overview of your career journey</p>
          </div>
          <div className="flex items-center gap-2">
            <Button className="bg-blue-800 hover:bg-blue-700">
              <Sparkles className="h-4 w-4 mr-2" />
              Continue Assessment
            </Button>
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Book Career Advisor
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-blue-800">Career Match</h3>
              <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                85% Match
              </div>
            </div>
            <p className="text-2xl font-bold mt-2 mb-1">UX Designer</p>
            <p className="text-sm text-gray-600">Based on your skills and interests</p>
            <div className="mt-4 flex justify-between items-center">
              <Button variant="ghost" size="sm" className="text-blue-800 p-0 hover:bg-transparent hover:text-blue-700">
                Explore career path
                <ArrowUpRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </div>
          
          <div className="bg-teal-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-teal-800">Skill Progress</h3>
              <div className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-1 rounded-full">
                3 In Progress
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium">UI Design</span>
                  <span>68%</span>
                </div>
                <div className="w-full bg-teal-200 rounded-full h-2">
                  <div className="bg-teal-600 h-2 rounded-full" style={{ width: "68%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium">User Research</span>
                  <span>42%</span>
                </div>
                <div className="w-full bg-teal-200 rounded-full h-2">
                  <div className="bg-teal-600 h-2 rounded-full" style={{ width: "42%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium">Prototyping</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-teal-200 rounded-full h-2">
                  <div className="bg-teal-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-orange-800">Next Steps</h3>
              <div className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-1 rounded-full">
                Priority
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border border-orange-200 flex-shrink-0 mt-0.5"></div>
                <div>
                  <p className="font-medium text-sm">Complete UI Design course</p>
                  <p className="text-xs text-gray-600">Due in 7 days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border border-orange-200 flex-shrink-0 mt-0.5"></div>
                <div>
                  <p className="font-medium text-sm">Build portfolio project</p>
                  <p className="text-xs text-gray-600">Due in 14 days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border border-orange-200 flex-shrink-0 mt-0.5"></div>
                <div>
                  <p className="font-medium text-sm">Schedule mock interview</p>
                  <p className="text-xs text-gray-600">Due in 21 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-900">Career Path Progress</h3>
            <Button variant="outline" size="sm">View Details</Button>
          </div>
          
          <div className="relative mb-8">
            <div className="absolute top-3 left-0 right-0 h-1 bg-gray-200 z-0">
              <div className="bg-blue-800 h-1 rounded-r-full" style={{ width: "35%" }}></div>
            </div>
            
            <div className="relative z-10 flex justify-between">
              <div className="text-center">
                <div className="bg-blue-800 h-6 w-6 rounded-full mx-auto"></div>
                <p className="text-xs mt-2 text-gray-700">Assessment</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-800 h-6 w-6 rounded-full mx-auto"></div>
                <p className="text-xs mt-2 text-gray-700">Skill Building</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-300 h-6 w-6 rounded-full mx-auto"></div>
                <p className="text-xs mt-2 text-gray-700">Portfolio</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-300 h-6 w-6 rounded-full mx-auto"></div>
                <p className="text-xs mt-2 text-gray-700">Job Prep</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-300 h-6 w-6 rounded-full mx-auto"></div>
                <p className="text-xs mt-2 text-gray-700">Career Launch</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-sm">Recommended Resources</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <div className="bg-blue-100 p-2 rounded-md mr-3">
                  <BookOpen className="h-5 w-5 text-blue-800" />
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-1">UX Design Fundamentals</h5>
                  <p className="text-xs text-gray-600 mb-2">Learn the core principles of user experience design</p>
                  <div className="flex items-center text-xs text-blue-800">
                    <span>Start Course</span>
                    <ArrowUpRight className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-start border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <div className="bg-teal-100 p-2 rounded-md mr-3">
                  <LineChart className="h-5 w-5 text-teal-800" />
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-1">Industry Trends Report</h5>
                  <p className="text-xs text-gray-600 mb-2">UX Design market insights and salary data</p>
                  <div className="flex items-center text-xs text-teal-800">
                    <span>View Report</span>
                    <ArrowUpRight className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-900">AI Career Advisor</h3>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
              <Sparkles className="h-3 w-3 mr-1" />
              AI Powered
            </span>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-blue-100 p-1.5 rounded-full">
                <MessageSquare className="h-4 w-4 text-blue-800" />
              </div>
              <div className="text-sm">
                <p className="mb-1">Based on your progress, consider focusing on user research skills next. This will complement your UI design abilities.</p>
                <p className="text-xs text-gray-600">Today, 10:30 AM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-1.5 rounded-full">
                <MessageSquare className="h-4 w-4 text-blue-800" />
              </div>
              <div className="text-sm">
                <p className="mb-1">I found a UX Design webinar happening next week that might interest you. Would you like me to send details?</p>
                <p className="text-xs text-gray-600">Today, 10:32 AM</p>
              </div>
            </div>
          </div>
          
          <div className="flex">
            <input
              type="text"
              placeholder="Ask your career advisor..."
              className="flex-1 rounded-l-lg border border-gray-300 py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-800 focus:border-blue-800"
            />
            <Button className="rounded-l-none bg-blue-800 hover:bg-blue-700">
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="font-semibold text-xl mb-2">Ready to take your career to the next level?</h3>
            <p className="text-blue-100">Upgrade to Pro for unlimited assessments and personalized coaching.</p>
          </div>
          <Button className="bg-white text-blue-800 hover:bg-blue-50 whitespace-nowrap">
            Upgrade to Pro
          </Button>
        </div>
      </div>
    </div>
  );
}
