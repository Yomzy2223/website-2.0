"use client";

import React, { MutableRefObject, Ref } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const CMSelect = ({
  label,
  placeholder,
  options,
  handleSelect,
  className,
  defaultValue,
  value,
}: {
  label?: string;
  placeholder: string;
  options: string[];
  handleSelect?: (v: any) => void;
  className?: { trigger?: string };
  defaultValue?: string;
  value?: string;
}) => {
  return (
    <Select
      onValueChange={handleSelect}
      defaultValue={defaultValue}
      value={value}
    >
      <SelectTrigger
        className={cn(
          "w-full max-w-[300px] rounded-lg border-l-4 border-border ",
          className?.trigger
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option, i) => (
            <SelectItem key={i} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CMSelect;
