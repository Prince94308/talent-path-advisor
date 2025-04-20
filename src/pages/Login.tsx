
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LoginForm } from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center py-12">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
