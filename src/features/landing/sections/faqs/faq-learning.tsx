import { Dropdown } from "../../components";

const faqs = [
  {
    title: "Do we need to install anything?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, distinctio.",
  },
  {
    title: "Do we need to install anything?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, distinctio.",
  },
  {
    title: "Do we need to install anything?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, distinctio.",
  },
  {
    title: "Do we need to install anything?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, distinctio.",
  },
  {
    title: "Do we need to install anything?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, distinctio.",
  },
];

export const FAQLearning = () => {
  return (
    <section className="min-h-screen w-full bg-bg-faq-section-two-sm bg-cover bg-center bg-no-repeat lg:bg-bg-faq-section-two">
      <div className="grid h-screen w-full border-2 border-white px-8 pt-6 lg:items-center lg:px-[3.5rem] lg:pt-[2.5rem]">
        <div className="w-full lg:w-1/2">
          {/* <div className="flex w-full flex-col gap-y-6 lg:max-w-[475px]">
            <h3 className="text-center font-poppins text-2xl font-normal text-black lg:text-left lg:text-5xl">
              Learn <span className="mr-2 text-xl lg:text-4xl">without</span>
              <br className="hidden lg:block" />
              <span className="font-bold capitalize text-[#0B67B0]">
                Boundaries
              </span>
            </h3>
            <p className="w-full text-center text-sm font-normal text-black lg:text-left lg:text-base">
              We empower students with 21st century skill: Join our E-lerrning
              community and unlock your potential. Screenclass Is a management
              stystem (LMS) Developed to meet and suit the learning process.
            </p>
          </div> */}
          <div className="w-full md:w-fit">
            <h3 className="text-2xl font-normal text-black lg:text-5xl text-center md:text-left">
              Frequently Asked
              <span className="ml-3 font-bold text-[#0B67B0]">Questions</span>
            </h3>
            <div className="mt-12 flex w-full md:w-[250px] flex-col gap-y-5 lg:w-[320px]">
              {faqs.map((faq, index) => (
                <div className="min-h-[56px] w-full" key = {index}>
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
