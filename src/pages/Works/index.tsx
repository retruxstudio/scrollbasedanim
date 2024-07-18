"use client";
// import Card from "@/components/Card";
import Card from "@/components/Card";
import { MotionBox } from "@/components/motions/Motion";
// import ColorContext from "@/utils/ColorContext";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  delay,
  easeIn,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from "react";
// 8f3f34
// d8ae02
export default function Gallery({start, setStart}: {start: boolean, setStart: Dispatch<SetStateAction<boolean>>}) {
  //   const { mainColor, opacity } = useContext(ColorContext);
  const opMv = useMotionValue(0);
  const opLilF = useTransform(opMv, [0, 1], [0, 0.9]);
  const opacityT = useSpring(opLilF, { damping: 15 });

  // const [start, setStart] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(false);
  // First movement
  const redEl = {
    start: {
      top: "-70vh",
      left: "12vw",
      scale: 1,
      transition: { ease: "easeInOut", duration: 0.3, delay: 0.2 },
    },
    def: {
      top: "2vh",
      left: "calc(50vw - 290px)",
      scale: 0.36,
      transition: { ease: "easeInOut", duration: 0.2, delay: 0.87 },
    },
    init: {
      scale: 0,
      top: "2vh",
      left: "calc(50vw - 290px)",
      transition: { ease: "easeInOut" },
    },
  };

  const yelEl = {
    start: {
      top: "-25vh",
      right: "24vw",
      scale: 1,
      transition: { ease: "easeInOut", duration: 0.3, delay: 0.25 }, 
    },
    def: {
      top: "26vh",
      right: "34vw",
      scale: 0.4,
      transition: { ease: "easeInOut", duration: 0.2, delay: 0.83 },
    },
    init: {
      scale: 0,
      top: "30vh",
      right: "30vw",
      transition: { ease: "easeInOut" },
    },
  };

  const blueEl = {
    start: {
      top: "36vh",
      right: "8vw",
      scale: 1,
      transition: { ease: "easeInOut", duration: 0.3, delay: 0.17 },
    },
    def: {
      top: "30vh",
      right: "36vw",
      scale: 0.4,
      transition: { ease: "easeInOut", duration: 0.2, delay: 0.86 },
    },
    init: {
      scale: 0,
      top: "32vh",
      right: "36vw",
      transition: { ease: "easeInOut" },
    },
  };

  
  // second movement

  const fifthElement = {
    start: {
      top: "130vh",
      left: "38vw",
      scale: 1,
     
      transition: { ease: "easeInOut", duration: 0.3, delay: .68 },
    },
    def: {
      scale: 0.46,
      top: "38vh",
      left: "40vw",
      transition: { ease: "easeInOut", duration: 0.3, delay: 0.88 },
    },
    init: {
      scale: 0,
      top: "38vh",
      left: "40vw",
      transition: { ease: "easeInOut" },
    },
  };

  const sixthElement = {
    start: {
      top: "140vh",
      left: "20vw",
      scale: 1,
      transition: { ease: "easeInOut", duration: 0.3 , delay: 0.8},
    },
    def: {
      top: "20vh",
      left: "33vw",
      scale: 0.36,
      transition: { ease: "easeInOut", duration: 0.2, delay: 0.82 },
    },
    init: {
      scale: 0,
      top: "20vh",
      left: "33vw",
      transition: { ease: "easeInOut" },
    },
  };

  const seventhElement = {
    start: {
      top: "150vh",
      right: "24vw",
      scale: 1,
      transition: { ease: "easeInOut", duration: 0.3, delay: 0.78 },
    },
    def: {
      top: "26vh",
      right: "34vw",
      scale: 0.4,
      transition: { ease: "easeInOut", duration: 0.2, delay: 0.89 },
    },
    init: {
      scale: 0,
      top: "30vh",
      right: "30vw",
      transition: { ease: "easeInOut" },
    },
  };

  const eightElement = {
    start: {
      top: "140vh",
      right: "8vw",
      scale: 1,
      transition: { ease: "easeInOut", duration: 0.3, delay: .72 },
    },
    def: {
      top: "36vh",
      right: "34vw",
      scale: 0.4,
      transition: { ease: "easeInOut", duration: 0.2, delay: 0.94 },
    },
    init: {
      scale: 0,
      top: "32vh",
      right: "36vw",
      transition: { ease: "easeInOut" },
    },
  };

  const firstElement = {
    start: {
      top: "120vh",
      left: "18vw",
      scale: 1,
      transition: { ease: "easeInOut", duration: 0.3, delay: 0.75 },
    },
    def: {
      scale: 0.4,
      top: "18vh",
      left: "36vw",
      transition: { ease: "easeInOut", duration: 0.3, delay: 0.9 },
    },
    init: {
      scale: 0,
      top: "20vh",
      left: "35vw",
      transition: { ease: "easeInOut" },
    },
  };

  useEffect(()=> {{
    setTimeout(()=> {
      setStart(true);
    }, 2600)
  }}, [])

  useEffect(()=> {
    if (start === true) {
      setTimeout(() => {
        setHide(true);
      }, 1200);
    }
  }, [start])

  return (
    <>
      <Box
        className="cards_container"
        w="100%"
        h="100%"
        zIndex="2"
        bg="#000"
      >
        <Flex
          pos="relative"
          py="30px"
          w="100%"
          justifyContent="space-between"
          zIndex="11"
          minH="200vh"
        >
          <MotionBox
            zIndex="11"
            pos="absolute"
            onClick={() => {
              setStart(!start);
            }}
            variants={redEl}
            animate={start ? "start" : "def"}
            initial={"init"}
          >
            <Card height={720} width={580} mainColor="#f4ab28" pos="relative">
              <Box
                w="100%"
                h="100%"
                bgSize="cover"
                bgPosition="center"
                // bgColor="red"
                bgImage="/images/bloodrose.jpg"
              ></Box>
            </Card>
          </MotionBox>
          <MotionBox
            zIndex="10"
            pos="absolute"
            onClick={() => {
              setStart(!start);
            }}
            variants={yelEl}
            animate={start ? "start" : "def"}
            initial={"init"}
          >
            <Card height={320} width={460}  mainColor="#f4ab28" pos="relative">
              <Box
                w="100%"
                h="100%"
                bgSize="cover"
                bgPosition="center"
                // bgColor="yellow"
                bgImage="/images/sleephay.jpg"
              ></Box>
            </Card>
          </MotionBox>
          <MotionBox
            zIndex="12"
            pos="absolute"
            onClick={() => {
              setStart(!start);
            }}
            variants={firstElement}
            display={hide? "none":"block"}
            animate={start ? "start" : "def"}
            initial={"init"}
          >
            <Card height={560} width={400} mainColor="#f4ab28" pos="relative">
              <Box
                w="100%"
                h="100%"
                bgSize="cover"
                bgPosition="center"
                // bgColor="#a9a9a9"
                bgImage="/images/statue.jpg"
              ></Box>
            </Card>
          </MotionBox>
          <MotionBox
            zIndex="10"
            pos="absolute"
            onClick={() => {
              setStart(!start);
            }}
            variants={blueEl}
            animate={start ? "start" : "def"}
            initial={"init"}
          >
            <Card height={400} width={580} mainColor="#f4ab28" pos="relative">
              <Box
                w="100%"
                h="100%"
                bgSize="cover"
                bgPosition="center"
                // bgColor="blue"
                bgImage="/images/starrynight.jpg"
              ></Box>
            </Card>
          </MotionBox>
          <MotionBox
            zIndex="12"
            pos="absolute"
            onClick={() => {
              setStart(!start);
            }}
            variants={fifthElement}
            animate={start ? "start" : "def"}
            initial={"init"}
            display={hide? "none":"block"}
         
          >
            <Card height={400} width={300} mainColor="#f4ab28" pos="relative">
              <Box
                w="100%"
                h="100%"
                bgSize="cover"
                bgPosition="center"
                // bgColor="#a9a9a9"
                bgImage="/images/skelly.jpg"
              ></Box>
            </Card>
          </MotionBox>
          <MotionBox
            zIndex="10"
            pos="absolute"
            onClick={() => {
              setStart(!start);
            }}
            variants={sixthElement}
            display={hide? "none":"block"}
            animate={start ? "start" : "def"}
            initial={"init"}
          >
            <Card height={420} width={440}  mainColor="#f4ab28" pos="relative">
              <Box
                w="100%"
                h="100%"
                bgSize="cover"
                bgPosition="center"
                // bgColor="#a9a9a9"
                bgImage="images/sunflower.jpg"
              ></Box>
            </Card>
          </MotionBox>
          <MotionBox
            zIndex="12"
            pos="absolute"
            onClick={() => {
              setStart(!start);
            }}
            variants={seventhElement}
            display={hide? "none":"block"}
            animate={start ? "start" : "def"}
            initial={"init"}
          >
            <Card height={500} width={380} mainColor="#f4ab28" pos="relative">
              <Box
                w="100%"
                h="100%"
                bgSize="cover"
                bgPosition="center"
                // bgColor="#a9a9a9"
                bgImage="/images/villag.png"
              ></Box>
            </Card>
          </MotionBox>
          <MotionBox
            zIndex="10"
            pos="absolute"
            onClick={() => {
              setStart(!start);
            }}
            variants={eightElement}
            display={hide? "none":"block"}
            animate={start ? "start" : "def"}
            initial={"init"}
          >
            <Card height={380} width={580} mainColor="#f4ab28" pos="relative">
              <Box
                w="100%"
                h="100%"
                bgSize="cover"
                bgPosition="center"
                // bgColor="#a9a9a9"
                bgImage="/images/greenwheat.jpg"
              ></Box>
            </Card>
          </MotionBox>
        </Flex>
        
      </Box>
    </>
  );
}
