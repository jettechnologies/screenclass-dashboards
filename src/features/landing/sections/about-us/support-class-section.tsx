import Image from "next/image";

export const SupportClassSection = () => {
  const images = [
    "/images/about-24-one.png",
    "/images/about-24-two.png",
    "/images/about-24-three.png",
    "/images/about-24-four.png",
  ];
  const features = [
    {
      title: "Comfortable & Convenience",
      content:
        "We empower students with 21st century skill: Join our E-lerrning community and unlock your potential. Screenclass Is a mANEGEMENT SYSTEM (LMS) Developed to meet and suit the learning process of the average student",
    },
    {
      title: "Comfortable & Convenience",
      content:
        "We empower students with 21st century skill: Join our E-lerrning community and unlock your potential. Screenclass Is a mANEGEMENT SYSTEM (LMS) Developed to meet and suit the learning process of the average student",
    },
    {
      title: "Comfortable & Convenience",
      content:
        "We empower students with 21st century skill: Join our E-lerrning community and unlock your potential. Screenclass Is a mANEGEMENT SYSTEM (LMS) Developed to meet and suit the learning process of the average student",
    },
    {
      title: "Comfortable & Convenience",
      content:
        "We empower students with 21st century skill: Join our E-lerrning community and unlock your potential. Screenclass Is a mANEGEMENT SYSTEM (LMS) Developed to meet and suit the learning process of the average student",
    },
  ];
  return (
    <section className="bg-bg-about-section-2 min-h-[90dvh] w-full bg-cover bg-center bg-no-repeat px-8 py-6 md:py-12">
      <div className="flex h-full w-full flex-col gap-14 lg:flex-row lg:pl-12">
        <div className="flex h-full w-full flex-col gap-y-6 lg:w-[40%]">
          <h3 className="w-[195px] self-center text-center text-2xl font-semibold text-[#ffffff] lg:w-[292px] lg:self-end lg:text-end lg:text-4xl">
            We take 24/7 Support classes
          </h3>
          <div className="flex h-full w-full flex-wrap justify-between gap-y-4 lg:gap-y-10">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative h-[148px] w-[168px] rounded-lg lg:h-[223px] lg:w-[253px]"
              >
                <Image
                  src={img}
                  alt={`24hours-${index}`}
                  fill
                  className="h-full w-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-full flex-1 flex-col gap-y-8">
          {features.map(({ title, content }, index) => (
            <div
              key={index}
              className="flex w-full flex-col gap-y-2 text-[#ffffff]"
            >
              <h5 className="text-sm font-medium lg:text-xl">{title}</h5>
              <p className="text-xs font-normal lg:text-base">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
