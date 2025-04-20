
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

export function AIAssessment() {
  return (
    <section id="ai-assessment" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-800 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              AI-Powered Assessment
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Discover Your Perfect Career Fit with Advanced AI Assessment
            </h2>
            
            <p className="text-gray-600 mb-8">
              Our AI assessment goes beyond standard career tests. By analyzing your skills, preferences, interests, and personality traits, we provide highly accurate career recommendations tailored specifically to you.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Comprehensive analysis of 100+ career paths",
                "Personalized skill gap identification",
                "Matches your personality with suitable work environments",
                "Updates recommendations as you gain new skills"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-800 mr-3 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg" className="bg-blue-800 hover:bg-blue-700">
              Take the Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 -left-4 -top-4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
            <div className="absolute -z-10 -right-4 -bottom-4 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
            
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Career Assessment Questionnaire</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="font-medium text-gray-900 mb-3">1. What aspects of your work do you find most energizing?</p>
                    <div className="space-y-2">
                      {[
                        "Solving complex problems independently",
                        "Collaborating with others in a team setting",
                        "Creating innovative solutions or designs",
                        "Analyzing data and finding patterns",
                        "Helping and supporting other people"
                      ].map((option, index) => (
                        <div key={index} className="flex items-center">
                          <div className="h-5 w-5 border border-gray-300 rounded-full mr-3"></div>
                          <span className="text-gray-700">{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900 mb-3">2. Which skills are you most confident applying?</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Technical",
                        "Creative",
                        "Analytical",
                        "Leadership",
                        "Communication",
                        "Organization"
                      ].map((skill, index) => (
                        <div key={index} className="flex items-center">
                          <div className="h-5 w-5 border border-gray-300 rounded-md mr-3"></div>
                          <span className="text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="text-sm">
                      <div className="text-gray-900 font-medium">Question 2 of 15</div>
                      <div className="text-gray-500">About 10 minutes left</div>
                    </div>
                  </div>
                  <Button className="bg-blue-800 hover:bg-blue-700">
                    Continue
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-gray-50 h-2.5 w-full">
                <div className="bg-blue-800 h-2.5 rounded-r-full" style={{ width: "15%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
