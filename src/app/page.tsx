import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import TestimonialsSection from "@/components/testimonials-section";
import FAQSection from "@/components/faq-section";
import FloatingForm from "@/components/floating-form";
import TechSpecs from "@/components/tech-specs";
import ResponsiveBreakpoints from "@/components/responsive-breakpoints";
import MobileNote from "@/components/mobile-note";


export default function Home() {
  return (
    <main className="flex flex-col items-stretch min-h-screen bg-slate-900">
      {/* Fixed informational elements from the wireframe */}
      <TechSpecs />
      <ResponsiveBreakpoints />
      <MobileNote />

      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />

      <FloatingForm />


      {/* Optional: A simple placeholder to show where other content would go */}
      <div className="py-12 text-center">
        <p className="text-slate-400">More sections to come...</p>
      </div>

    </main>
  );
}
