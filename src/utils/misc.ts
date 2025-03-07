import { Questions } from "./constants/constants";

// Function to randomize the array of objects
export function randomizeArray(array: Questions) {
  return array.sort(() => Math.random() - 0.5);
}
