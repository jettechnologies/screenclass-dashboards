"use client"; // Prevent SSR issues

import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { PartnerBlock } from "./partner-block";

interface VideoThumbnail {
  imgSrc: string;
  color: string;
}

interface SwiperCoverflowProps {
  videoThumbnails: VideoThumbnail[];
}

export const SwiperCoverflow: React.FC<SwiperCoverflowProps> = ({
  videoThumbnails,
}) => {
  return (
    <>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -75,
          depth: 250,
          modifier: 3.5,
          slideShadows: false,
        }}
        // navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        //   clickable: true,
        // }}
        modules={[EffectCoverflow, Autoplay]}
        className="h-full w-full border-2 border-red-500 py-16"
      >
        {videoThumbnails.map((item, index) => (
          <SwiperSlide key={index}>
            <PartnerBlock imgUrl={item.imgSrc} className={item.color} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
