"use client";

import Image from "next/image";
import { TestimonialSlider, Testimonials } from "../../components";

const data: Testimonials = [
  {
    stars: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    name: "Jane Doe",
    occupation: "CEO",
  },
  {
    stars: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    name: "Mark Obidiegwu",
    occupation: "Student",
  },
  {
    stars: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    name: "Jane Doe",
    occupation: "CEO",
  },
  {
    stars: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    name: "Mark Obidiegwu",
    occupation: "Student",
  },
];

export const TestimonialSection = () => {
  return (
    <section
      className="min-h-fit md:min-h-screen w-full px-2 font-poppins sm:px-8 lg:px-14"
      style={{
        background:
          "linear-gradient(to right, rgba(90,159,211,0.25) 0%, rgba(255,160,103,0.25) 100%)",
        backdropFilter: "blur(80px)",
        WebkitBackdropFilter: "blur(80px)",
      }}
    >
      <div className="mx-auto max-w-7xl pt-16 lg:pt-24">
        <h4 className="mb-12 text-center text-xl font-bold text-[#0C598D] sm:text-2xl md:text-left lg:mb-16 lg:text-5xl">
          Testimonials
        </h4>

        <div className="relative mx-auto flex h-[60vh] flex-row items-center xl:w-4/5">
          <div className="relative z-10 w-[40%] rounded-full">
            <Image
              src="/images/testimonial-girl-img.png"
              alt="testimonial image"
              width={200}
              height={200}
              className="rounded-full bg-center object-cover sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[363px] lg:w-[363px]"
            />
          </div>

          <div className="relative z-40 -ml-20 max-h-[250px] w-[60%] flex-1 max-[680px]:self-start lg:-ml-48">
            {/* Top Quote */}
            <Image
              src="/images/Quote-Left.png"
              alt="Quote Left"
              width={60}
              height={60}
              className="absolute -top-6 left-1/2 z-40 -translate-x-1/2 transform"
            />

            <div className="h-full min-h-[250px] w-full overflow-hidden rounded-md">
              <TestimonialSlider data={data} />
            </div>

            {/* Bottom Quote */}
            <Image
              src="/images/Quote-Right.png"
              alt="Quote Right"
              width={60}
              height={60}
              className="absolute -bottom-6 left-1/2 z-40 -translate-x-1/2 transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
