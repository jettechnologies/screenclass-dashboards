import Image from "next/image";
import { Carousel } from "../../components";
import { EmblaOptionsType } from "embla-carousel";

export const Services = () => {
  const videoThumbnails = [
    "/images/video-small-thumbnail-1.png",
    "/images/video-small-thumbnail-2.png",
    "/images/video-small-thumbnail-3.png",
    "/images/video-small-thumbnail-4.png",
    "/images/video-small-thumbnail-5.png",
    "/images/video-small-thumbnail-1.png",
    "/images/video-small-thumbnail-2.png",
    "/images/video-small-thumbnail-3.png",
    "/images/video-small-thumbnail-4.png",
    "/images/video-small-thumbnail-5.png",
  ];

  const carouselSettings: EmblaOptionsType = {
    loop: true,
    align: "center",
    dragFree: false,
    startIndex: 0,
  };

  return (
    <section className="grid h-screen min-h-screen w-full grid-cols-1 grid-rows-[60dvh_40dvh] bg-white font-poppins">
      <div className="relative row-start-1 row-end-2 h-[60dvh] w-full">
        <Image
          src="/images/video-banner.png"
          alt="video banner"
          fill
          className="object-cover"
        />
      </div>
      <div className="h-[40dvh] w-full px-6 py-7">
        <Carousel
          isAutoPlay
          autoPlayInterval={3000}
          options={carouselSettings}
          className="flex-[0_0_50%] px-2 sm:flex-[0_0_33.33%] lg:flex-[0_0_20%]"
        >
          {videoThumbnails.map((item, index) => (
            <div className="relative h-[193px] w-full rounded-xl" key={index}>
              <Image
                src={item}
                alt="video thumbnail"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
