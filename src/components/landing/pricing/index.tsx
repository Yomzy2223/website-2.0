"use client";

import React from "react";
import { steps } from "./constants";
import { Separator } from "../../ui/separator";
import PricingTop from "./pricingTop";
import PricingMiddle from "./pricingMiddle";
import PricingBottom from "./pricingBottom";
import PricingFeatures from "./pricingFeatures";

const PricingSection = () => {
  return (
    <div className="space-y-20 px-14 pb-8 mt-28">
      <div className="flex flex-col items-center gap-4 max-w-[min(700px,80%)] m-auto">
        <h2 className="text-center text-4xl text-gray3 font-bold ">
          Register your business faster
        </h2>
        <p className="text-center text-gray4">
          Launch is faster and cheaper than alternatives, helping you save up to
          25% in fees and 40% in go-to-market time.
        </p>
      </div>

      <div className="flex gap-10 ">
        <ul className="flex flex-col gap-6 relative h-max">
          <Separator
            orientation="vertical"
            className="absolute left-2.5 top-4 bg-gray6 z-0 h-[88%]"
          />
          {steps.map((el, i) => (
            <li key={i} className="flex gap-3 py-3 items-center z-10 ">
              <el.icon />
              <span className="text-sm">{el.text}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-10 flex-1 border-8 border-border rounded-lg bg-background px-6 pt-8 pb-6">
          <PricingTop />
          <PricingMiddle />
          <PricingBottom />
          <PricingFeatures />
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
