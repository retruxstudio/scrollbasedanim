"use client";
import MouseBg from "@/components/MouseBg";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MotionBox } from "@/components/motions/Motion";
import FirstMovement from "./Figma/FirstMovement";
import Hero from "./Hero";
import Lenis from "@studio-freight/lenis";
import Gallery from "../Works";

export default function FirstPage() {
  const [start, setStart] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(false);
  const [remove, setRemove] = useState<boolean>(false);

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

  const textAnimVar1 = {
    show: {
      y: 0,
      x: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        ease: [0.22, 0, 0.12, 0.98],
        duration: "0.3",
        rotate: { delay: 0.1, duration: 0.2 },
      },
    },
    hide: {
      y: "48px",
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        ease: [0.22, 0, 0.12, 0.98],
        duration: "0.3",
        // delay: 0.18,
      },
    },
  };

  const textAnimVar2 = {
    show: {
      y: 0,
      x: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        ease: [0.22, 0, 0.12, 0.98],
        duration: "0.3",
        delay: 0.03,
        rotate: { delay: 0.12, duration: 0.2 },
      },
    },
    hide: {
      y: "48px",
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        ease: [0.22, 0, 0.12, 0.98],
        duration: "0.3",
        // delay: 0.16,
      },
    },
  };

  const textAnimVar3 = {
    show: {
      y: 0,
      x: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        ease: [0.22, 0, 0.12, 0.98],
        duration: "0.3",
        delay: 0.07,
        rotate: { delay: 0.14, duration: 0.2 },
      },
    },
    hide: {
      y: "48px",
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        ease: [0.22, 0, 0.12, 0.98],
        duration: "0.3",
        // delay: 0.14,
      },
    },
  };

  const textAnimVar4 = {
    show: {
      y: 0,
      x: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        ease: [0.22, 0, 0.12, 0.98],
        duration: "0.3",
        delay: 0.11,
        rotate: { delay: 0.16, duration: 0.2 },
      },
    },
    hide: {
      y: "48px",
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        ease: [0.22, 0, 0.12, 0.98],
        duration: "0.3",
        // delay: 0.12,
      },
    },
  };

  const textAnimVar5 = {
    show: {
      y: 0,
      x: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        ease: [0.22, 0, 0.12, 0.98],
        duration: "0.3",
        delay: 0.15,
        rotate: { delay: 0.18, duration: 0.2 },
      },
    },
    hide: {
      y: "48px",
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        ease: [0.22, 0, 0.12, 0.98],
        duration: "0.3",
        // delay: 0.1,
      },
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 2500);
  }, []);

  useEffect(() => {
    if (hide === true) {
      setTimeout(() => {
        setRemove(true);
      }, 1200);
    }
  }, [hide]);

  return (
    <>
      <Box bg="none">
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          w="100vw"
          h="100px"
          pos="fixed"
          top="calc(50vh - 50px)"
          left="0"
          zIndex="20"
          display={remove ? "none" : "flex"}
          // bg="#141414"
        >
          <Flex justifyContent="end" alignItems="end" overflow="hidden">
            <Box px="4px">
              <MotionBox
                variants={textAnimVar1}
                animate={hide ? "hide" : "show"}
                initial={{ y: "48px", x: 0, opacity: 1, rotate: 4 }}
                transformOrigin={"top left"}
              >
                <Text
                  fontSize="44px"
                  color="#fff"
                  variant="poppins"
                  lineHeight="44px"
                  fontWeight="500"
                  letterSpacing={-1.5}
                >
                  EXPERIENCE
                </Text>
              </MotionBox>
            </Box>
            <Box px="4px">
              <MotionBox
                variants={textAnimVar2}
                animate={hide ? "hide" : "show"}
                initial={{ y: "48px", opacity: 1, x: 0, rotate: 4 }}
                transformOrigin="top left"
              >
                <Text
                  fontSize="44px"
                  color="#fff"
                  variant="poppins"
                  lineHeight="44px"
                  fontWeight="500"
                  letterSpacing={-1.5}
                >
                  THE
                </Text>
              </MotionBox>
            </Box>
            <Box px="4px">
              <MotionBox
                variants={textAnimVar3}
                animate={hide ? "hide" : "show"}
                initial={{ y: "48px", x: 0, opacity: 1, rotate: 4 }}
                transformOrigin="top left"
              >
                <Text
                  fontSize="44px"
                  color="#fff"
                  variant="poppins"
                  lineHeight="44px"
                  fontWeight="500"
                  letterSpacing={-1.5}
                >
                  MAGIC
                </Text>
              </MotionBox>
            </Box>
            <Box px="4px">
              <MotionBox
                variants={textAnimVar4}
                animate={hide ? "hide" : "show"}
                initial={{ y: "48px", x: 0, opacity: 1, rotate: 4 }}
                transformOrigin="top left"
              >
                <Text
                  fontSize="44px"
                  color="#fff"
                  variant="poppins"
                  lineHeight="44px"
                  fontWeight="500"
                  letterSpacing={-1.5}
                >
                  OF
                </Text>
              </MotionBox>
            </Box>
            <Box px="4px">
              <MotionBox
                variants={textAnimVar5}
                animate={hide ? "hide" : "show"}
                initial={{ y: "48px", opacity: 1, rotate: 4 }}
                ml="-10px"
                transformOrigin={"top left"}
              >
                <Text
                  fontSize="42px"
                  color="#fff"
                  lineHeight="42px"
                  variant="merri"
                  fontWeight="300"
                  letterSpacing={-1.2}
                  ml="12px"
                  // sx={{ "-webkit-text-stroke": "0.5px #000" }}
                >
                  MOTION
                </Text>
              </MotionBox>
            </Box>
          </Flex>
        </Flex>
        <Box pos="relative" zIndex="1">
          <Gallery start={start} setStart={setStart} />
        </Box>
        <Box pos="relative" zIndex="2" h="100vh">
          <Gallery start={start} setStart={setStart} />
        </Box>
      </Box>
    </>
  );
}
