"use client"; // This is crucial

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import all sections that had ssr: false
const TestimonialsCarousel = dynamic(() => import('@/components/TestimonialsCarousel').then(mod => mod.TestimonialsCarousel), {
  loading: () => <p className="text-center p-10">Loading testimonials...</p>,
  ssr: false
});

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

export function DynamicSectionsWrapper() {
  return (
    <>
      <TestimonialsCarousel />
      <DetailedServicesSectionDynamic />
      <RecognitionMarqueeDynamic />
      <ProcessTimelineDynamic />
      <FaqSectionDynamic />
      <CallToActionSectionDynamic />
    </>
  );
}
