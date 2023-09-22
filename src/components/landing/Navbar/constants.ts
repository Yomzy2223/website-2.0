import {
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

export const products = [
	{
		name: "Launch",
		description: "Register and manage your business",
		href: "#",
		icon: ChartPieIcon,
	},
	{
		name: "Shield",
		description: "Register your trademarks, copyright and patent",
		href: "#",
		icon: CursorArrowRaysIcon,
	},
	{
		name: "Comply",
		description: "Manage your business compliance",
		href: "#",
		icon: FingerPrintIcon,
	},
	{
		name: "Taxby",
		description: "Automate business tax filings and reporting",
		href: "#",
		icon: SquaresPlusIcon,
	},
];

export const callsToAction = [
	{ name: "Watch demo", href: "#", icon: PlayCircleIcon },
	{ name: "Contact sales", href: "#", icon: PhoneIcon },
];

export const company = [
	{ name: "About us", href: "#" },
	{ name: "Careers", href: "#" },
	{ name: "Support", href: "#" },
	{ name: "Press", href: "#" },
	{ name: "Blog", href: "#" },
];
