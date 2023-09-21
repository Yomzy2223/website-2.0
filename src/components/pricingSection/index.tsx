"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import CMSelect from "../cmSelect";
import { useGlobalFucntions } from "@/hooks/useGlobalFunctions";
import { useParams, useSearchParams } from "next/navigation";
import { countries, steps } from "./constants";
import { Separator } from "../ui/separator";
import nigeriaFlag from "@/assets/icons/nigeria-flag.svg";

const PricingSection = () => {
  const { setQuery } = useGlobalFucntions();
  const searchParams = useSearchParams();
  const selectedPackage = searchParams.get("package");
  const selectedCountry = searchParams.get("country") || undefined;

  const selectCountry = (selectedCountry: any) => {
    console.log(selectedCountry.props);

    setQuery("country", selectedCountry?.props?.children[2]);
  };

  const handlePackageSelect = (selectedPackage: string) => {
    setQuery("package", selectedPackage);
  };

  //   console.log(getCountriesInfo(selectedCountry));
  return (
    <div className="space-y-24">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-center text-4xl text-primary-gray3 font-bold ">
          Register your business faster
        </h2>
        <p className="text-center text-primary-gray4 max-w-[min(700px,80%)]">
          Launch is faster and cheaper than alternatives, helping you save up to
          25% in fees and 40% in go-to-market time.
        </p>
      </div>

      <div className="flex gap-10 ">
        <ul className="flex flex-col gap-6 relative">
          <Separator
            orientation="vertical"
            className="absolute left-2.5 top-4 bg-primary-gray6 z-0 h-[88%]"
          />
          {steps.map((el, i) => (
            <li key={i} className="flex gap-3 py-3 items-center z-10 ">
              <Image src={el.icon} alt="" />
              <span className="text-sm">{el.text}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-6 flex-1 border-8 border-border rounded-lg bg-background px-6 pt-8 pb-6">
          <div className="flex  justify-between">
            <div className=" w-full">
              <p className="text-primary-gray3 font-semibold">
                Get estimated timeline in seconds
              </p>
              <p className="text-primary-gray3 text-sm">
                Choose country and business type to see possible registration
                timeline
              </p>
            </div>
            <Button className="gap-2 whitespace-nowrap">
              Register in {selectedCountry} <span aria-hidden="true">→</span>
            </Button>
          </div>
          <div className="flex justify-between gap-4">
            {/* <CMSelect
              options={getCountriesInfo()}
              placeholder="Select country"
              value={() =>
                getCountriesInfo(selectedCountry || "")?.[0]?.props?.children[2]
              }
              defaultValue={selectedCountry}
              handleSelect={selectCountry}
            /> */}
            <div className="flex items-center gap-4">
              {["Basic", "Pro", "Premium"].map((el, i) => (
                <Button
                  key={i}
                  onClick={() => handlePackageSelect(el)}
                  variant={selectedPackage === el ? "default" : "outline"}
                >
                  {el}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

const getCountriesInfo = (country: string) => {
  let countriesInfo = countries;
  if (country) countriesInfo = countries.filter((el) => el.name === country);

  return countriesInfo.map((el, i) => (
    <span key={i} className="flex items-center gap-4">
      <Image src={el.flag} alt="" width={24} height={24} /> {el.name}
    </span>
  ));
};
