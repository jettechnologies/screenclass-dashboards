import { FeaturesCard, FeaturesCardProps } from "../../components";

const data: FeaturesCardProps[] = [
  {
    imageSrc: "/images/features-img.png",
    subject: "CBT Solutions",
    description:
      "Learn the basics. Build a Firm Foundation | get Education through our Expressive Medium that Inspires creativity",
    tag: "new_feature",
  },
  {
    imageSrc: "/images/features-img.png",
    subject: "EDU-VIDEO SOLUTIONS",
    description:
      "Learn the about why babies cannot talk and when they will start exhibiting sign to talk",
    tag: "new_feature",
  },
  {
    imageSrc: "/images/features-img.png",
    subject: "EXAMS SOLUTIONS",
    description:
      "Learn the about why babies cannot talk and when they will start exhibiting sign to talk",
    tag: "coming_soon",
  },
  {
    imageSrc: "/images/features-img.png",
    subject: "GAMING SOLUTIONS",
    description:
      "Learn the basics. Build a Firm Foundation | get Education through our Expressive Medium that Inspires creativity",
    tag: "coming_soon",
  },
];

export const Features = () => {
  return (
    <section
      className="grid min-h-screen w-full place-items-center px-2 py-6 font-poppins sm:px-8 lg:px-14"
      style={{
        background:
          "linear-gradient(to right, rgba(255,160,103,0.25) 0%, rgba(90,159,211,0.25) 100%)",
        backdropFilter: "blur(80px)",
        WebkitBackdropFilter: "blur(80px)",
      }}
    >
      <div className="min-h-[60dvh] w-full">
        <h3 className="text-center text-lg font-semibold text-black md:text-left md:text-2xl lg:text-4xl xl:text-5xl">
          <span className="mr-2 text-SC-Nav-Blue">Screenclass</span>Features
        </h3>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 xl:gap-x-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="min-h-[200px] max-w-[300px] overflow-clip rounded-md bg-white shadow-lg"
            >
              <FeaturesCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
