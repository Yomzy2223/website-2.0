"use client";

import Lines from "@/assets/images/Lines.svg";
import Image from "next/image";
import Mo from "@/assets/images/Mo.png";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { MessengerBlue, TelegramBlue, WhatsappBlue } from "@/assets/socials";

export default function ContactSection() {
  return (
    <div
      className="bg-[#282929] w-full h-[380px] rounded-[24px] overflow-hidden relative"
      data-aos="fade-in"
    >
      <Image src={Lines} alt="" />
      <div className="absolute top-0 left-0 flex justify-between w-full h-full text-white">
        <div className="flex flex-col justify-center mx-10 max-w-[722px]">
          <h4 className="text-4xl font-semibold leading-[1.3] tracking-[-0.96px] mb-9">
            {"We are not too busy to listen".split(" ").map((el, i) => (
              <span key={i} data-aos="fade" data-aos-delay={i + "00"}>
                {el}{" "}
              </span>
            ))}
          </h4>
          <p
            className="text-base font-medium leading-[1.3] mb-12 text-gray8"
            data-aos="fade-in"
          >
            We offer real time, in person support and our users love it. We are
            here to help with any questions you may have about our products or
            getting started. Choose a channel that works best for you.
          </p>
          <div className="flex gap-4 mb-[45px]">
            {contactbuttons.map((el, i) => (
              <Link
                key={i}
                href={el.link}
                className={buttonVariants({
                  size: "lg",
                  variant: "tertiary",
                  className: "gap-2",
                })}
                data-aos={el.aos}
              >
                <Image src={el.icon} alt="" />
                <p className="text-base font-medium leading-normal">
                  {el.text}
                </p>
              </Link>
            ))}
          </div>
          <Link href="/mail" data-aos="slide-up">
            <p className="text-lg font-medium leading-8 underline animate-bounce">
              You can also send a mail
            </p>
          </Link>
        </div>
        <div className="shrink-0">
          <Image
            src={Mo}
            alt={"smiling employee"}
            quality={100}
            className="w-auto h-full object-contain"
            data-aos="fade-in"
          />
        </div>
      </div>
    </div>
  );
}

const contactbuttons = [
  {
    icon: TelegramBlue,
    text: "In-App chat",
    link: "/in-app-chat",
    aos: "flip-left",
  },
  {
    icon: WhatsappBlue,
    text: "Whatsapp",
    link: "/whatsapp",
    aos: "zoom-in",
  },
  {
    icon: MessengerBlue,
    text: "Schedule a Call",
    link: "/schedule-call",
    aos: "flip-right",
  },
];
