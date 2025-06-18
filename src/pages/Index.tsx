import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TargetAudience from "@/components/TargetAudience";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Contacts from "@/components/Contacts";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <TargetAudience />
      <Pricing />
      <FAQ />
      <Blog />
      <Contacts />
      <CTA />
    </div>
  );
};

export default Index;
