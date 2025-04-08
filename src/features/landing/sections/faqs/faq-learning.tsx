import { Dropdown } from "../../components";
import { faqs } from "@/utils";

export const FAQLearning = () => {
  return (
    <section className="min-h-screen w-full bg-bg-faq-section-two-sm bg-cover bg-center bg-no-repeat lg:bg-bg-faq-section-two">
      <div className="grid h-screen w-full border-2 border-white px-8 pt-6 lg:items-center lg:px-[3.5rem] lg:pt-[2.5rem]">
        <div className="w-full lg:w-1/2">
          <div className="w-full md:w-fit">
            <h3 className="text-center text-2xl font-normal text-black md:text-left lg:text-5xl">
              Frequently Asked
              <span className="ml-3 font-bold text-[#0B67B0]">Questions</span>
            </h3>
            <div className="mt-12 flex w-full flex-col gap-y-5 md:w-[250px] lg:w-[320px]">
              {faqs.map((faq, index) => (
                <div className="min-h-[56px] w-full" key={index}>
                  <Dropdown {...faq} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
