import Image from "next/image";
import React, { useContext } from "react";
import illustration from "@/assets/images/illustration.png";
import ellipse1 from "@/assets/images/ellipse1.png";
import ellipse2 from "@/assets/images/ellipse2.png";
import RocketIcon from "@/assets/icons/rocket";
import { useSearchParams } from "next/navigation";
import { normalize } from "@/lib/globalFunctions";
import { supportedCountries } from "@/lib/supportedCountries";
import { pricingStateType } from "./constants";

const PricingBottom = ({ pricingState }: pricingStateType) => {
  const selectedCountry = pricingState.country;
  const selectedPackage = pricingState.package;
  // const searchParams = useSearchParams();
  // const selectedPackage = normalize(searchParams.get("package") || "basic");
  // const selectedCountry = normalize(searchParams.get("country") || "nigeria");

  const countryInfo = supportedCountries.find(
    (el) => normalize(el.name) === normalize(selectedCountry || "")
  );

  const getPackageInfo = () => {
    if (selectedCountry) {
      if (
        countryInfo &&
        (selectedPackage === "basic" ||
          selectedPackage === "pro" ||
          selectedPackage === "premium")
      )
        return countryInfo[selectedPackage || "basic"];
    }
  };

  const timelineInfo = [
    { text: "Business Registration", timeline: getPackageInfo()?.regTimeline },
    { text: "Bank Account", timeline: getPackageInfo()?.bankTimeline },
    { text: "Tax Registration", timeline: getPackageInfo()?.taxTimeline },
  ];

  return (
    <div className="flex">
      <div className="flex flex-col justify-between items-center gap-6 flex-1 bg-primary relative max-w-[400px] p-6 overflow-hidden rounded-lg rounded-r-none border border-primary border-r-0 ">
        <Image src={illustration} alt="" className="absolute right-0 z-0 " />
        <Image src={ellipse1} alt="" className="absolute left-0 top-0 z-0" />
        <Image
          src={ellipse2}
          alt=""
          className="absolute right-0 bottom-0 z-0"
        />
        <div className="flex">
          <div className="flex items-center gap-2 z-10  bg-background px-3 py-2 rounded-lg w-max">
            <RocketIcon classNames={{ path: "fill-primary" }} />
            <span className=" bg-background text-sm text-gray3 text-center">
              {selectedPackage === "basic" && "For small businesses"}
              {selectedPackage === "pro" && "For medium businesses"}
              {selectedPackage === "premium" && "For large businesses"}
            </span>
          </div>
        </div>
        <p className="text-primary-foreground text-4xl font-semibold z-10">
          {getPackageInfo()?.price}
        </p>
        <p className=" text-primary-foreground text-center text-sm z-10">
          Invoices and receipts available for easy company reimbursement
        </p>
      </div>

      <div className="flex flex-col items-center justify-between flex-1 bg-border border border-primary border-l-0 rounded-lg rounded-l-none p-6">
        <div className="flex gap-2 items-center">
          <RocketIcon classNames={{ path: "fill-primary" }} />
          <span className="text-gray3 text-sm font-semibold">Timelines</span>
        </div>
        <div className="flex justify-between w-full">
          {timelineInfo.map((el, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-4 bg-background rounded"
            >
              <p className="text-sm text-gray4 font-semibold text-center">
                {el.text}
              </p>
              <p className="text-2xl font-semibold text-gray3 text-center whitespace-nowrap">
                {el.timeline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingBottom;
