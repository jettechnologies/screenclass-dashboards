import { CircularProgress } from "@mui/joy";

interface SubjectProgressProps {
  width?: string;
  bgColor?: string;
  progressLevel: number;
  subject: string;
  description?: string;
  progressColor: string;
  trackColor?: string;
}

export const SubjectProgress = ({
  width,
  bgColor = "#0B67B0",
  progressColor,
  trackColor = "#FFFFFF",
  progressLevel,
  subject,
  description,
}: SubjectProgressProps) => {
  return (
    <div
      className={`${width || "w-fit"} rounded-2xl px-4 bg-[${bgColor}] min-w-[180px] py-8`}
      style={{ backgroundColor: bgColor }} // Fallback for dynamic colors
    >
      <div className="flex w-full justify-center">
        <CircularProgress
          variant="soft"
          determinate
          value={progressLevel}
          sx={{
            "--CircularProgress-size": "92px",
            "--CircularProgress-trackColor": trackColor,
            "--CircularProgress-progressColor": progressColor,
            "--CircularProgress-trackThickness": "6px",
            "--CircularProgress-progressThickness": "8px",
          }}
        >
          <p className="font-poppins text-[12px] font-normal text-white md:text-sm">
            {progressLevel} %
          </p>
        </CircularProgress>
      </div>
      <div className="mt-8 w-full text-white">
        <p className="font-poppins text-[12px] font-normal md:text-sm">
          {subject}
        </p>
        <p className="mt-1 font-poppins text-[8px] font-normal md:text-[10px]">
          {description}
        </p>
      </div>
    </div>
  );
};
