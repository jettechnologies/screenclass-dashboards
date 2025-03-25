import { Questions } from "./constants/constants";
import { format, parseISO } from "date-fns";

// Function to randomize the array of objects
export function randomizeArray(array: Questions) {
  return array.sort(() => Math.random() - 0.5);
}

export function convertFromISOString(time: string) {
  if (typeof time !== "string") throw new Error("Time must be a string");

  const formattedDate = format(parseISO(time), "dd.MM.yyyy");
  return formattedDate;
}
