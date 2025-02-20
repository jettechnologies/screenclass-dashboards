import React from "react";

interface ProgressCircleProps {
  progress: number;
  tag: string;
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  progress,
  tag,
}) => {
  const radius = 40; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Full circle length
  const strokeDashoffset = circumference * (1 - progress / 100); // Dynamic offset

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Circle - Gradient Border */}
      <svg className="h-[250px] w-[250px]" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="rgba(129, 212, 254, 0.20)" // Background ring color
          strokeWidth="7"
          fill="transparent"
        />
        {/* Progress Arc - Starts from Top */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="url(#gradient)" // Gradient stroke
          strokeWidth="7"
          fill="transparent"
          strokeDasharray={circumference} // Total length
          strokeDashoffset={strokeDashoffset} // Dynamic fill based on progress
          strokeLinecap="round"
          transform="rotate(60 50 50)" // Rotates to start from top
        />
        {/* Define Gradient */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7AD3FF" />
            <stop offset="100%" stopColor="#024d81" />
          </linearGradient>
        </defs>
      </svg>

      <p className="text-[rgba(0, 0, 0, 0.64)] absolute text-center text-xs font-light capitalize leading-normal">
        {tag} <br />
        <span className="text-[rgba(0, 0, 0, 0.77)] text-[32px] font-bold">
          {progress}%
        </span>
      </p>
    </div>
  );
};
