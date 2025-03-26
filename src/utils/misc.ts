// import { Questions } from "./constants/constants";
import { format, parseISO } from "date-fns";
import { QuizHistoryType, PerformanceCounts } from "./validators";

// Function to randomize the array of objects
// export function randomizeArray(array: Questions) {
//   return array.sort(() => Math.random() - 0.5);
// }

export function convertFromISOString(time: string) {
  if (typeof time !== "string") throw new Error("Time must be a string");

  const formattedDate = format(parseISO(time), "dd.MM.yyyy");
  return formattedDate;
}

export const calculatePerformance = (
  quizzes: QuizHistoryType[],
): PerformanceCounts => {
  return quizzes.reduce(
    (acc, quiz) => {
      if (quiz.scorePercentage >= 50) {
        acc.passed += 1;
      } else if (quiz.scorePercentage >= 20) {
        acc.fairPerformance += 1;
      } else {
        acc.failed += 1;
      }
      return acc;
    },
    { passed: 0, failed: 0, fairPerformance: 0 },
  );
};
