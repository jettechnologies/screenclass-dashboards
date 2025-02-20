import { VideoCard, VideoCardProps } from "../../components";

const data: VideoCardProps[] = [
  {
    imageSrc: "/images/video-thumbnail.png",
    subject: "Mathematics",
    description:
      "Learn the basics. Build a Firm Foundation | get Education through our Expressive Medium that Inspires creativity",
    topicCount: 36,
    moduleCount: 12,
  },
  {
    imageSrc: "/images/video-thumbnail.png",
    subject: "English Language",
    description:
      "Learn the about why babies cannot talk and when they will start exhibiting sign to talk",
    topicCount: 4,
    moduleCount: 12,
  },
  {
    imageSrc: "/images/video-thumbnail.png",
    subject: "English Language",
    description:
      "Learn the about why babies cannot talk and when they will start exhibiting sign to talk",
    topicCount: 4,
    moduleCount: 12,
  },
  {
    imageSrc: "/images/video-thumbnail.png",
    subject: "Mathematics",
    description:
      "Learn the basics. Build a Firm Foundation | get Education through our Expressive Medium that Inspires creativity",
    topicCount: 36,
    moduleCount: 12,
  },
];

export const VideoLibrary = () => {
  return (
    <section className="grid min-h-screen w-full place-items-center bg-bg-index-three bg-cover bg-center bg-no-repeat px-2 py-6 font-poppins sm:px-8 sm:py-8 md:py-12 lg:px-14">
      <div className="w-full">
        <h3 className="text-center text-lg font-semibold text-black md:text-xl lg:text-3xl xl:text-5xl">
          Our Popular Videos
        </h3>
        <p className="text-center text-[10px] font-semibold text-black lg:text-2xl">
          Watch our Educative videos Over{" "}
          <span className="text-[8px] font-medium text-SC-text-red md:text-sm lg:text-xl">
            10,000
          </span>{" "}
          students have watched these
        </p>
      </div>
      <div className="grid w-full grid-cols-2 gap-4 lg:mt-10 lg:grid-cols-4">
        {data.map((item, index) => (
          <div className="h-fit rounded-sm bg-white" key={index}>
            <VideoCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};
