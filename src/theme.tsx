import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import "@fontsource/source-sans-pro";

// Just a base Chakra UI Theme
const fonts = { heading: "Source Sans Pro", body: "Source Sans Pro" };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
    red: "#ef4941",
  },
  fonts,
  breakpoints,
});

export default theme;
