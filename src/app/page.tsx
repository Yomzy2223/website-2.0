import ContactSection from "@/components/contactSection";
import HomeHeaderComponent from "@/components/landing/Hero";
import PricingSection from "@/components/landing/pricing";
import TestimonialSection from "@/components/landing/testimonial";
import Footer from "@/components/footerSection";
import React from "react";

const HomePage = () => {
  return (
    <div className="px-14">
      <div>
        <HomeHeaderComponent />
        <PricingSection />
        <TestimonialSection />;
        <ContactSection />
      </div>
      <div>
        <Footer />
      </div>
      */
    </div>
  );
};

export default HomePage;
