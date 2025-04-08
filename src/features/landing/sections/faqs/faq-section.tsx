import Image from "next/image";
import { Dropdown } from "../../components";
import { faqs } from "@/utils";

export const FAQSecondSection = () => {
  return (
    <section className="min-h-screen w-full bg-bg-faq-section-one bg-cover bg-center bg-no-repeat">
      <div className="relative z-10 flex h-screen w-full">
        <div className="z-10 grid h-full w-[70%] items-center px-8 md:flex-1 lg:px-[3.5rem]">
          <div className="w-fit border-2 border-black">
            <h3 className="text-2xl font-normal text-black lg:text-5xl">
              Frequently Asked
              <span className="ml-3 font-bold text-[#0B67B0]">Questions</span>
            </h3>
            <div className="mt-12 flex w-[250px] flex-col gap-y-5 lg:w-[320px]">
              {faqs.map((faq, index) => (
                <div className="min-h-[56px] w-full" key={index}>
                  <Dropdown {...faq} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-screen w-[205px] items-center bg-[#D9D9D9] p-4 [clip-path:polygon(50%_0%,100%_0%,100%_100%,0%_100%)] md:[clip-path:polygon(25%_0%,100%_0%,100%_100%,0%_100%)] lg:w-[25%]" />
        <div className="absolute right-5 top-[4rem] z-30 h-[100px] w-[100px] rounded-lg p-2 shadow-lg md:right-16 lg:right-10 lg:h-[230px] lg:w-[230px]">
          <Image
            src="/images/contact-hero-sub-1.png"
            alt="Confused person with question marks"
            fill
            className="h-full w-full rounded-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};
