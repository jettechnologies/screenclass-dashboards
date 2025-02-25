import { AboutFeaturesCard, AboutFeatureProps } from "../../components";

const features: AboutFeatureProps[] = [
  {
    imgSrc: "/images/about-online-learning.png",
    title: "Online Learning",
    description:
      "Learn the basics. Build a Firm Foundation | get Education through our Expressive Medium that Inspires creativity",
  },
  {
    imgSrc: "/images/about-online-learning-2.png",
    title: "Online Learning",
    description:
      "Learn the basics. Build a Firm Foundation | get Education through our Expressive Medium that Inspires creativity",
  },
  {
    imgSrc: "/images/about-trivia.png",
    title: "Online Learning",
    description:
      "Learn the basics. Build a Firm Foundation | get Education through our Expressive Medium that Inspires creativity",
  },
  {
    imgSrc: "/images/about-24-hours.png",
    title: "Online Learning",
    description:
      "Learn the basics. Build a Firm Foundation | get Education through our Expressive Medium that Inspires creativity",
  },
];

export const Features = () => {
  return (
    <section className="min-h-screen w-full">
      <div className="grid h-[40dvh] w-full place-items-center border-2 border-white bg-bg-about-section-5 bg-cover bg-center bg-no-repeat">
        <h3 className="text-center text-3xl font-bold uppercase text-white xl:text-5xl">
          WHAT WE DO
        </h3>
      </div>
      <div className="flex w-full flex-col flex-wrap justify-between gap-y-8 px-8 py-6 max-md:items-center md:py-12 lg:flex-row lg:px-28">
        {features.map((feature, index) => (
          <div key={index} className="w-fit px-2">
            <AboutFeaturesCard {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
};