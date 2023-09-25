import BusinessPlanIcon from "@/assets/icons/businessPlan";
import CountryIcon from "@/assets/icons/country";
import PayIcon from "@/assets/icons/pay";
import CheckIcon from "@/assets/icons/check";
import nigeriaFlag from "@/assets/icons/nigeria-flag.svg";
import RocketIcon from "@/assets/icons/rocket";

export const steps = [
  {
    text: "Create account",
    icon: RocketIcon,
    aos: "fade-up",
    delay: "0",
  },
  {
    text: "Select country",
    icon: CountryIcon,
    aos: "fade-up",
    delay: "500",
  },
  {
    text: "Select business plan",
    icon: BusinessPlanIcon,
    aos: "fade-up",
    delay: "1000",
  },
  {
    text: "Pay and fill your form",
    icon: PayIcon,
    aos: "fade-up",
    delay: "1500",
  },
  {
    text: "Get your documents",
    icon: CheckIcon,
    aos: "fade-up",
    delay: "2000",
  },
];

export const features = [
  "Company registration",
  "Company bank account",
  "Company tax ID",
  "Company tax filing",
  "Company tax clearance",
];

export interface handlePricingType {
  selectedPackage?: string;
  selectedCountry?: string;
}
export interface pricingStateType {
  pricingState: {
    country: string;
    package: string;
  };
}
export interface middlePropType extends pricingStateType {
  handlePricing: ({
    selectedPackage,
    selectedCountry,
  }: handlePricingType) => void;
}
