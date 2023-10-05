"use client";

import ContactSection from "@/components/contactSection";
import HomeHeaderComponent from "@/components/landing/Hero";
import PricingSection from "@/components/landing/pricing";
import TestimonialSection from "@/components/landing/testimonial";
import Footer from "@/components/footerSection";
import Navbar from "@/components/landing/Navbar";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animations in milliseconds
      easing: "ease-in-out", // Easing for animations
      once: true, // Whether animations should only happen once
    });
  }, []);

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
