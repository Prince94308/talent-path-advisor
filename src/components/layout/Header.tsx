
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  BriefcaseBusiness, 
  ChevronDown, 
  GraduationCap, 
  LineChart, 
  Menu, 
  X 
} from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="bg-blue-800 text-white p-1.5 rounded-lg mr-2">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-blue-800">PathFinder</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-blue-700 transition">
                <span className="font-medium">Features</span>
                <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 ease-in-out bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-2">
                  <a href="#ai-assessment" className="flex items-center p-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                    <LineChart className="mr-2 h-4 w-4 text-blue-600" />
                    <span>AI Career Assessment</span>
                  </a>
                  <a href="#career-path" className="flex items-center p-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                    <BriefcaseBusiness className="mr-2 h-4 w-4 text-teal-600" />
                    <span>Career Path Planning</span>
                  </a>
                </div>
              </div>
            </div>
            <a href="#pricing" className="font-medium text-gray-600 hover:text-blue-700 transition">Pricing</a>
            <a href="#resources" className="font-medium text-gray-600 hover:text-blue-700 transition">Resources</a>
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" className="text-gray-700 hover:text-blue-700">Login</Button>
            <Button className="bg-blue-800 hover:bg-blue-700">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-2">
          <div className="container mx-auto px-4 space-y-1">
            <a href="#ai-assessment" className="block p-3 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-md">AI Career Assessment</a>
            <a href="#career-path" className="block p-3 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-md">Career Path Planning</a>
            <a href="#pricing" className="block p-3 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-md">Pricing</a>
            <a href="#resources" className="block p-3 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-md">Resources</a>
            <div className="pt-2 pb-3 border-t border-gray-100">
              <Button variant="ghost" className="w-full justify-center mb-2 text-gray-700">Login</Button>
              <Button className="w-full justify-center bg-blue-800 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
