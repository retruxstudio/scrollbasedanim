"use client";
import MouseBg from "@/components/MouseBg";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MotionBox } from "@/components/motions/Motion";
import FirstMovement from "./Figma/FirstMovement";
import Hero from "./Hero";
import Lenis from "@studio-freight/lenis";
import Gallery from "../Works";

export default function FirstPage() {

  const [start, setStart] = useState<boolean>(false)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      infinite: true,
    });
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  });

  return (
    <>
      <Box bg="none">
        <Box pos="relative" zIndex="1">
          <Gallery start={start} setStart={setStart}/>
        </Box>
        <Box pos="relative" zIndex="2" h="100vh">
          <Gallery start={start} setStart={setStart}/>
        </Box>
      </Box>
    </>
  );
}
