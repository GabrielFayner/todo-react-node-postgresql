import { createStitches } from "@stitches/react";

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      background: "#eff2ff",
      surface: "#ffffff",
      primary: "#a879e6",
      primaryDark: "#8e5dd1",
      text: "#4b4f62",
      textLight: "#71758a",
      border: "#d9deef",
      danger: "#ea4d65",
      success: "#a879e6",
      shadow: "rgba(27, 31, 59, 0.12)",
    },
    radii: {
      md: "12px",
      lg: "18px",
      full: "999px",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      8: "32px",
    },
    fonts: {
      body: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    },
    fontSizes: {
      sm: "14px",
      md: "16px",
      lg: "20px",
      xl: "28px",
    },
  },
});

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  body: {
    fontFamily: "$body",
    backgroundColor: "$background",
    color: "$text",
  },
  button: {
    fontFamily: "$body",
  },
});
