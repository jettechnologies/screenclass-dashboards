"use client";

import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { PerformanceCounts } from "@/utils/validators";
import { QUIZ_PIE_COLORS } from "@/utils";

interface QuizPieChartProps {
  data: PerformanceCounts;
  width?: number;
  height?: number;
}

export const QuizPieChart = ({ data, width, height }: QuizPieChartProps) => {
  const chartData = [
    { name: "Passed", value: data.passed },
    { name: "Failed", value: data.failed },
    { name: "Fair Performance", value: data.fairPerformance },
  ];

  return (
    <ResponsiveContainer width={width || "100%"} height={height || 300}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          dataKey="value"
          paddingAngle={5}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={QUIZ_PIE_COLORS[index]} />
          ))}
        </Pie>
        <Legend
          verticalAlign="bottom"
          height={36}
          formatter={(value) => (
            <span style={{ color: "var(--gray-700)", fontWeight: "bold" }}>
              {value}
            </span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
