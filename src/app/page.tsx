import HomeHeaderComponent from "@/components/landing/Hero";
import PricingSection from "@/components/landing/pricing";
import TestimonialSection from "@/components/landing/testimonial";
import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <HomeHeaderComponent />
      <PricingSection />
      <TestimonialSection />;
    </div>
  );
};

export default HomePage;
