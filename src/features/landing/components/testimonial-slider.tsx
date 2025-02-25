// // "use client";

// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay } from "swiper/modules";
// // import "swiper/css";
// // import Image from "next/image";
// // import { FaStar } from "react-icons/fa";

// // export type Testimonials = {
// //   stars: number;
// //   text: string;
// //   name: string;
// //   occupation: string;
// // }[];

// // export const TestimonialSlider = ({ data }: { data: Testimonials }) => {
// //   return (
// //     <Swiper
// //       spaceBetween={20}
// //       slidesPerView={1}
// //       loop={true}
// //       autoplay={{
// //         delay: 3000,
// //         disableOnInteraction: false,
// //       }}
// //       modules={[Autoplay]}
// //       className="h-[375px] w-full"
// //     >
// //       {data.map((item, index) => (
// //         <SwiperSlide key={index} className="h-full w-full">
// //           <div className="relative z-30 flex flex-col justify-between self-center rounded-[20px] bg-[#0D2450E5] px-4 py-4 md:px-10">
// //             <Image
// //               src="/images/Quote-Left.png"
// //               alt="Quote Left"
// //               width={35}
// //               height={35}
// //               className="absolute left-1/2 top-[-20px] -translate-x-1/2 md:h-[84px] md:w-[84px]"
// //             />

// //             <div className="w-full">
// //               <div className="flex gap-x-2">
// //                 {Array.from({ length: item.stars }).map((_, i) => (
// //                   <FaStar key={i} size={24} color="#F1ED1D" />
// //                 ))}
// //               </div>
// //               <p className="mt-4 text-[8px] font-medium text-white max-sm:leading-3 md:mt-6 md:text-xs lg:text-base">
// //                 {item.text}
// //               </p>
// //             </div>

// //             <div className="mt-6 flex w-fit flex-col gap-x-2 border-2 border-black lg:mt-10 xl:mt-12">
// //               <p className="text-[8px] font-medium text-white md:text-xs lg:text-lg">
// //                 {item.name}
// //               </p>
// //               <p className="text-center text-[6px] font-normal text-[#F1ED1D] md:text-xs lg:text-sm">
// //                 {item.occupation}
// //               </p>
// //             </div>

// //             <Image
// //               src="/images/Quote-Right.png"
// //               alt="Quote Right"
// //               width={35}
// //               height={35}
// //               className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 md:h-[84px] md:w-[84px]"
// //             />
// //           </div>
// //         </SwiperSlide>
// //       ))}
// //     </Swiper>
// //   );
// // };

// // "use client";

// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay } from "swiper/modules";
// // import "swiper/css";
// // import Image from "next/image";
// // import { FaStar } from "react-icons/fa";

// // export type Testimonials = {
// //   stars: number;
// //   text: string;
// //   name: string;
// //   occupation: string;
// // }[];

// // export const TestimonialSlider = ({ data }: { data: Testimonials }) => {
// //   return (
// //     <Swiper
// //       spaceBetween={10}
// //       slidesPerView={1}
// //       loop={true}
// //       autoplay={{ delay: 3000, disableOnInteraction: false }}
// //       modules={[Autoplay]}
// //       className="h-[300px] w-full overflow-hidden border-4 border-green-700"
// //     >
// //       {data.map((item, index) => (
// //         <SwiperSlide
// //           key={index}
// //           className="flex h-[275px] max-h-[280px] min-h-[150px] items-center justify-center border-2 border-red-500"
// //         >
// //           <div className="relative flex max-h-[264px] min-h-[120px] flex-col rounded-[20px] bg-[#0D2450E5] px-6 py-6 text-center text-white">
// //             {/* Quote Icon */}
// //             <Image
// //               src="/images/Quote-Left.png"
// //               alt="Quote Left"
// //               width={35}
// //               height={35}
// //               className="absolute left-1/2 top-[-20px] -translate-x-1/2 md:h-[60px] md:w-[60px]"
// //             />

// //             {/* Stars */}
// //             <div className="mb-2 flex justify-center gap-x-1">
// //               {Array.from({ length: item.stars }).map((_, i) => (
// //                 <FaStar key={i} size={18} color="#F1ED1D" />
// //               ))}
// //             </div>

// //             {/* Testimonial Text */}
// //             <p className="text-sm leading-tight md:text-base">{item.text}</p>

// //             {/* User Info */}
// //             <div className="mt-4">
// //               <p className="text-lg font-bold">{item.name}</p>
// //               <p className="text-sm text-[#F1ED1D]">{item.occupation}</p>
// //             </div>

// //             {/* Bottom Quote Icon */}
// //             <Image
// //               src="/images/Quote-Right.png"
// //               alt="Quote Right"
// //               width={35}
// //               height={35}
// //               className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 md:h-[60px] md:w-[60px]"
// //             />
// //           </div>
// //         </SwiperSlide>
// //       ))}
// //     </Swiper>
// //   );
// // };

// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";

// export type Testimonials = {
//   stars: number;
//   text: string;
//   name: string;
//   occupation: string;
// }[];

// export const TestimonialSlider = ({ data }: { data: Testimonials }) => {
//   return (
//     <Swiper
//       spaceBetween={10}
//       slidesPerView={1}
//       loop={true}
//       autoplay={{ delay: 3000, disableOnInteraction: false }}
//       modules={[Autoplay]}
//       className="relative w-full overflow-visible"
//     >
//       {data.map((item, index) => (
//         <SwiperSlide
//           key={index}
//           className="flex w-full items-center justify-center border-4 border-white"
//         >
//           <div
//             className="relative flex flex-col rounded-[20px] border-4 border-green-500 bg-[#0D2450E5] px-6 py-6 text-center text-white"
//             style={{
//               minHeight: "120px",
//               maxHeight: "270px",
//               height: "100%",
//             }}
//           >
//             <Image
//               src="/images/Quote-Left.png"
//               alt="Quote Left"
//               width={35}
//               height={35}
//               className="absolute left-1/2 top-[-30px] -translate-x-1/2 md:h-[60px] md:w-[60px]"
//             />

//             <div className="mb-2 flex justify-center gap-x-1">
//               {Array.from({ length: item.stars }).map((_, i) => (
//                 <FaStar key={i} size={18} color="#F1ED1D" />
//               ))}
//             </div>

//             <p className="text-sm leading-tight md:text-base">{item.text}</p>

//             <div className="mt-4">
//               <p className="text-lg font-bold">{item.name}</p>
//               <p className="text-sm text-[#F1ED1D]">{item.occupation}</p>
//             </div>

//             <Image
//               src="/images/Quote-Right.png"
//               alt="Quote Right"
//               width={35}
//               height={35}
//               className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 md:h-[60px] md:w-[60px]"
//             />
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
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
      className="swiper-container relative z-20 w-full"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="rounded-2xl bg-[#0D2450] p-4 text-white lg:p-8">
            {/* Stars */}
            <div className="mb-6 flex items-center gap-2">
              {Array.from({ length: item.stars }).map((_, i) => (
                <FaStar key={i} className="h-5 w-5 text-[#F1ED1D]" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="mb-8 text-xs leading-relaxed text-gray-100 md:text-base lg:text-lg">
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
