
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2, Mail, User } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

export function SignupForm() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
        <p className="text-gray-600 mt-1">Start your career growth journey today</p>
      </div>
      
      <div className="space-y-4 mb-6">
        <Button variant="outline" className="w-full flex items-center justify-center gap-2 h-11">
          <FaGoogle className="h-4 w-4" />
          <span>Sign up with Google</span>
        </Button>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or sign up with email</span>
          </div>
        </div>
      </div>
      
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                id="firstName"
                placeholder="First name"
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last name
            </label>
            <Input
              id="lastName"
              placeholder="Last name"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="pl-10"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Create a strong password"
          />
          <div className="mt-2 space-y-1">
            <div className="flex items-center text-xs text-gray-500">
              <CheckCircle2 className="h-3 w-3 mr-1 text-green-500" />
              <span>At least 8 characters</span>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <CheckCircle2 className="h-3 w-3 mr-1 text-green-500" />
              <span>Contains letters and numbers</span>
            </div>
          </div>
        </div>
        
        <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-700">
          Create account
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
      
      <p className="text-center text-gray-600 text-sm mt-6">
        Already have an account?{" "}
        <a href="/login" className="text-blue-800 hover:underline font-medium">
          Log in
        </a>
      </p>
      
      <p className="text-center text-xs text-gray-500 mt-6">
        By creating an account, you agree to our{" "}
        <a href="#" className="text-blue-800 hover:underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-800 hover:underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
}
