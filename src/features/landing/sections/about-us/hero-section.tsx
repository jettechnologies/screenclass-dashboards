import Image from "next/image";
import { Header } from "../../components";

export const AboutHeroSection = () => {
  return (
    <section className="relative min-h-fit w-full bg-bg-about-hero bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 z-10 h-full w-full bg-black bg-opacity-50" />

      <div className="relative z-30">
        <Header />
      </div>

      <div className="relative z-20 flex min-h-[calc(100dvh-83px)] w-full flex-col px-8 max-sm:justify-end max-sm:pb-12 md:flex-row lg:px-[3.5rem]">
        <div className="flex min-h-full w-full justify-end">
          <div className="flex w-full md:w-[80%] flex-col justify-center lg:w-[50%]">
            <div className="flex w-full justify-center">
              <Image
                src="/images/about-us-title.png"
                alt="about us title"
                width={138}
                height={143}
                className="object-cover md:h-[294px] md:w-[281px]"
              />
              <p className="h-fit self-end text-2xl font-semibold text-white md:max-w-[245px] md:text-4xl">
                Know who we are and what we do
              </p>
            </div>
            <div className="w-full max-sm:mt-[15%]">
              <p className="text-xs font-normal text-white md:text-sm lg:text-base">
                We empower students with 21st-century skills: Join our
                E-learning community and unlock your potential. Screenclass is a
                Learning Management System (LMS) developed to meet and suit the
                learning process of the average student/learner in Sub-Saharan
                Africa, keeping in mind the challenges of access to “EduTech”
                facilities in the region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
