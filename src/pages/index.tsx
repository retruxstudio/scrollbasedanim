"use client";
import { useFollowPointer } from "@/utils/GetMouse";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import Hero from "./Home/Hero";
import FirstMovement from "./Home/Figma/FirstMovement";
import MouseBg from "@/components/MouseBg";
// import { ScrollContextProvider } from "@/utils/ScrollContext";
import FirstPage from "./Home";
// import { YProgressProvider } from "@/utils/YProgressProvider";
import Lenis from "@studio-freight/lenis";
// import ScrollContextProvider from "@/utils/ScrollContext";

export default function Home() {
  return (
    <>
      <FirstPage />
    </>
  );
}
