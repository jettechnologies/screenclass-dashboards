import { AboutFeaturesCard, AboutFeatureProps } from "../../components";

const features: AboutFeatureProps[] = [
  {
    imgSrc: "/images/about-online-learning.png",
    title: "Your Classroom, Reimagined",
    description:
      "From academic support to skill-building games, discover how learning can be fun, flexible, and fully online.",
  },
  {
    imgSrc: "/images/about-online-learning-2.png",
    title: " Real Learning. Real Results",
    description:
      "With Screenclass, every lesson is a step forward. Our expertly designed courses and quizzes help students grow with confidence, turning screen time into smart time.",
  },
  {
    imgSrc: "/images/about-trivia.png",
    title: "Upgrade Your Skills with a Click",
    description:
      "Learning doesnot have to be boring—or bound by walls. Screenclass makes education exciting and easy to access, so learners of all ages can thrive.",
  },
  {
    imgSrc: "/images/about-24-hours.png",
    title: "Learn More. Stress Less.",
    description:
      "Screenclass makes learning fun! Master subjects with interactive lessons—less stress, more success.",
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
