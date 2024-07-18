import { ComponentStyleConfig, defineStyle } from "@chakra-ui/react";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import { Lora } from "next/font/google";
import { Merriweather } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

const merri = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  style: ["normal"],
});

const Text: ComponentStyleConfig = {
  baseStyle: defineStyle({
    "--color": "text.dark",
    color: "var(--color)",
    _dark: {
      "--color": "text.light",
    },
  }),

  variants: {
    inter: {
      fontFamily: inter.style.fontFamily,
    },
    lora: {
      fontFamily: lora.style.fontFamily,
    },
    poppins: {
      fontFamily: poppins.style.fontFamily,
    },
    merri: {
      fontFamily: merri.style.fontFamily,
    },
  },
};

export default Text;
