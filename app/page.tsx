import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import FocusSection from "@/components/FocusSection";
import AuthorsSection from "@/components/AuthorsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#f5f4ef] text-[#111b14] overflow-x-hidden selection:bg-zinc-300 selection:text-[#111b14]">
      {/* 1. Nav */}
      <Header />

      {/* 2. Hero */}
      <Hero />

      {/* 3. How it works */}
      <FeaturesSection />

      {/* 4. Focus Lock */}
      <FocusSection />

      {/* 5. The personal shelf */}
      <AuthorsSection />

      {/* 6. FAQ */}
      <FaqSection />

      {/* 8. Final CTA */}
      <CtaSection />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
