import Image from "next/image";

interface FormContentProps {
  formType: "reset-password" | "signin";
  children: React.ReactNode;
}

export const FormContent = ({ formType, children }: FormContentProps) => {
  return (
    <section className="ml-4 h-full w-full">
      {formType === "signin" ? (
        <Image
          src="/images/form-phone.png"
          alt="form image"
          width={953}
          height={795}
          priority
          className="object-cover"
        />
      ) : (
        <Image
          src="/images/reset-password.png"
          alt="form image"
          width={680}
          height={650}
          priority
          className="object-contain"
        />
      )}
      {children}
    </section>
  );
};

// <div className="flex w-full flex-col gap-y-12 lg:gap-y-36">
//         <Link
//           href="/"
//           className="relative h-[35px] w-[175px] lg:h-[74px] lg:w-[300px]"
//         >
//           <Image
//             src="/images/screenclass-logo-white.png"
//             alt="screenclass logo"
//             fill
//             className="h-full w-full object-contain"
//           />
//         </Link>
//         <div className="relative mx-auto w-fit lg:mx-0">
//           <h5 className="text-center font-Sedan-sc text-lg font-normal uppercase text-white lg:text-4xl">
//             {title}
//           </h5>
//           <p className="mt-4 max-w-[415px] text-center font-Sedan-sc text-xs font-normal leading-6 text-white max-sm:w-[231px] lg:text-[20px]">
//             {content}
//           </p>
//           <div className="absolute -right-6 -top-10 h-[35px] w-[35px] lg:-right-20 lg:-top-24 lg:h-[80px] lg:w-[80px]">
//             <Image
//               src="/icons/auth-stroke-big.svg"
//               alt="auth stroke"
//               fill
//               className="h-full w-full object-cover"
//             />
//           </div>
//           <div className="absolute -bottom-10 -left-6 h-[35px] w-[35px] lg:-bottom-16 lg:-left-6 lg:h-[55px] lg:w-[55px]">
//             <Image
//               src="/icons/auth-stroke-small.svg"
//               alt="auth stroke"
//               fill
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
