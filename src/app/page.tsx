"use client";

import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Carousel } from "@/components/carousel";
import { ContainerScroll } from "@/components/scroller";
import { ContactForm } from "@/components/contact-form";
import { Modal, ModalTrigger, ModalBody, ModalContent } from "@/components/ui/animated-modal";
import { ThreeDCardDemo } from "@/components/3d-card";
import { AnimatedTestimonials } from "@/components/animated-testimonials";
import { CardWithText } from "@/components/card-with-text";
import { Timeline } from "@/components/timeline";
import { HeaderSection } from "@/components/header-section";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-6 md:p-8 lg:p-12 xl:p-24">
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black dark:text-white">
              Migration From UAE Through<br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[6rem] font-bold mt-1 leading-none">
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
          className="mx-auto rounded-2xl object-cover h-full object-left-top w-full max-w-full"
          draggable={false}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 70vw"
          loading="lazy"
        />
      </ContainerScroll>

      {/* 3D Cards Section */}
      <section className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10">Services Offered by Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          <ThreeDCardDemo title="Canada PR" description="Description for service 1" description2="More text for service 1" imageSrc="/3dcard/canada.jpg" />
          <ThreeDCardDemo title="Australia PR" description="Description for service 2" description2="More text for service 2" imageSrc="/3dcard/australia.jpg" />
          <ThreeDCardDemo title="Visit Visa" description="Description for service 3" description2="More text for service 3" imageSrc="/3dcard/france.jpg" />
          <ThreeDCardDemo title="Dependent Visa" description="Description for service 4" description2="More text for service 4" imageSrc="/3dcard/usa.jpg" />
          <ThreeDCardDemo title="Student Visa" description="Description for service 4" description2="More text for service 4" imageSrc="/3dcard/student.jpg" />
        </div>
      </section>

      {/* Contact Form Modal */}
      <Modal>
        <ModalTrigger>
          <div
            className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 bg-black hover:bg-gray-800 text-white font-bold py-3 px-3 sm:py-4 sm:px-2 rounded-lg sm:rounded-t-lg cursor-pointer transition-colors duration-200"
            style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}
          >
            Contact Us
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <ContactForm />
          </ModalContent>
        </ModalBody>
      </Modal>

      {/* Card with Text Section */}
      <section className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10">Our Vision</h2>
        <CardWithText cardText="Our vision is to be the leading global migration consultancy, empowering individuals and families to achieve their dreams of living and working abroad. We are committed to providing unparalleled guidance, support, and resources, ensuring a seamless and successful migration journey for every client." />
      </section>

      {/* Timeline Section */}
      <Timeline
        data={[
          {
            title: "Phase 1",
            content: (
              <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                Initial research and planning for the project. Gathering requirements and setting up the development environment.
              </p>
            ),
          },
          {
            title: "Phase 2",
            content: (
              <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                Development of core features and components. Implementing the main functionalities of the application.
              </p>
            ),
          },
          {
            title: "Phase 3",
            content: (
              <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                Testing and debugging. Ensuring the application is stable and bug-free. User acceptance testing.
              </p>
            ),
          },
          {
            title: "Phase 4",
            content: (
              <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                Deployment and post-launch support. Monitoring performance and addressing any issues that arise.
              </p>
            ),
          },
        ]}
      />

      {/* Testimonials Section */}
      <section className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10">Testimonials</h2>
        <AnimatedTestimonials
        testimonials={[
          {
            quote: "This is the best service I have ever received! Highly recommended.",
            name: "John Doe",
            designation: "CEO, Example Corp",
            src: "/testimonial/testi1.jpg",
          },
          {
            quote: "Amazing experience, very professional and efficient.",
            name: "Jane Smith",
            designation: "CTO, Another Co",
            src: "/testimonial/test2.jpg",
          },
          {
            quote: "Truly a game-changer for our business. Thank you!",
            name: "Peter Jones",
            designation: "Founder, Startup Inc",
            src: "/testimonial/testi3.jpg",
          },
        ]}
      />
      </section>
    </main>
    </>
  );
}
