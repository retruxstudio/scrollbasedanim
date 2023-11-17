import { MotionBox } from "@/components/motions/Motion";
import { Box } from "@chakra-ui/react";
import { useScroll, useTransform } from "framer-motion";

export default function Profiles({ bg }: { bg: string }) {
  const { scrollYProgress } = useScroll();
  const fPx = useTransform(scrollYProgress, [0.14, 0.45], ["0px", "-40px"]);
  const sPx = useTransform(scrollYProgress, [0.14, 0.4], ["0px", "-20px"]);
  const sPsc = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const sPop = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  return (
    <MotionBox
      w="28px"
      h="28px"
      bgImage={bg}
      borderRadius="50px"
      bgSize="contain"
      style={{ scale: sPsc }}
    />
  );
}
