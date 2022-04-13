import { createTheme } from "@mui/material/styles";
import typography from "./typography";
import palette from "./palette";

// Create a theme instance.
const theme = createTheme({
  palette,
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1086,
      xl: 1536,
    },
  },
});

export default theme;
