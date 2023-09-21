import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const createNewSwiper = () => {
  return new Swiper(".swiper", {
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    modules: [Pagination],
    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
    scrollbar: false,
  });
};
