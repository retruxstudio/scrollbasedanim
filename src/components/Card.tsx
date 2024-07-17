import React, { Key, ReactNode, useContext, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { MotionBox } from "./motions/Motion";
import { Box, BoxProps, Flex, Text } from "@chakra-ui/react";
// import ColorContext from "@/utils/ColorContext";
import { title } from "process";

interface TiltCardInterface extends BoxProps {
  height: number;
  width: number;
  mainColor?: string;
  children?: ReactNode;
  cardProps?: BoxProps;
  title?: string;
  subtitle?: string;
}

export default function Card({
  height,
  width,
  title,
  subtitle,
  mainColor,
  children,
  ...cardProps
}: TiltCardInterface) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start 1", "start 0"],
  });
  //   const { setMainColor, setOpacity, opacity } = useContext(ColorContext);
  // const y = useTransform(scrollYProgress, [0, 1], ["0px", "-170px"]);
  const scale = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [1, 1.1, 1.1, 1]);
  const sd = useTransform(scrollYProgress, [0, 1], ["115%", "100%"]);
  const opacityT = useTransform(scrollYProgress, [0.7, 1], [1, 0]);
  const colorMv = useMotionValue(0);
  const colorSp = useSpring(colorMv, { damping: 20, velocity: 40 });
  const colorTf = useTransform(colorSp, [0, 1], ["#fff", "#000"]);

  const springConfig = {
    stiffness: 460,
    damping: 36,
    mass: 0.5,
  };

  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const xSpring = useSpring(cardX, springConfig);
  const ySpring = useSpring(cardY, springConfig);
  const rotateX = useTransform(ySpring, [-0.4, 0.4], [2.2, -2.2]);
  const rotateY = useTransform(xSpring, [-0.4, 0.4], [-2.2, 2.2]);
  const cardRotateX = useTransform(ySpring, [-0.4, 0.4], [2.2, -2.2]);
  const cardRotateY = useTransform(xSpring, [-0.4, 0.4], [-2.2, 2.2]);

  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    cardX.set(xPct);
    cardY.set(yPct);
    // setMainColor(mainColor);
    // setOpacity(1);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
    // setOpacity(0);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     colorMv.set(opacity);
  //   }, 120);
  // }, [opacity]);

  return (
    <MotionBox
      style={{
        // scale: scale,
        // y,
        position: "relative",
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        cursor:"pointer"
      }}
    >
      <MotionBox
        ref={ref}
        style={{
          width: width,
          height: height,
          transformStyle: "preserve-3d",
          perspective: 800,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          rotateX,
          rotateY,
          position: "relative",
          zIndex: 2,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <MotionBox
          style={{
            paddingTop:"40px",
            backgroundColor: "#141414",
            position: "absolute",
            transformStyle: "preserve-3d",
            perspective: 800,
            rotateX,
            rotateY,
            width: sd,
            height: sd,
            filter: "blur(40px)",
            zIndex: 2,
            opacity: 0.15,
          }}
        ></MotionBox>
        <MotionBox
          style={{
            paddingTop:"40px",
            position: "absolute",
            // backgroundColor: mainColor,
            width: width + 2,
            height: height + 2,
            transformStyle: "preserve-3d",
            perspective: 800,
            rotateX: cardRotateX,
            rotateY: cardRotateY,
            zIndex: 4,
            // opacity: opacityT,
          }}
        ></MotionBox>
        <MotionBox
          style={{
            paddingTop:"40px",
            position: "relative",
            width: width,
            height: height,
            transformStyle: "preserve-3d",
            perspective: 800,
            rotateX: cardRotateX,
            rotateY: cardRotateY,
            zIndex: 3,
          }}
          {...cardProps}
        >
          {children}
        </MotionBox>
      </MotionBox>
      <MotionBox
        display="flex"
        style={{ color: colorTf }}
        w="100%"
        justifyContent="space-between"
        zIndex="1"
      >
        <Text fontSize="24px" fontWeight="400" pt="6px">
          {title}
        </Text>
        <Text fontSize="24px" fontWeight="400" pt="6px">
          {subtitle}
        </Text>
      </MotionBox>
    </MotionBox>
  );
}
