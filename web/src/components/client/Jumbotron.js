"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Lenis from "@studio-freight/lenis";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";

export default function jumbotron() {
  const h1Ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const [jh, setJh] = useState(0);

  let jumbotronHeight = 0,
    windowHeight = 0,
    scaleY = 0;

  useEffect(() => {
    // get precent of height the jumbotron takes up
    jumbotronHeight = h1Ref.current?.offsetHeight;
    windowHeight = window.innerHeight;

    // find what the percentage is of the jumbotron height to the window height
    setJh(jumbotronHeight / windowHeight);

    console.log(jh);
  }, [h1Ref]);

  const y = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  scaleY = useTransform(
    y,
    // Map x from these values:
    [0, jh],
    // Into these values:
    [1, 0.9]
  );

  return (
    <motion.h1 className="text-jumbo" style={{ scaleY }} ref={h1Ref}>
      Crafting Beautiful Web Experiences
    </motion.h1>
  );
}
