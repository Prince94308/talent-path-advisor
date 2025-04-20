
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Navigate Your Career Journey with <span className="text-blue-800">AI Precision</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover your ideal career path with personalized guidance powered by advanced AI. Unlock your potential and make informed decisions about your professional future.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button size="lg" className="bg-blue-800 hover:bg-blue-700">
                  Start Free Assessment 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn How It Works
                </Button>
              </div>
              
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <span className="text-sm text-gray-600">
                  Joined by 10,000+ professionals already
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -right-28 -top-28 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
              <div className="absolute -left-28 -bottom-28 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
              <div className="absolute right-20 bottom-20 w-36 h-36 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
              
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                  <Sparkles className="h-3 w-3 mr-1" />
                  AI-Powered
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-lg">Career Assessment</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">In Progress</span>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-600 font-medium text-sm mb-1">Suggested Career Paths</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white border border-gray-200 p-2 rounded-md text-sm">Data Scientist</div>
                        <div className="bg-white border border-gray-200 p-2 rounded-md text-sm">UX Designer</div>
                        <div className="bg-white border border-gray-200 p-2 rounded-md text-sm">Product Manager</div>
                        <div className="bg-white border border-gray-200 p-2 rounded-md text-sm">ML Engineer</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-600 font-medium text-sm mb-1">Skill Match Analysis</p>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-800 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                          <span className="ml-2 text-xs text-gray-600">85%</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "72%" }}></div>
                          </div>
                          <span className="ml-2 text-xs text-gray-600">72%</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: "68%" }}></div>
                          </div>
                          <span className="ml-2 text-xs text-gray-600">68%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-blue-800 hover:bg-blue-700">Continue Assessment</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
