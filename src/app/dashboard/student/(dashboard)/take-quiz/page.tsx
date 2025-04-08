"use client";

import { Quiz } from "@/features/student/take-quiz";
import React from "react";
import { extendTheme, CssVarsProvider } from "@mui/joy/styles";
import { FaCaretDown } from "react-icons/fa";

const theme = extendTheme({
  components: {
    JoySelect: {
      defaultProps: {
        indicator: <FaCaretDown color="#000000" fontSize={12} />,
      },
    },
  },
});
export default function page() {
  return (
    <>
      <CssVarsProvider theme={theme}>
        <Quiz />
      </CssVarsProvider>
    </>
  );
}
