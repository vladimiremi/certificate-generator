import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    text: "#0C0C0C",
    body: "#FFFFFF",
    secundary: "#1D2F3F",

    gray: {
      primary: "#060D18",
    },

    blue: {
      primary: "#09C4FF",
      secundary: "#1067EB",
      hoverOpacity: "0.3",
      cardOpacity: "0.05",
      alternativeHoverOpacity: "0.1",
      text: "#21406A",
    },
  },
  font: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "#0D1B27",
        color: "white",
      },

      "@media print": {
        "@page": {
          size: "29.7cm 21cm",
          margin: "0mm",
        },

        "body *": {
          visibility: "hidden",
        },
        "#printable, #printable *": {
          visibility: "visible",
        },
        "#printable": {
          position: "fixed",
          left: "0",
          top: "0",
        },
      },
    },
  },
});
