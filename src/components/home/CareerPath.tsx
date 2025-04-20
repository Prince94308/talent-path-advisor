
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Briefcase, Clock, LineChart, User } from "lucide-react";

export function CareerPath() {
  return (
    <section id="career-path" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-50 text-teal-700 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-teal-600 mr-2"></span>
            Career Path Planning
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Map Your Professional Journey with AI Precision
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualize multiple career paths and make informed decisions about your professional future.
          </p>
        </div>
        
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Timeline dots */}
          <div className="absolute top-24 left-0 right-0 flex justify-between items-center px-8">
            <div className="h-3 w-3 rounded-full bg-blue-800 z-10"></div>
            <div className="h-2 w-2 rounded-full bg-blue-600 z-10"></div>
            <div className="h-2 w-2 rounded-full bg-blue-600 z-10"></div>
            <div className="h-2 w-2 rounded-full bg-blue-600 z-10"></div>
            <div className="h-3 w-3 rounded-full bg-blue-800 z-10"></div>
          </div>
          
          {/* Timeline line */}
          <div className="absolute top-24 left-4 right-4 h-0.5 bg-blue-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-full">
                <div className="p-6">
                  <div className="mb-6 flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <User className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Current Position</h3>
                      <p className="text-gray-600 text-sm">Marketing Assistant</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Strengths</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                          Content Creation
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                          Social Media
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                          Copywriting
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Development Areas</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-orange-50 text-orange-800 px-2 py-1 rounded-full">
                          Data Analysis
                        </span>
                        <span className="text-xs bg-orange-50 text-orange-800 px-2 py-1 rounded-full">
                          Team Leadership
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl border border-blue-200 border-dashed shadow-sm overflow-hidden h-full">
                <div className="p-6">
                  <div className="mb-6 flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Briefcase className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Intermediate Goal</h3>
                      <p className="text-gray-600 text-sm">Marketing Specialist</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Required Skills</div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                          </div>
                          <span className="ml-2 text-xs text-gray-500 min-w-[45px]">Content</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                          </div>
                          <span className="ml-2 text-xs text-gray-500 min-w-[45px]">Analytics</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                          </div>
                          <span className="ml-2 text-xs text-gray-500 min-w-[45px]">Strategy</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Estimated Timeline</div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-900">1-2 years</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-50 p-2 rounded-md">
                      <BookOpen className="h-4 w-4 text-blue-800" />
                    </div>
                    <span className="text-sm text-blue-800">3 recommended courses</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200 shadow-sm overflow-hidden h-full">
                <div className="p-6">
                  <div className="mb-6 flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <LineChart className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Target Role</h3>
                      <p className="text-gray-600 text-sm">Marketing Manager</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Average Salary</div>
                      <p className="text-lg font-semibold text-gray-900">$85,000 - $110,000</p>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Market Demand</div>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                        <span className="ml-2 text-xs text-gray-500">High</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Growth Potential</div>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <span className="ml-2 text-xs text-gray-500">Very High</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Create Your Career Path 
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
