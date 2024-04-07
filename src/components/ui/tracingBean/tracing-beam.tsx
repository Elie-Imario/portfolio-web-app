import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "../../../utils/cn";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  const [divProperty, setDivProperty] = useState({
    divWidth: 0,
    divHeight: 0,
  });
  useEffect(() => {
    // Function to update height state
    const updateProperty = () => {
      setDivProperty({
        ...divProperty,
        divWidth: ref.current?.offsetWidth as number,
        divHeight: ref.current?.offsetHeight as number,
      });
    };

    // Initial height update
    updateProperty();

    // Event listener for window resize
    window.addEventListener("resize", updateProperty);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", updateProperty);
    };
  }, []); // Empty dependency array ensures that effect runs only once

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, [divProperty]);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div ref={ref} className={cn("relative w-full h-full", className)}>
      <div className="TracingBeam absolute">
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          className="block"
          aria-hidden="true"
        >
          {/* <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path> */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.5} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.5"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
