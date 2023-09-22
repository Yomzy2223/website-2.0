import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

interface propType {
  image: StaticImageData;
  handle: string;
  name: string;
  description: string;
}

const SwipeContent = ({ image, handle, name, description }: propType) => {
  return (
    <SwiperSlide>
      <Image src={image} alt="" className="w-auto h-52" />
      <div className="max-w-[650px] !mt-0">
        <p className="text-gray3 font-normal text-base mb-4">{handle}</p>
        <p className="text-gray3 font-semibold text-xl mb-6">{name}</p>
        <p className="text-gray3 text-base">{description}</p>
      </div>
    </SwiperSlide>
  );
};

export default SwipeContent;

const SwiperSlide = ({ children }: { children: ReactNode }) => {
  return (
    <div className="swiper-slide p-1 space-y-4 !flex flex-row items-center gap-4 bg-background ">
      {children}
    </div>
  );
};
