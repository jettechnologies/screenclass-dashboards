"use client";

import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { QuizData, UserAnswer, Question } from "@/utils/validators";
import type { StateCreator } from "zustand";

// Quiz Slice Types and Creator
export type QuizState = {
  quizData: QuizData | null;
  userAnswers: UserAnswer[];
};

export type QuizActionState = {
  setQuizData: (data: QuizData) => void;
  addUserAnswer: (answer: UserAnswer) => void;
  updateUserAnswer: (questionId: string, selectedOptionId: string) => void;
  resetQuiz: () => void;
  getQuizById: (quizId: string) => {
    quiz: Question | null;
    userAnswer: UserAnswer | null;
  };
};

export type QuizSlice = QuizState & { actions: QuizActionState };

const saveStateToSessionStorage = (state: QuizState) => {
  sessionStorage.setItem("quiz-storage", JSON.stringify(state));
};

const loadStateFromSessionStorage = (): QuizState | null => {
  const item = sessionStorage.getItem("quiz-storage");
  return item ? JSON.parse(item) : null;
};

export const createQuizSlice: StateCreator<
  QuizSlice,
  [["zustand/immer", never]],
  [],
  QuizSlice
> = (set, get) => {
  // Load initial state from sessionStorage
  const initialState = loadStateFromSessionStorage() || {
    quizData: null,
    userAnswers: [],
  };

  return {
    ...initialState,
    actions: {
      setQuizData: (data) => {
        set((state) => {
          const newState = { ...state, quizData: data };
          saveStateToSessionStorage(newState);
          return newState;
        });
      },
      addUserAnswer: (answer) => {
        set((state) => {
          const newState = {
            ...state,
            userAnswers: [...state.userAnswers, answer],
          };
          saveStateToSessionStorage(newState);
          return newState;
        });
      },
      updateUserAnswer: (questionId, selectedOptionId) => {
        set((state) => {
          const newState = {
            ...state,
            userAnswers: state.userAnswers.map((answer) =>
              answer.questionId === questionId
                ? { ...answer, selectedOptionId }
                : answer,
            ),
          };
          console.log(newState);
          saveStateToSessionStorage(newState);
          return newState;
        });
      },
      resetQuiz: () => {
        set((state) => {
          const newState = { ...state, quizData: null, userAnswers: [] };
          sessionStorage.removeItem("quiz-storage");
          return newState;
        });
      },
      getQuizById: (quizId) => {
        const { quizData, userAnswers } = get();

        // Find the quiz by ID
        const quiz =
          quizData?.questions?.find((q) => q.questionId === quizId) || null;

        // Find the user answer for the quiz
        const userAnswer =
          userAnswers.find((answer) => answer.questionId === quizId) || null;

        return { quiz, userAnswer };
      },
    },
  };
};

// Create the Quiz Store with Devtools and Immer Middleware
export const useQuizStore = create<QuizSlice>()(
  devtools(
    immer((...a) => ({
      ...createQuizSlice(...a),
    })),
    { name: "QuizStore" }, // Optional: Name for the store in DevTools
  ),
);

// Custom hook to access the store with shallow comparison
export const useQuizActions = () =>
  useQuizStore(useShallow((state) => state.actions));
export const useQuizState = () => useQuizStore(useShallow((state) => state));
