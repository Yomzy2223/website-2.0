"use client";

import React, { ReactNode, useEffect } from "react";
import SwipeContent from "./SwipeContent";
import { testimonials } from "./constants";
import Swiper from "swiper";
import {
  Pagination,
  Autoplay,
  EffectCards,
  EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";

const TestimonialSection = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      slidesPerView: "auto",
      spaceBetween: 24,
      centeredSlides: true,
      loop: true,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      modules: [Pagination, Autoplay, EffectCards, EffectCreative],
      scrollbar: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      // effect: "cards",
      cardsEffect: {
        perSlideOffset: 8,
        perSlideRotate: 6,
        rotate: true,
        slideShadows: true,
      },
      grabCursor: true,
      // creativeEffect: {
      //   limitProgress: 2,
      //   next: {
      //     translate: [90, 0],
      //     // Array with rotate X, Y and Z values (in deg)
      //     rotate: [0, 90, 180, 270, 360],
      //     // Slide opacity
      //     opacity: 0.7,
      //     // Slide scale
      //     scale: 0.8,
      //     // Enables slide shadow
      //     shadow: true,
      //     // Transform origin, e.g. `left bottom`
      //     origin: "left bottom",
      //   },
      //   perspective: true,
      //   prev: {
      //     translate: [90, 0],
      //     // Array with rotate X, Y and Z values (in deg)
      //     rotate: [0, 90, 180, 270, 360],
      //     // Slide opacity
      //     opacity: 0.7,
      //     // Slide scale
      //     scale: 0.8,
      //     // Enables slide shadow
      //     shadow: true,
      //     // Transform origin, e.g. `left bottom`
      //     origin: "left bottom",
      //   },
      // },
    });

    return () => swiper.disable();
  }, []);

  return (
    <div className="space-y-28 pb-14 pt-28 bg-[#ccf3ff33]">
      <div className="flex flex-col items-center gap-6 max-w-[min(700px,80%)] m-auto">
        <p className="font-semibold text-gray4 text-lg">What our users say</p>
        <p className="font-bold text-4xl text-center text-gray3">
          From the thousand of users who have used our platform
        </p>
      </div>
      <div className="my-24">
        <SwiperContainer>
          <SwiperWrapper>
            {testimonials.map((el, i) => (
              <SwipeContent
                key={i}
                image={el.image}
                handle={el.handle}
                name={el.name}
                description={el.description}
              />
            ))}
          </SwiperWrapper>
        </SwiperContainer>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default TestimonialSection;

const SwiperContainer = ({ children }: { children: ReactNode }) => {
  return <div className="swiper">{children}</div>;
};

const SwiperWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="swiper-wrapper !w-2/3">{children}</div>;
};
