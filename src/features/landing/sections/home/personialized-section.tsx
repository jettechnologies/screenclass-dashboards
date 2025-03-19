import Image from "next/image";

export const PersonalizedSection = () => {
  return (
    <section
      className="grid h-[90vh] w-full place-items-center px-2 font-poppins sm:px-8 lg:px-14"
      style={{
        background:
          "linear-gradient(to right, rgba(255,160,103,0.25) 0%, rgba(90,159,211,0.25) 100%)",
        backdropFilter: "blur(80px)",
        WebkitBackdropFilter: "blur(80px)",
      }}
    >
      <div className="flex h-3/5 w-full flex-col gap-x-4 sm:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 sm:w-2/5 sm:items-start">
          <h5 className="max-xs:text-center text-xl font-semibold text-SC-text-red md:text-[28px] lg:text-4xl xl:text-5xl">
            Learn On-The-Go!
          </h5>
          <div className="flex flex-col gap-y-8 lg:mt-16">
            <h4 className="max-xs:text-center text-2xl font-semibold capitalize text-black lg:text-4xl xl:text-[52px] xl:leading-[72px]">
              Learn <span className="font-medium">without</span> boundaries
            </h4>
            <p className="text-center text-sm font-semibold text-black sm:text-left md:text-base lg:text-2xl">
              Personalized Learning Unleashed
            </p>
          </div>
        </div>
        <div className="h-full w-full sm:w-3/5">
          <div className="relative h-full w-full">
            <Image
              src="/images/laptop-screen.png"
              alt="personalized learning image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
