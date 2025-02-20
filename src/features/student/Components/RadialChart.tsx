"use client";
import React, { useEffect, useRef } from "react";

interface RadialChartProps {
  value1: number;
  value2: number;
  value3: number;
}

const RadialChart: React.FC<RadialChartProps> = ({
  value1,
  value2,
  value3,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;
    const lineWidth = 10;
    // const labelFontSize = 16;
    // const totalFontSize = 20;
    // const label = "Total";

    const total = value1 + value2 + value3;
    const startAngles: number[] = [0];
    startAngles.push(startAngles[0] + (value1 / total) * 2 * Math.PI);
    startAngles.push(startAngles[1] + (value2 / total) * 2 * Math.PI);

    const colors: string[] = ["#268B8D", "#EC8694", "#D9D9D9"];

    const drawSegment = (
      startAngle: number,
      endAngle: number,
      color: string,
    ) => {
      context.beginPath();
      context.strokeStyle = color;
      context.lineWidth = lineWidth;
      context.arc(centerX, centerY, radius, startAngle, endAngle);
      context.shadowBlur = 2;
      context.shadowColor = "rgba(0, 0, 0, 0.3)";
      context.shadowOffsetX = 0;
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
    //   const totalText = total.toString();
    //   context.font = `bold ${totalFontSize}px Arial`;
    //   context.fillStyle = "black";
    //   context.textAlign = "center";
    //   context.fillText(totalText, centerX, centerY + labelFontSize + 5);
    // };

    const drawRadialChart = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawHollowCircle();

      drawSegment(startAngles[0], startAngles[1], colors[0]);
      drawSegment(startAngles[1], startAngles[2], colors[1]);
      drawSegment(startAngles[2], 2 * Math.PI, colors[2]);

      //   drawLabel();
      //   drawTotalValue();
    };

    drawRadialChart();
  }, [value1, value2, value3]);

  return <canvas ref={canvasRef} width={100} height={100} />;
};

export default RadialChart;
