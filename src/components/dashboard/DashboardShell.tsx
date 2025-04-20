
import { useState } from "react";
import { 
  Bell, 
  BookOpen, 
  GraduationCap, 
  LayoutDashboard, 
  LogOut, 
  Menu, 
  MessageSquare, 
  PieChart, 
  Settings, 
  User, 
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
        <div className="flex items-center">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-600 hover:text-blue-800"
          >
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <div className="ml-4 flex items-center">
            <div className="bg-blue-800 text-white p-1 rounded-md mr-2">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-semibold text-gray-900">PathFinder</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-gray-600 hover:text-blue-800"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
          </Button>
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User avatar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-20 transform transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:inset-auto`}
      >
        <div className="bg-white h-full w-64 shadow-lg flex flex-col">
          <div className="p-4 border-b border-gray-200 flex items-center">
            <div className="bg-blue-800 text-white p-1 rounded-md mr-2">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-semibold text-gray-900">PathFinder</span>
          </div>

          <div className="flex-grow overflow-y-auto p-4">
            <nav className="space-y-1">
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-blue-50 text-blue-800"
              >
                <LayoutDashboard className="h-5 w-5 mr-3" />
                Dashboard
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
              >
                <User className="h-5 w-5 mr-3 text-gray-500" />
                My Profile
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
              >
                <PieChart className="h-5 w-5 mr-3 text-gray-500" />
                Assessments
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 group"
              >
                <BookOpen className="h-5 w-5 mr-3 text-gray-500" />
                Learning Path
                <span className="ml-auto bg-blue-100 text-blue-800 py-0.5 px-2 rounded-full text-xs">
                  New
                </span>
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
              >
                <MessageSquare className="h-5 w-5 mr-3 text-gray-500" />
                Career Advisor
              </a>
            </nav>

            <div className="mt-8">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Settings
              </h3>
              <div className="mt-1 space-y-1">
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
                >
                  <Settings className="h-5 w-5 mr-3 text-gray-500" />
                  Account Settings
                </a>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
                >
                  <LogOut className="h-5 w-5 mr-3 text-gray-500" />
                  Log out
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                <p className="text-xs text-gray-500">Pro Plan</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 bg-gray-800 bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="hidden lg:flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-gray-600 hover:text-blue-800"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
