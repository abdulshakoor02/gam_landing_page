import Header from "@/components/header";
import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";
import FeaturesSection from "@/components/features";
// import PortfolioSection from "@/components/portfolio"; // Placeholder for future
// import AboutSection from "@/components/about";         // Placeholder for future
// import ContactSection from "@/components/contact";     // Placeholder for future
// import Footer from "@/components/footer";             // Placeholder for future

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        {/* Hero Section is already full screen, other sections will follow */}
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        {/*
          Placeholder for other sections from design:
          - Portfolio
          - About
          - Contact
        */}
        {/* <PortfolioSection /> */}
        {/* <AboutSection /> */}
        {/* <ContactSection /> */}
      </main>
      {/* <Footer /> */}
      {/* A simple footer example or implement a full one based on design if available */}
      <footer className="py-lg bg-neutral-gray800 text-neutral-gray300 text-center">
        <p>&copy; {new Date().getFullYear()} Baosh Creative Agency. All rights reserved.</p>
        {/* Add social links or other footer content here if specified in design */}
      </footer>
    </>
  );
}
