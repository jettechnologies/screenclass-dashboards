// import { LinearProgress } from "@mui/joy";

// interface ProgressProps {
//   progress: number;
//   progressColor?: string;
// }

// export const Progress = ({ progress, progressColor }: ProgressProps) => {
//   console.log(progressColor);
//   return (
//     <LinearProgress
//       determinate
//       variant="solid"
//       color="primary"
//       size="sm"
//       thickness={16}
//       value={progress}
//       sx={{
//         "--LinearProgress-radius": "16px",
//         "--LinearProgress-progressThickness": "16px",
//         // background: "linear-gradient(to right, #B09FFF, #8D79F6)",
//         // "& .MuiLinearProgress-bar": {
//         //   background: "inherit",
//         // },
//         boxShadow: "sm",
//         borderColor: "neutral.500",
//         position: "relative",
//         overflow: "visible",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           left: `calc(${progress}% - 24px)`,
//           top: "50%",
//           transform: "translateY(-50%)",
//           width: "6px",
//           height: "6px",
//           backgroundColor: "#222",
//           borderRadius: "50%",
//         }}
//       />
//     </LinearProgress>
//   );
// };

import React from "react";

interface ProgressProps {
  progress: number;
  progressColor?: string;
  height?: string;
}

export const Progress = ({
  progress,
  progressColor = "bg-blue-600",
  height,
}: ProgressProps) => {
  // Check if the color is a gradient (contains "linear-gradient") or a raw color code (starts with # or rgb)
  const isGradient =
    progressColor.includes("linear-gradient") ||
    progressColor.startsWith("#") ||
    progressColor.startsWith("rgb");

  return (
    <div
      className={`relative w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-[${height || "17px"}] bg-[${!isGradient ? progressColor : ""}]`}
    >
      <div
        className="h-full rounded-full p-0.5 text-center text-xs font-medium leading-none text-blue-100 transition-all duration-300 ease-in-out"
        style={{
          width: `${progress}%`,
          background: isGradient ? progressColor : undefined,
        }}
      />
      <div
        className="absolute top-1/2 h-2 w-2 rounded-full bg-black"
        style={{
          left: `calc(${progress}% - 24px)`,
          transform: "translateY(-50%)",
        }}
      />
    </div>
  );
};
