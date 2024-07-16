"use client";
// import CardNoScale from "@/components/Card";
import CardNoScale from "@/components/CardNoScale";
import { MotionBox } from "@/components/motions/Motion";
// import ColorContext from "@/utils/ColorContext";
import { Box, Flex, Text } from "@chakra-ui/react";
import { delay, easeIn, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
// 8f3f34
// d8ae02
export default function Gallery() {
  //   const { mainColor, opacity } = useContext(ColorContext);
  const opMv = useMotionValue(0);
  const opLilF = useTransform(opMv, [0, 1], [0, 0.9]);
  const opacityT = useSpring(opLilF, { damping: 15 });

  const [start, setStart] = useState<boolean>(false);

  const firstElement = {
    start: {
      left: "calc(90vw - 160px)",
      top: "calc(110vh - 200px)",

      transition: { ease: "easeOut", duration: 0.4, delay: 0.1 },
    },
    def: {
      left: "calc(60vw - 160px)",
      top: "calc(50vh - 200px)",

      transition: { ease: "easeOut", duration: 0.4 },
    },
  };

  const secondElement = {
    start: {
      left: "calc(20vw - 160px)",
      top: "calc(90vh - 200px)",

      transition: { ease: "easeOut", duration: 0.4, delay: 0.2 },
    },
    def: {
      left: "calc(50vw - 160px)",
      top: "calc(40vh - 200px)",

      transition: { ease: "easeOut", duration: 0.4 },
    },
  };

  const thirdElement = {
    start: {
      left: "calc(70vw - 160px)",
      top: "calc(120vh - 200px)",

      transition: { ease: "easeOut", duration: 0.4, delay: 0.15 },
    },
    def: {
      left: "calc(58vw - 160px)",
      top: "calc(60vh - 200px)",

      transition: { ease: "easeOut", duration: 0.4 },
    },
  };

  const fourthElement = {
    start: {
      left: "calc(20vw - 160px)",
      top: "calc(180vh - 200px)",

      transition: { ease: "easeOut", duration: 0.4, delay: 0.08 },
    },
    def: {
      left: "calc(42vw - 160px)",
      top: "calc(55vh - 200px)",

      transition: { ease: "easeOut", duration: 0.4 },
    },
  };

  const fifthElement = {
    start: {
      left: "calc(50vw - 160px)",
      top: "calc(180vh - 200px)",
      transition: { ease: "easeOut", duration: 0.4 },
    },
    def: {
      left: "calc(42vw - 160px)",
      top: "calc(55vh - 200px)",
      transition: { ease: "easeOut", duration: 0.4 },
    },
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       opMv.set(opacity);
  //     }, 120);
  //   }, [opacity]);

  return (
    <>
      <MotionBox
        w="100vw"
        h="100vh"
        pos="fixed"
        zIndex="1"

        // bg="blue"
        // style={{ opacity: opacityT }}
        // bg={mainColor}
      ></MotionBox>
      <Box
        className="cards_container"
        w="100%"
        h="100%"
        px="220px"
        // pt="800px"
        overflow="hidden"
        zIndex="2"
      >
        <Flex w="100%" justifyContent="start">
          <MotionBox
            onClick={() => {
              setStart(!start);
            }}
            zIndex="10"
            pos="absolute"
            top={"calc(50vh - 200px)"}
            left={"calc(60vw - 160px)"}
            variants={firstElement}
            animate={start ? "start" : "def"}
          >
            <CardNoScale
              height={330}
              width={290}
              mainColor="#f4ab28"
              pos="relative"
            >
              <Box
                w="100%"
                h="100%"
                bgSize="cover"
                bgPosition="center"
                // bgImage="/images/profilepicmine.jpg"
                bgColor="yellow"
              ></Box>
            </CardNoScale>
          </MotionBox>
          <MotionBox
            zIndex="10"
            pos="absolute"
            top={"calc(40vh - 200px)"}
            left={"calc(50vw - 160px)"}
            variants={secondElement}
            animate={start ? "start" : "def"}
          >
            <CardNoScale
              height={330}
              width={250}
              mainColor="#f4ab28"
              pos="relative"
            >
              <Box
                w="100%"
                h="100%"
                bgSize="cover"
                bgPosition="center"
                bgImage="/images/profilepicmine.jpg"
                bgColor="white"
              ></Box>
            </CardNoScale>
          </MotionBox>
          <MotionBox
            zIndex="12"
            pos="absolute"
            top={"calc(60vh - 200px)"}
            left={"calc(58vw - 160px)"}
            variants={thirdElement}
            animate={start ? "start" : "def"}
          >
            <CardNoScale
              height={350}
              width={270}
              mainColor="#f4ab28"
              pos="relative"
            >
              <Box
                w="100%"
                h="100%"
                bgSize="cover"
                bgPosition="center"
                // bgImage="/images/profilepicmine.jpg"
                bgColor="green"
              ></Box>
            </CardNoScale>
          </MotionBox>
          <MotionBox
            zIndex="10"
            pos="absolute"
            top={"calc(55vh - 200px)"}
            left={"calc(42vw - 160px)"}
            variants={fourthElement}
            animate={start ? "start" : "def"}
          >
            <CardNoScale
              height={340}
              width={240}
              mainColor="#f4ab28"
              pos="relative"
            >
              <Box
                w="100%"
                h="100%"
                bgSize="cover"
                bgPosition="center"
                // bgImage="/images/profilepicmine.jpg"
                bgColor="red"
              ></Box>
            </CardNoScale>
          </MotionBox>
          <MotionBox
            zIndex="11"
            pos="absolute"
            top={"calc(70vh - 200px)"}
            left={"calc(50vw - 160px)"}
          >
            <CardNoScale
              height={380}
              width={300}
              mainColor="#f4ab28"
              pos="relative"
            >
              <Box
                w="100%"
                h="100%"
                bgSize="cover"
                bgPosition="center"
                // bgImage="/images/profilepicmine.jpg"
                bgColor="white"
              ></Box>
            </CardNoScale>
          </MotionBox>
        </Flex>
      </Box>
    </>
  );
}
