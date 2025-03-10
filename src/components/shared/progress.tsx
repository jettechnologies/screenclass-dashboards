import { LinearProgress } from "@mui/joy";

interface ProgressProps {
  progress: number;
  progressColor?: string;
}

export const Progress = ({ progress, progressColor }: ProgressProps) => {
  console.log(progressColor);
  return (
    <LinearProgress
      determinate
      variant="solid"
      color="primary"
      size="sm"
      thickness={16}
      value={progress}
      sx={{
        "--LinearProgress-radius": "16px",
        "--LinearProgress-progressThickness": "16px",
        // background: "linear-gradient(to right, #B09FFF, #8D79F6)",
        // "& .MuiLinearProgress-bar": {
        //   background: "inherit",
        // },
        boxShadow: "sm",
        borderColor: "neutral.500",
        position: "relative",
        overflow: "visible",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: `calc(${progress}% - 24px)`,
          top: "50%",
          transform: "translateY(-50%)",
          width: "6px",
          height: "6px",
          backgroundColor: "#222",
          borderRadius: "50%",
        }}
      />
    </LinearProgress>
  );
};
