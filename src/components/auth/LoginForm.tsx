
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      // In a real implementation with Supabase, you would use:
      // await supabase.auth.signInWithOAuth({ provider: 'google' })
      toast({
        title: "Authentication required",
        description: "Please connect this project to Supabase to enable Google authentication.",
      });
      
      // Mock successful login for demonstration purposes
      setTimeout(() => {
        navigate("/dashboard");
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "There was an error logging in with Google.",
      });
      setIsLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // In a real implementation with Supabase, you would use:
      // await supabase.auth.signInWithPassword({ email, password })
      toast({
        title: "Authentication required",
        description: "Please connect this project to Supabase to enable email authentication.",
      });
      
      // Mock successful login for demonstration purposes
      setTimeout(() => {
        navigate("/dashboard");
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Invalid email or password.",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
        <p className="text-gray-600 mt-1">Log in to continue your career journey</p>
      </div>
      
      <div className="space-y-4 mb-6">
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2 h-11"
          onClick={handleGoogleLogin}
          disabled={isLoading}
        >
          <FaGoogle className="h-4 w-4" />
          <span>Continue with Google</span>
        </Button>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or continue with email</span>
          </div>
        </div>
      </div>
      
      <form className="space-y-4" onSubmit={handleEmailLogin}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <a href="#" className="text-sm text-blue-800 hover:underline">
              Forgot password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-blue-800 hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Log in"}
          {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </form>
      
      <p className="text-center text-gray-600 text-sm mt-6">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-800 hover:underline font-medium">
          Sign up
        </a>
      </p>
    </div>
  );
}
