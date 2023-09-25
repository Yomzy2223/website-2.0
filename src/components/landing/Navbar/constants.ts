import {
	PieChart,
	MousePointerClick,
	Fingerprint,
	MessageSquarePlus,
	Phone,
	PlayCircleIcon,
} from "lucide-react"

export const products = [
	{
		name: "Launch",
		description: "Register and manage your business",
		href: "#",
		icon: PieChart,
	},
	{
		name: "Shield",
		description: "Register your trademarks, copyright and patent",
		href: "#",
		icon: MousePointerClick,
	},
	{
		name: "Comply",
		description: "Manage your business compliance",
		href: "#",
		icon: Fingerprint,
	},
	{
		name: "Taxby",
		description: "Automate business tax filings and reporting",
		href: "#",
		icon: MessageSquarePlus,
	},
];

export const callsToAction = [
	{ name: "Watch demo", href: "#", icon: PlayCircleIcon },
	{ name: "Contact sales", href: "#", icon: Phone },
];

export const company = [
	{ name: "About us", href: "#" },
	{ name: "Careers", href: "#" },
	{ name: "Support", href: "#" },
	{ name: "Press", href: "#" },
	{ name: "Blog", href: "#" },
];
