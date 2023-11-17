"use client";

import { MotionBox } from "@/components/motions/Motion";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  easeIn,
  easeInOut,
  easeOut,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function FirstMovement() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const op = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.12, 0.12, 0.26],
    [1, 1.8, 1.8, 2.3]
  );
  const x = useTransform(
    scrollYProgress,
    [0, 0.12, 0.12, 0.26, 0.26, 0.56],
    ["0px", "-450px", "-450px", "-390px", "-390px", "-550px"],
    { ease: easeOut }
  );
  const firstLeft = useTransform(
    scrollYProgress,
    [0.26, 0.41, 0.56],
    ["0px", "-40px", "-80px"],
    { ease: easeIn }
  );
  const blueScale = useTransform(scrollYProgress, [0.27, 0.41], [0, 1]);
  const falScale = useTransform(scrollYProgress, [0.3, 0.41], [0, 1]);
  const lastX = useTransform(scrollYProgress, [0.41, 0.56], ["0px", "-40px"], {
    ease: easeIn,
  });
  const orgScale = useTransform(scrollYProgress, [0.41, 0.56], [0, 1]);
  const belScale = useTransform(scrollYProgress, [0.44, 0.56], [0, 1]);
  return (
    <>
      <MotionBox
        ref={targetRef}
        bgImage="/images/figmaV.png"
        pos="fixed"
        w="1175px"
        h="660px"
        minH="660px"
        bgRepeat="no-repeat"
        bgSize="cover"
        zIndex="20"
        top="700px"
        mb="-700px"
        style={{ scale, x }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.4, 1], scale: 1 }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 0.8,
          ease: easeInOut,
        }}
      >
        <MotionBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ x: firstLeft }}
          pos="absolute"
          w="32px"
          h="32px"
          bg="#d7862f"
          p="0px"
          borderRadius="50px"
          right="260px"
          top="44px"
          zIndex="20"
        >
          <Box
            w="28px"
            h="28px"
            bgImage="/images/profilepicmine.jpg"
            borderRadius="50px"
            bgSize="contain"
          />
           {/* <Flex
            pos="absolute"
            justifyContent="center"
            alignItems="center"
            h="10px"
            bg="#d7862f"
            p="1px"
            borderRadius="1px"
            bottom="-2px"
          >
            <Text color="white" fontSize="8px" lineHeight="0">
              DEV
            </Text>
          </Flex> */}
        </MotionBox>
        <MotionBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ scale: blueScale, x: lastX }}
          pos="absolute"
          w="32px"
          h="32px"
          bg="#6988f8"
          p="0px"
          borderRadius="50px"
          right="260px"
          top="44px"
          zIndex="10"
        >
          <MotionBox
            w="28px"
            h="28px"
            bgImage="/images/fals.png"
            borderRadius="50px"
            bgSize="contain"
            style={{ scale: falScale }}
          />
          {/* <Flex
            pos="absolute"
            justifyContent="center"
            alignItems="center"
            h="10px"
            bg="#6988f8"
            p="1px"
            borderRadius="1px"
            bottom="-2px"
          >
            <Text color="white" fontSize="8px" lineHeight="0">
              ART
            </Text>
          </Flex> */}
        </MotionBox>
        <MotionBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ scale: orgScale }}
          pos="absolute"
          w="32px"
          h="32px"
          bg="#d7862f"
          p="0px"
          borderRadius="50px"
          right="260px"
          top="44px"
          zIndex="0"
        >
          <MotionBox
            w="28px"
            h="28px"
            bgImage="/images/bass.png"
            borderRadius="50px"
            bgSize="contain"
            style={{ scale: belScale }}
          />
        </MotionBox>
      </MotionBox>
    </>
  );
}
