import { FeaturesCard, FeaturesCardProps } from "../../components";

const data: FeaturesCardProps[] = [
  {
    imageSrc: "/images/video-thumbnail.png",
    subject: "CBT Solutions",
    description:
      "Learn the basics. Build a Firm Foundation | get Education through our Expressive Medium that Inspires creativity",
    tag: "new_feature",
  },
  {
    imageSrc: "/images/video-thumbnail.png",
    subject: "EDU-VIDEO SOLUTIONS",
    description:
      "Learn the about why babies cannot talk and when they will start exhibiting sign to talk",
    tag: "new_feature",
  },
  {
    imageSrc: "/images/video-thumbnail.png",
    subject: "EXAMS SOLUTIONS",
    description:
      "Learn the about why babies cannot talk and when they will start exhibiting sign to talk",
    tag: "coming_soon",
  },
  {
    imageSrc: "/images/video-thumbnail.png",
    subject: "GAMING SOLUTIONS",
    description:
      "Learn the basics. Build a Firm Foundation | get Education through our Expressive Medium that Inspires creativity",
    tag: "coming_soon",
  },
];

export const Features = () => {
  return (
    <section className="grid min-h-screen w-full place-items-center bg-bg-index-two bg-cover bg-center bg-no-repeat px-2 py-6 font-poppins sm:px-8 lg:px-14">
      <div className="min-h-[60dvh] w-full">
        <h3 className="text-center text-lg font-semibold text-black md:text-left md:text-2xl lg:text-4xl xl:text-5xl">
          <span className="mr-2 text-SC-Nav-Blue">Screenclass</span>Features
        </h3>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 xl:gap-x-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="min-h-[200px] max-w-[300px] overflow-clip rounded-md rounded-br-[140px] bg-white shadow-lg"
            >
              <FeaturesCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
