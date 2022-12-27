import { globalCss } from "./stiches.config";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    fontFamily: "Inter, sans-serif;",
  },

  svg: {
    width: "100%",
    height: "100%",
  },

  button: {
    cursor: "pointer",

    "&:disabled": {
      cursor: "not-allowed",
    },
  },
});
