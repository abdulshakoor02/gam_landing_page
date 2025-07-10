import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Carousel } from "@/components/carousel";
import { ContainerScroll } from "@/components/scroller";
import { ContactForm } from "@/components/contact-form";
import { ThreeDCardDemo } from "@/components/3d-card";
import Features from "@/components/feature";
import CallToAction from "@/components/callToAction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Carousel Section */}
      <BackgroundGradientAnimation>
        <Carousel slides={[
          { title: "Canada 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", src: "/carousel/canada1.jpg" },
          { title: "Canada 2", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", src: "/carousel/canada2.jpg" },
          { title: "Canada 3", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", src: "/carousel/canada3.jpg" },
          { title: "Australia ", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", src: "/carousel/autralia1.jpg" }
        ]} />
      </BackgroundGradientAnimation>

      {/* Scroller Section */}
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Migration From UAE Through<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Go Abroad Migration
              </span>
            </h1>
          </>
        }
      >
        <img
          src="/scroller/australia.jpg"
          alt="Australia"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>

      {/* 3D Cards Section */}
      <section className="flex flex-col items-center justify-center py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Services Offered by Us</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <ThreeDCardDemo title="Canada PR" description="Description for service 1" description2="More text for service 1" imageSrc="/3dcard/canada.jpg" />
          <ThreeDCardDemo title="Australia PR" description="Description for service 2" description2="More text for service 2" imageSrc="/3dcard/australia.jpg" />
          <ThreeDCardDemo title="Visit Visa" description="Description for service 3" description2="More text for service 3" imageSrc="/3dcard/france.jpg" />
          <ThreeDCardDemo title="Dependent Visa" description="Description for service 4" description2="More text for service 4" imageSrc="/3dcard/usa.jpg" />
          <ThreeDCardDemo title="Student Visa" description="Description for service 4" description2="More text for service 4" imageSrc="/3dcard/student.jpg" />
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Features Section */}
      <Features />
      {/* Call to Action Section */}
      <CallToAction />
    </main>
  );
}
