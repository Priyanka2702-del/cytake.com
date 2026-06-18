import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import SolutionsSection from "@/components/SolutionsSection";
import WhyCytakeSection from "@/components/WhyCytakeSection";
import StatsSection from "@/components/StatsSection";
import IndustriesSection from "@/components/IndustriesSection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCompanies />
        
        <SolutionsSection />
        <WhyCytakeSection />
        <StatsSection />
        <IndustriesSection />
        <TechStackSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}