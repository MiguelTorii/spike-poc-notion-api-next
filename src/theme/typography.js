import { white } from "./colors";

/* eslint-disable import/no-anonymous-default-export */
export const fontFamily = [
  "Space Grotesk",
  "Helvetica",
  "Arial",
  "sans-serif",
].join();

export default {
  fontFamily,
  useNextVariants: true,
  h1: {
    fontFamily,
  },
  h2: {
    fontFamily,
  },
  h3: {
    fontFamily,
  },
  h4: {
    fontFamily,
  },
  h5: {
    fontFamily,
  },
  h6: {
    fontFamily,
  },
  subtitle1: {
    fontFamily,
    fontSize: 15,
    fontWeight: 700,
    lineHheight: "20px",
    color: white,
  },
  subtitle2: {
    fontFamily,
  },
  body1: {
    fontFamily,
    fontSize: 13,
    fontWeight: 400,
    lineHheight: "20px",
    letterSpacing: "0.01em",
  },
  body2: {
    fontFamily,
  },

  button: {
    fontFamily,
  },
  caption: {
    fontFamily,
  },
  overline: {
    fontFamily,
  },
};
