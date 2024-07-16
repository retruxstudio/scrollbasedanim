"use client";
import MouseBg from "@/components/MouseBg";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { MotionBox } from "@/components/motions/Motion";
import FirstMovement from "./Figma/FirstMovement";
import Hero from "./Hero";
import Lenis from "@studio-freight/lenis";
import Gallery from "../Works";

export default function FirstPage() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5, smoothWheel: true });
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  });

  return (
    <>
      {/* <MotionBox
        w="100px"
        bg="#6988F8"
        h="42px"
        pos="fixed"
        top="0px"
        left="0px"
        zIndex="999"
        style={{ width: "100%" }}
      ></MotionBox>
      <Flex flexDir="column" alignItems="center" w="100%">
        <MouseBg />
        <Hero />
        <FirstMovement />
        <Box h="4000px"></Box>
      </Flex> */}
      <Box w="100vw" h="3000px">
        <Gallery />
      </Box>
    </>
  );
}
