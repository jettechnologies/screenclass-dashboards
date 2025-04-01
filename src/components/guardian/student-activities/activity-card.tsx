interface ActivityCardProps {
  title: string;
  desc?: string;
  date: string;
}

const ActivityCard = ({ title, desc, date }: ActivityCardProps) => {
  return (
    <>
      <div
        className="flex w-full items-center justify-between bg-white px-5 py-4"
        style={{
          boxShadow: "0px 12px 12px -12px rgba(0, 0, 0, 0.20)",
        }}
      >
        <div>
          <h3 className={`sansation text-sm font-bold text-SC-Brand-Blue`}>
            {title}
          </h3>
          <p className={`sansation text-[13px] text-black md:max-w-[80%]`}>
            {desc}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <p className="sansation text-xs text-[rgba(27,27,27,0.70)]">
              {date}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
