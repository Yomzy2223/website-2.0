import { CheckCheck, CheckCheckIcon, LucideCheckCheck } from "lucide-react";
import React from "react";
import { features } from "./constants";

const PricingFeatures = () => {
  return (
    <div>
      <p className="text-primary mb-8">What you’ll get includes:</p>
      <ul className="grid grid-rows-3 grid-cols-2 gap-6 gapx max-w-[600px]">
        {features.map((el, i) => (
          <li key={i} className="flex items-center gap-2 w-max">
            <CheckCheck size={16} className="text-primary" />
            <span className="text-gray3 text-sm">{el}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingFeatures;
