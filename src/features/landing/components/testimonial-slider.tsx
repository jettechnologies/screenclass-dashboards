"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { FaStar } from "react-icons/fa";

export type Testimonials = {
  stars: number;
  text: string;
  name: string;
  occupation: string;
}[];

export const TestimonialSlider = ({ data }: { data: Testimonials }) => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="swiper-container relative z-20 min-h-[250px] w-full"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className="min-h-[250px]">
          <div className="min-h-[250px] rounded-2xl bg-[#0D2450] p-4 text-white lg:p-8">
            {/* Stars */}
            <div className="mb-4 flex items-center gap-2">
              {Array.from({ length: item.stars }).map((_, i) => (
                <FaStar key={i} className="h-5 w-5 text-[#F1ED1D]" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="mb-6 text-xs leading-relaxed text-gray-100 md:text-base lg:text-lg">
              {item.text}
            </p>

            {/* Author Info */}
            <div>
              <h3 className="text-sm font-semibold lg:text-lg xl:text-xl">
                {item.name}
              </h3>
              <p className="text-sm text-[#F1ED1D] lg:text-base">
                {item.occupation}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
