import {
	Albania,
	Algeria,
	Andorra,
	Ethiopia,
	Kenya,
	Nigeria,
	SouthAfrica,
	Tanzania,
	Uganda,
} from "@/assets/flags";
import { Facebook, Instagram, Linkedin, Twitter } from "@/assets/socials";

export const footerLinks = [
	{
		title: "Products",
		links: [
			{ name: "Launch", link: "/launch" },
			{ name: "Compliance", link: "/compliance" },
			{ name: "Diligence", link: "/diligence" },
			{ name: "Roam", link: "/roam" },
		],
	},
	{
		title: "Company",
		links: [
			{ name: "About us", link: "/aboutus" },
			{ name: "Why Sidebrief?", link: "/why-sidebrief" },
			{ name: "Customers", link: "/customers" },
			{ name: "Careers", link: "/careers" },
		],
	},
	{
		title: "Partners",
		links: [
			{ name: "Blog", link: "/blog" },
			{ name: "FAQs", link: "/faqs" },
			{ name: "Help", link: "/help" },
		],
	},
];

export const countries = [
	{ name: "Kenya", flag: Kenya },
	{ name: "Nigeria", flag: Nigeria },
	{ name: "Tanzania", flag: Tanzania },
	{ name: "South Africa", flag: SouthAfrica },
	{ name: "Uganda", flag: Uganda },
	{ name: "Ethopia", flag: Ethiopia },
	{ name: "Albania", flag: Albania },
	{ name: "Algeria", flag: Algeria },
	{ name: "Andorra", flag: Andorra },
];

export const socials = [
	{ name: "instagram", icon: Instagram, link: "https://instagram.com" },
	{ name: "twitter", icon: Twitter, link: "https://twitter.com" },
	{ name: "linkedin", icon: Linkedin, link: "https://linkedin.com" },
	{ name: "facebook", icon: Facebook, link: "https://facebook.com" },
];
