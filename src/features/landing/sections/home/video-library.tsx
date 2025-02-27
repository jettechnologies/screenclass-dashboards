"use client";

import { useState, useEffect } from "react";
import { VideoCard, VideoCardProps } from "../../components";
import { Carousel } from "../../components";
import { EmblaOptionsType } from "embla-carousel";

const data: VideoCardProps[] = [
  {
    imageSrc: "/images/video-thumbnail.png",
    subject: "Mathematics",
    description:
      "Learn the basics. Build a Firm Foundation | get Education through our Expressive Medium that Inspires creativity",
    topicCount: 36,
    moduleCount: 12,
  },
  {
    imageSrc: "/images/video-thumbnail.png",
    subject: "English Language",
    description:
      "Learn the about why babies cannot talk and when they will start exhibiting sign to talk",
    topicCount: 4,
    moduleCount: 12,
  },
  {
    imageSrc: "/images/video-thumbnail.png",
    subject: "English Language",
    description:
      "Learn the about why babies cannot talk and when they will start exhibiting sign to talk",
    topicCount: 4,
    moduleCount: 12,
  },
  {
    imageSrc: "/images/video-thumbnail.png",
    subject: "Mathematics",
    description:
      "Learn the basics. Build a Firm Foundation | get Education through our Expressive Medium that Inspires creativity",
    topicCount: 36,
    moduleCount: 12,
  },
];

export const VideoLibrary = () => {
  const [carouselSettings, setCarouselSettings] = useState<EmblaOptionsType>({
    loop: true,
    align: "center",
    dragFree: false,
    startIndex: 0,
    slidesToScroll: 2,
  });

  useEffect(() => {
    const updateSettings = () => {
      const width = window.innerWidth;

      setCarouselSettings((prevSettings) => ({
        ...prevSettings,
        slidesToScroll: width >= 1024 ? 2 : 1,
      }));
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);

    return () => window.removeEventListener("resize", updateSettings);
  }, []);

  return (
    <section className="flex h-[95vh] w-full border-4 border-white bg-bg-contact-brain bg-cover bg-center bg-no-repeat px-2 py-6 font-poppins sm:px-8 sm:py-8 md:py-12 lg:px-14">
      <div className="flex w-[55%] flex-col justify-center">
        <div className="w-full">
          <h3 className="text-center text-lg font-semibold text-white md:text-xl lg:text-3xl xl:text-5xl">
            Our Popular Videos
          </h3>
          <p className="mt-2 text-center text-[10px] font-semibold text-white lg:text-2xl">
            Watch our Educative videos Over{" "}
            <span className="text-[8px] font-medium text-[#00FEE2] md:text-2xl lg:text-[30px]">
              10,000
            </span>{" "}
            students have watched these
          </p>
        </div>
        <div className="mt-6 lg:px-16">
          <Carousel
            isAutoPlay
            autoPlayInterval={3000}
            options={carouselSettings}
            className="ml-4 flex-shrink-0 basis-full lg:basis-1/2"
          >
            {data.map((item, index) => (
              <div
                className="h-fit cursor-pointer rounded-sm bg-white"
                key={index}
              >
                <VideoCard {...item} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
