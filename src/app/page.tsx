// No longer need dynamic here, it's moved to the wrapper
import { HeroSection } from "@/components/HeroSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { DynamicSectionsWrapper } from "@/components/DynamicSectionsWrapper"; // Import the new wrapper

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <HeroSection />
      <ServicesGrid />
      <DynamicSectionsWrapper /> {/* Render all dynamic sections via the client component wrapper */}
    </main>
  );
}
