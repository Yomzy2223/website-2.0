"use client";
import { useState } from "react";
import Image from "next/image";
import { callsToAction, company, products } from "./constants";
import Logo from "@/assets/icons/logo.svg";


import {
	ChevronDown,
	Menu
  } from "lucide-react"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


	return (
		<header className="bg-white">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">Sidebrief</span>
						<Image
							className="h-8 w-auto"
							src={Logo}
							alt="sidebrief"
							height={32}
							width={500}
						/>
					</a>
				</div>

				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Menu className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Sidebrief</span>
            <Image
              className="h-8 w-auto"
              src={Logo}
              alt="sidebrief"
              height={32}
              width={500}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
          </button>
        </div>
        <div className="flex gap-6 justify-between w-2/5">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Products
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Partners
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Contact page
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a>
        </div>

      
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="btn btn-secondary text-sm font-semibold leading-6 text-white"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
