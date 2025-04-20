
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SignupForm } from "@/components/auth/SignupForm";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center py-12">
        <SignupForm />
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
