"use client";
import React, { useEffect, useRef } from "react";

type RadialChartProps = {
  value1: number;
  value2: number;
};
const RadialChart3: React.FC<RadialChartProps> = ({ value1, value2 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const centerX = canvas.width / 3;
    const centerY = canvas.height / 3;
    const radius = Math.min(centerX, centerY) - 10;
    const lineWidth = 20;
    // const labelFontSize = 14;
    // const totalFontSize = 24;
    // const label = "scores";

    const drawSegment = (
      startAngle: number,
      endAngle: number,
      color: string,
    ) => {
      context.beginPath();
      context.strokeStyle = color;
      context.lineWidth = lineWidth;
      // context.lineCap = "round";
      context.arc(centerX, centerY, radius, startAngle, endAngle);
      // context.shadowBlur = 2;
      // context.shadowColor = "rgba(0, 0, 0, 0.3)";
      context.shadowOffsetX = 1;
      context.stroke();
      context.shadowBlur = 0;
    };

    const drawHollowCircle = () => {
      context.beginPath();
      context.arc(centerX, centerY, radius - lineWidth / 2, 0, 2 * Math.PI);
      context.strokeStyle = "rgba(255, 255, 255, 0)";
      context.lineWidth = lineWidth;
      context.shadowBlur = 5;
      context.shadowColor = "rgba(0, 0, 0, 0.3)";
      context.shadowOffsetX = 2;
      context.stroke();
      context.shadowBlur = 0;
    };

    // const drawLabel = () => {
    //   context.font = `${labelFontSize}px Arial`;
    //   context.fillStyle = "black";
    //   context.textAlign = "center";
    //   context.fillText(label, centerX, centerY - 15);
    // };

    // const drawTotalValue = () => {
    //   //   const total = value1 + value2;
    //   context.font = `bold ${totalFontSize}px Arial`;
    //   context.fillStyle = "black";
    //   context.textAlign = "center";
    //   context.fillText("2/3", centerX, centerY + labelFontSize + 5);
    // };

    const drawRadialChart = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawHollowCircle();
      const percentage = value1 / (value1 + value2);
      drawSegment(0, percentage * 2 * Math.PI, "#E980F2");
      drawSegment(percentage * 2 * Math.PI, 2 * Math.PI, "#1FDCDC");
      // drawLabel();
      // drawTotalValue();
    };

    drawRadialChart();
  }, [value1, value2]);

  return <canvas ref={canvasRef} width={200} height={200} />;
};

export default RadialChart3;
