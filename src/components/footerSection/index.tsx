import Logo from "@/assets/icons/logo.svg";
import Image from "next/image";
import { footerLinks, countries, socials } from "./constants";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function Footer() {
	return (
		<div className="bg-[#061419] px-[100px] w-full pt-[80px] pb-[70px] text-white">
			<div className="flex justify-between">
				<div>
					<Image src={Logo} alt="sidebrief" />
				</div>
				<div className="flex w-full max-w-[60%] justify-between">
					{footerLinks.map((el, i) => (
						<div key={i} className="space-y-4">
							<h6 className="text-2xl font-semibold">
								{el.title}
							</h6>
							<div className="flex flex-col space-y-4">
								{el.links.map((link, i) => (
									<Link
										key={i}
										href={link.link}
										className={buttonVariants({
											variant: "link",
											className:
												"!p-0 h-fit w-fit text-current text-xl",
										})}
									>
										{link.name}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex mt-[53px] mb-[64px] justify-between flex-wrap gap-3 border-y pt-[34px] pb-[30px]">
				{countries.map((country, i) => (
					<div key={i} className="flex gap-[13px] items-center">
						<Image
							src={country.flag}
							alt=""
							width={24}
							height={18}
							className="h-[18px] w-[24px]"
						/>
						<p>{country.name}</p>
					</div>
				))}
			</div>
			<div className="flex justify-between">
				<p className="text-xl">
					© 2022 Sidebrief Africa. All rights reserved.
				</p>
				<div>
					{socials.map((social, i) => (
						<Link
							key={i}
							href={social.link}
							className={buttonVariants({
								size: "icon",
								className:
									"bg-transparent hover:bg-transparent",
							})}
						>
							<Image src={social.icon} alt={social.name} />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
