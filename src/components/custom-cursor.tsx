"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";

export default function CustomCursor() {
  // Only enabled on fine pointers without reduced-motion preference.
  const [enabled, setEnabled] = useState(false);

  const x = useSpring(-100, { stiffness: 500, damping: 35, mass: 0.3 });
  const y = useSpring(-100, { stiffness: 500, damping: 35, mass: 0.3 });
  const opacity = useMotionValue(0);
  const transform = useMotionTemplate`translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine) and (hover: hover)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduce.matches);
    update();
    fine.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let seen = false;

    const move = (e: MouseEvent) => {
      if (!seen) {
        // Snap to the pointer on first move so the ring doesn't fly in.
        seen = true;
        x.jump(e.clientX);
        y.jump(e.clientY);
      } else {
        x.set(e.clientX);
        y.set(e.clientY);
      }
      opacity.set(1);
    };
    const hide = () => opacity.set(0);
    const show = (e: MouseEvent) => {
      if (seen) opacity.set(1);
      else move(e);
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);
    document.documentElement.addEventListener("mouseenter", show);
    window.addEventListener("blur", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", hide);
      document.documentElement.removeEventListener("mouseenter", show);
      window.removeEventListener("blur", hide);
    };
  }, [enabled, x, y, opacity]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-6 w-6 rounded-full border-2 border-primary will-change-transform"
      style={{ transform, opacity }}
    />
  );
}
