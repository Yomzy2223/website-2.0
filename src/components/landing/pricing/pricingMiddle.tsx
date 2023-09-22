import { useGlobalFucntions } from "@/hooks/useGlobalFunctions";
import { normalize } from "@/lib/globalFunctions";
import { supportedCountries } from "@/lib/supportedCountries";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import CMSelect from "../../cmSelect";
import { Button } from "../../ui/button";
import { handlePricingType, middlePropType } from "./constants";

const PricingMiddle = ({ pricingState, handlePricing }: middlePropType) => {
  // const { setQuery } = useGlobalFucntions();
  // const searchParams = useSearchParams();
  // const selectedPackage = normalize(searchParams.get("package") || "basic");
  // const selectedCountry = normalize(searchParams.get("country") || "nigeria");

  const selectCountry = (selected: any) => {
    // setQuery("country", normalize(selected?.props?.children[2]) || "");
    handlePricing({
      selectedCountry: normalize(selected?.props?.children[2]),
    });
  };

  const handlePackageSelect = (selected: string) => {
    // setQuery("package", normalize(selected) || "");
    handlePricing({ selectedPackage: normalize(selected) });
  };

  const countries = getCountriesInfo();
  const country = countries.find(
    (el) =>
      el?.props?.children[2] ===
      getCountriesInfo(pricingState.country)[0]?.props?.children[2]
  );

  return (
    <div className="flex gap-8">
      <CMSelect
        options={countries}
        placeholder="Select country"
        value={pricingState.country ? country : undefined}
        defaultValue={pricingState.country}
        handleSelect={selectCountry}
      />
      <div className="flex items-center gap-4">
        {["Basic", "Pro", "Premium"].map((el, i) => (
          <Button
            key={i}
            onClick={() => handlePackageSelect(el)}
            variant={
              pricingState.package === normalize(el) ? "default" : "outline"
            }
            className="rounded-[40px]"
          >
            {el}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PricingMiddle;

const getCountriesInfo = (country?: string) => {
  let countriesInfo = supportedCountries;
  if (country)
    countriesInfo = supportedCountries.filter(
      (el) => normalize(el.name) === country
    );

  return countriesInfo.map((el, i) => (
    <span key={i} className="flex items-center gap-4">
      <Image src={el.flag} alt="" width={24} height={24} /> {el.name}
    </span>
  ));
};
