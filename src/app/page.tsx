import ContactSection from "@/components/contactSection";
import HomeHeaderComponent from "@/components/landing/Hero";
import PricingSection from "@/components/landing/pricing";
import TestimonialSection from "@/components/landing/testimonial";
import Footer from "@/components/footerSection";
import LogoCloud from "@/components/landing/Logos";
import Navbar from "@/components/landing/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="px-14">
        <HomeHeaderComponent />
        <PricingSection />
      </div>
      <div className="px-14 py-8">
        <ContactSection />
      </div>
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default HomePage;
