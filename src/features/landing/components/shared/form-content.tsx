import Image from "next/image";
import Link from "next/link";

interface FormContentProps {
  title?: string;
  content: string;
}

export const FormContent = ({ title, content }: FormContentProps) => {
  return (
    <section className="h-fit w-full px-8 lg:px-14">
      <div className="flex w-full flex-col gap-y-12 lg:gap-y-36">
        <Link
          href="/"
          className="relative h-[35px] w-[175px] lg:h-[74px] lg:w-[300px]"
        >
          <Image
            src="/images/screenclass-logo-white.png"
            alt="screenclass logo"
            fill
            className="h-full w-full object-contain"
          />
        </Link>
        <div className="relative mx-auto w-fit lg:mx-0">
          <h5 className="text-center font-Sedan-sc text-lg font-normal uppercase text-white lg:text-4xl">
            {title}
          </h5>
          <p className="mt-4 max-w-[415px] text-center font-Sedan-sc text-xs font-normal leading-6 text-white max-sm:w-[231px] lg:text-[20px]">
            {content}
          </p>
          <div className="absolute -right-6 -top-10 h-[35px] w-[35px] lg:-right-20 lg:-top-24 lg:h-[80px] lg:w-[80px]">
            <Image
              src="/icons/auth-stroke-big.svg"
              alt="auth stroke"
              fill
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -left-6 h-[35px] w-[35px] lg:-bottom-16 lg:-left-6 lg:h-[55px] lg:w-[55px]">
            <Image
              src="/icons/auth-stroke-small.svg"
              alt="auth stroke"
              fill
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
