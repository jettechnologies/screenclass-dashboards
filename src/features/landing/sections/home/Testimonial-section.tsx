// import Image from "next/image";
// import { FaStar } from "react-icons/fa6";
// import { Carousel, TestimonialSlider, Testimonials } from "../components";
// import { EmblaOptionsType } from "embla-carousel";

// export const TestimonialSection = () => {
//   const data: Testimonials = [
//     {
//       stars: 4,
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
//       name: "Jane Doe",
//       occupation: "CEO",
//     },
//     {
//       stars: 5,
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
//       name: "Mark Obidiegwu",
//       occupation: "Student",
//     },
//     {
//       stars: 4,
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
//       name: "Jane Doe",
//       occupation: "CEO",
//     },
//     {
//       stars: 5,
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
//       name: "Mark Obidiegwu",
//       occupation: "Student",
//     },
//   ];

//   //   const carouselSettings = {
//   //     infinite: true,
//   //     slidesToShow: 1,
//   //     slidesToScroll: 1,
//   //     autoplay: true,
//   //     speed: 2000,
//   //     autoplaySpeed: 2000,
//   //     cssEase: "ease-in-out",
//   //     swipeToSlide: true,
//   //   };
//   const carouselSettings: EmblaOptionsType = {
//     loop: true,
//     align: "center",
//     dragFree: false,
//     startIndex: 0,
//   };

//   return (
//     <section className="grid min-h-screen w-full place-items-center border-2 border-black bg-bg-index-two bg-cover bg-center bg-no-repeat px-2 font-poppins sm:px-8 lg:px-14">
//       <div className="min-h-[60dvh] w-full">
//         <h4 className="text-center text-xl font-bold text-[#0C598D] sm:text-2xl md:text-left lg:text-5xl">
//           Testimonials
//         </h4>
//         <div className="mx-auto mt-5 flex w-full flex-row items-center border-2 border-green-500 lg:mt-10 xl:w-4/5">
//           <Image
//             src="/images/testimonial-girl-img.png"
//             alt="testimonial image"
//             width={135}
//             height={135}
//             className="rounded-full border-2 border-black bg-center object-cover md:h-[250px] md:w-[250px] lg:h-[363px] lg:w-[363px]"
//           />
//           <div className="min-h-1/2 relative z-30 -ml-20 h-full flex-auto border-2 border-black md:-ml-36 lg:-ml-48">
//             {/* testimonial slider goes in here */}
//             <div className="relative z-40 -ml-20 h-[60%] w-[60%] flex-1 lg:-ml-48">
//               <div className="h-full w-full">
//                 <TestimonialSlider data={data} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// import Image from "next/image";
// import { TestimonialSlider } from "../components";

// export const TestimonialSection = () => {
//   const data = [
//     {
//       stars: 4,
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
//       name: "Jane Doe",
//       occupation: "CEO",
//     },
//     {
//       stars: 5,
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
//       name: "Mark Obidiegwu",
//       occupation: "Student",
//     },
//     {
//       stars: 4,
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
//       name: "Jane Doe",
//       occupation: "CEO",
//     },
//     {
//       stars: 5,
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
//       name: "Mark Obidiegwu",
//       occupation: "Student",
//     },
//   ];

//   return (
//     <section className="flex min-h-screen w-full items-center justify-center bg-bg-index-two bg-cover bg-center bg-no-repeat px-2 font-poppins sm:px-8 lg:px-14">
//       <div className="flex w-full flex-col items-center border-2 border-red-600 xl:w-4/5">
//         <h4 className="text-center text-xl font-bold text-[#0C598D] sm:text-2xl md:text-left lg:text-5xl">
//           Testimonials
//         </h4>
//         <div className="relative mx-auto mt-5 flex w-full flex-col items-center overflow-hidden lg:mt-10 lg:flex-row">
//           {/* Image Section */}
//           <div className="flex-shrink-0 rounded-full border-4 border-red-600">
//             <Image
//               src="/images/testimonial-girl-img.png"
//               alt="testimonial image"
//               width={363}
//               height={363}
//               className="rounded-full border-2 border-black object-cover"
//             />
//           </div>

//           {/* Testimonial Slider */}
//           <div className="relative z-30 -ml-20 flex flex-1 justify-center border-2 border-black md:-ml-36 lg:-ml-48">
//             <TestimonialSlider data={data} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import Image from "next/image";
import { TestimonialSlider, Testimonials } from "../../components";

export const TestimonialSection = () => {
  const data: Testimonials = [
    {
      stars: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      name: "Jane Doe",
      occupation: "CEO",
    },
    {
      stars: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      name: "Mark Obidiegwu",
      occupation: "Student",
    },
    {
      stars: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      name: "Jane Doe",
      occupation: "CEO",
    },
    {
      stars: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      name: "Mark Obidiegwu",
      occupation: "Student",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-bg-index-two bg-cover bg-center bg-no-repeat px-2 font-poppins sm:px-8 lg:px-14">
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

          <div className="relative z-40 -ml-20 w-[60%] flex-1 max-[680px]:self-start lg:-ml-48">
            {/* Top Quote */}
            <Image
              src="/images/Quote-Left.png"
              alt="Quote Left"
              width={60}
              height={60}
              className="absolute -top-6 left-1/2 z-40 -translate-x-1/2 transform"
            />
            <div className="h-full w-full">
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
