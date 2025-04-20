
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { AIAssessment } from "@/components/home/AIAssessment";
import { CareerPath } from "@/components/home/CareerPath";
import { Testimonials } from "@/components/home/Testimonials";
import { Pricing } from "@/components/home/Pricing";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <AIAssessment />
        <CareerPath />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
