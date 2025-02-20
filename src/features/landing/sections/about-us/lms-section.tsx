import Image from "next/image";

export const LMSSection = () => {
  return (
    <section className="bg-bg-about-section-2 relative min-h-[90dvh] w-full bg-cover bg-center bg-no-repeat px-8 py-6 md:py-12">
      <div className="flex justify-end">
        <div className="w-full lg:w-[45%]">
          <h3 className="text-2xl font-semibold text-[#10C9FE] lg:text-4xl">
            Screenclass LMS
          </h3>
          <p className="mt-4 text-xs font-normal text-[#ffffff] md:text-sm lg:text-base">
            We empower students with 21st century skill: Join our E-lerrning
            community and unlock your potential. Screenclass Is a mANEGEMENT
            SYSTEM (LMS) Developed to meet and suit the learning process of the
            average student/learner in the sub-saharan Africa bearnin in mind
            the challenges of access to “EduTech” facilities in the region.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-[323px] w-[385px] lg:h-[400px] lg:w-[500px]">
        <Image
          src="/images/about-hand.png"
          alt="about-hand"
          style={{ width: "100%", height: "100%" }}
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};
