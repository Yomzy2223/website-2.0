import { normalize } from "@/lib/globalFunctions";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const PricingTop = () => {
  const searchParams = useSearchParams();
  const selectedCountry =
    normalize(searchParams.get("country") || "") || undefined;

  return (
    <div className="flex  justify-between">
      <div className=" w-full">
        <p className="text-gray3 font-semibold">
          Get estimated timeline in seconds
        </p>
        <p className="text-gray3 text-sm">
          Choose country and business type to see possible registration timeline
        </p>
      </div>
      <Button className="gap-2 whitespace-nowrap " variant="pattern">
        Register in {selectedCountry} <span aria-hidden="true">→</span>
      </Button>
    </div>
  );
};

export default PricingTop;
