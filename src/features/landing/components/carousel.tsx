"use client";

import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  children: React.ReactNode;
  isAutoPlay?: boolean;
  autoPlayInterval?: number;
  options?: EmblaOptionsType;
  className?: string;
};

export const Carousel: React.FC<PropType> = ({
  children,
  isAutoPlay = false,
  autoPlayInterval = 3000,
  options,
  className,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit: isAutoPlay,
      delay: autoPlayInterval,
      stopOnInteraction: false,
    }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [children, emblaApi]);

  return (
    <section className="embla m-auto w-full">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {React.Children.map(children, (child) => (
            <div className={`embla__slide ${className}`}>{child}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
