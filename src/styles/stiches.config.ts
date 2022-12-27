import { createStitches } from "@stitches/react";

const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      danger: "#E25858",

      gray100: "#F2F2F2",
      gray200: "#D9D9D9",
      gray300: "#808080",
      gray400: "#333333",
      gray500: "#262626",
      gray600: "#1A1A1A",
      gray700: "#0D0D0D",

      purple: "#8284FA",
      purpleDark: "#5E60CE",

      blue: "#4EA8DE",
      blueDark: "#1E6F9F ",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
});

export {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
};
