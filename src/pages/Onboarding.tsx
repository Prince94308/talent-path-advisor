
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const domains = [
  { value: "science", label: "Science" },
  { value: "commerce", label: "Commerce" },
  { value: "arts", label: "Arts" },
  { value: "engineering", label: "Engineering" },
  { value: "medical", label: "Medical" },
  { value: "computer-science", label: "Computer Science" },
  { value: "business", label: "Business Management" },
  { value: "design", label: "Design & Creative Arts" },
  { value: "law", label: "Law" },
  { value: "hospitality", label: "Hospitality" },
];

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<"student" | "mentor" | null>(null);
  const [domain, setDomain] = useState("");
  const [grade, setGrade] = useState("");
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // In a real implementation with Supabase, you would save this data
      toast({
        title: "Profile created!",
        description: `Your ${role} profile has been created successfully.`,
      });
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Complete your profile</h1>
            <p className="text-gray-600 mt-1">Tell us more about yourself</p>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`flex-1 h-2 ${
                    i <= step ? "bg-blue-800" : "bg-gray-200"
                  } ${i === 1 ? "rounded-l-full" : ""} ${
                    i === 3 ? "rounded-r-full" : ""
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-blue-800 font-medium">Role</span>
              <span className={step >= 2 ? "text-blue-800 font-medium" : "text-gray-500"}>
                Domain & Grade
              </span>
              <span className={step >= 3 ? "text-blue-800 font-medium" : "text-gray-500"}>
                Bio
              </span>
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <p className="text-sm text-gray-600">
                Choose how you want to use PathFinder
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  className={`p-4 border rounded-lg text-center hover:border-blue-800 transition-colors ${
                    role === "student"
                      ? "border-blue-800 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <div className="font-medium mb-1">I'm a Student</div>
                  <p className="text-xs text-gray-500">
                    Get guidance for your career path
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setRole("mentor")}
                  className={`p-4 border rounded-lg text-center hover:border-blue-800 transition-colors ${
                    role === "mentor"
                      ? "border-blue-800 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <div className="font-medium mb-1">I'm a Mentor</div>
                  <p className="text-xs text-gray-500">
                    Guide students on their journey
                  </p>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-1">
                  Your domain of interest
                </label>
                <Select value={domain} onValueChange={setDomain}>
                  <SelectTrigger id="domain">
                    <SelectValue placeholder="Select domain" />
                  </SelectTrigger>
                  <SelectContent>
                    {domains.map((d) => (
                      <SelectItem key={d.value} value={d.value}>
                        {d.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
                  {role === "student" ? "Your current grade/year" : "Years of experience"}
                </label>
                <Input
                  id="grade"
                  placeholder={role === "student" ? "e.g., 12th Grade" : "e.g., 5 years"}
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us about yourself
                </label>
                <textarea
                  id="bio"
                  rows={5}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                  placeholder={
                    role === "student"
                      ? "Share your interests, goals, and what you want to achieve..."
                      : "Share your expertise, experience, and how you can help students..."
                  }
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 ? (
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
            ) : (
              <div></div>
            )}
            <Button
              className="bg-blue-800 hover:bg-blue-700"
              onClick={handleNext}
              disabled={
                (step === 1 && !role) ||
                (step === 2 && (!domain || !grade)) ||
                (step === 3 && !bio)
              }
            >
              {step === 3 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Onboarding;
