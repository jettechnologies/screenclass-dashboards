import Link from "next/link";

export const LearningOne = () => {
  return (
    <section
      className="h-[95vh] w-full bg-bg-contact-e-learning bg-cover bg-no-repeat"
      style={{
        backgroundPosition: "right 43% bottom 45%",
      }}
    >
      <div className="mx-auto flex w-full max-w-screen-xl flex-wrap justify-between gap-y-8 pb-12 pt-24 max-[780px]:px-8 lg:pt-48">
        <div className="flex w-max flex-col">
          <h3 className="text-3xl font-normal text-white lg:text-5xl">Learn</h3>
          <h3 className="text-3xl font-bold text-[#00FEE2] lg:text-5xl">
            <span className="mr-2 text-xl font-thin text-white lg:text-3xl">
              with
            </span>
            Us Today
          </h3>
          <p className="mt-4 text-xs font-medium text-white md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>
      </div>
    </section>
  );
};
