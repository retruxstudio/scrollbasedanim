import { MotionBox } from "@/components/motions/Motion";
import { Text } from "@chakra-ui/react";
import { cubicBezier, easeOut, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.26], [1, 0]);
  const scaleSm = useTransform(scrollYProgress, [0, 0.4], [1, 0.7]);
  const scaleBg = useTransform(scrollYProgress, [0, 0.3], [1, 0.68]);
  const ySm = useTransform(scrollYProgress, [0, 0.3], ["0px", "-2px"], {
    ease: cubicBezier(0.85, -0.01, 1, 0.99),
  });
  const yBg = useTransform(scrollYProgress, [0, 0.3], ["0px", "-36px"], {
    ease: cubicBezier(0.85, -0.01, 1, 0.99),
  });

  return (
    <>
      <MotionBox
        display="flex"
        ref={targetRef}
        pos="fixed"
        w="100%"
        py="160px"
        justifyContent="center"
        alignItems="center"
        style={{ opacity }}
        zIndex="10"
        top="0px"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.4, 1], scale: 1 }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 0.8,
          ease: easeOut,
        }}
      >
        <MotionBox
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <MotionBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="8px"
            style={{ scale: scaleSm, y: ySm }}
            mb="-10px"
          >
            <Text
              fontSize="34px"
              fontWeight="500"
              color="white"
              letterSpacing="-1.5px"
            >
              Retrux
            </Text>

            <Text
              fontSize="34px"
              fontWeight="300"
              color="white"
              letterSpacing="-1.5px"
            >
              Studio
            </Text>
          </MotionBox>
          <MotionBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            style={{ scale: scaleBg, y: yBg }}
          >
            <Text
              fontSize="94px"
              fontWeight="500"
              color="white"
              mb="-26px"
              letterSpacing="-3px"
            >
              Development
            </Text>
            <Text
              fontSize="94px"
              fontWeight="500"
              color="white"
              mt="-20px"
              letterSpacing="-3px"
            >
              beautified.
            </Text>
          </MotionBox>
        </MotionBox>
      </MotionBox>
    </>
  );
}
