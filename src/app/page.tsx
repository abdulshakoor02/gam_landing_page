import dynamic from 'next/dynamic';
import { HeroSection } from "@/components/HeroSection"; // Adjusted path
import { ServicesGrid } from "@/components/ServicesGrid";
// import { TestimonialsCarousel } from "@/components/TestimonialsCarousel"; // Will be dynamic
import { DetailedServicesSection } from "@/components/DetailedServicesSection";
import { RecognitionMarquee } from "@/components/RecognitionMarquee";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { FaqSection } from "@/components/FaqSection";
import { CallToActionSection } from "@/components/CallToActionSection";

const TestimonialsCarousel = dynamic(() => import('@/components/TestimonialsCarousel').then(mod => mod.TestimonialsCarousel), {
  loading: () => <p className="text-center p-10">Loading testimonials...</p>,
  ssr: false // Good for components that are client-side interactive and below the fold
});

// Similarly for other sections if deemed necessary
const DetailedServicesSectionDynamic = dynamic(() => import('@/components/DetailedServicesSection').then(mod => mod.DetailedServicesSection), {
  loading: () => <p className="text-center p-10">Loading details...</p>,
  ssr: false
});

const RecognitionMarqueeDynamic = dynamic(() => import('@/components/RecognitionMarquee').then(mod => mod.RecognitionMarquee), {
  loading: () => <p className="text-center p-10">Loading recognitions...</p>,
  ssr: false
});

const ProcessTimelineDynamic = dynamic(() => import('@/components/ProcessTimeline').then(mod => mod.ProcessTimeline), {
  loading: () => <p className="text-center p-10">Loading process...</p>,
  ssr: false
});

const FaqSectionDynamic = dynamic(() => import('@/components/FaqSection').then(mod => mod.FaqSection), {
  loading: () => <p className="text-center p-10">Loading FAQs...</p>,
  ssr: false
});

const CallToActionSectionDynamic = dynamic(() => import('@/components/CallToActionSection').then(mod => mod.CallToActionSection), {
  loading: () => <p className="text-center p-10">Loading contact options...</p>,
  ssr: false
});


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start"> {/* Changed justify-between to justify-start */}
      <HeroSection />
      <ServicesGrid /> {/* Often near the fold, might not need dynamic import unless very heavy */}
      <TestimonialsCarousel />
      <DetailedServicesSectionDynamic />
      <RecognitionMarqueeDynamic />
      <ProcessTimelineDynamic />
      <FaqSectionDynamic />
      <CallToActionSectionDynamic />
    </main>
  );
}
