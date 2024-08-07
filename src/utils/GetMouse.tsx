import { useState, RefObject, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    window.addEventListener("mousemove", function (e: MouseEvent) {
      if (e.buttons == 1) {
        handlePointerMove(e);
      }
    });
    window.addEventListener("scroll", () => {
      handlePointerMove;
    });

    return () => {
      window.removeEventListener("mousemove", function (e: MouseEvent) {
        if (e.buttons == 1) {
          handlePointerMove(e);
        }
      });
      window.removeEventListener("scroll", () => {
        handlePointerMove;
      });
    };
  }, []);

  return point;
}
