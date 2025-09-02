import { Box } from "@mantine/core";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".animated-letter",
        {
          opacity: 0,
          y: 50,
          rotateX: 90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          ease: "power3.out",
          stagger: 0.03,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Recursive function to wrap each character
  const renderChars = (node, keyPrefix = "") => {
    if (typeof node === "string") {
      return node.split("").map((char, i) => (
        <span
          key={`${keyPrefix}-${i}`}
          className="animated-letter inline-block opacity-0 font-face5"
        >
          {char}
        </span>
      ));
    }

    if (!node) return null;

    // Handle <br />
    if (node.type === "br") {
      return <br key={`${keyPrefix}-br`} />;
    }

    // Handle <b>
    if (node.type === "b") {
      return (
        <b key={`${keyPrefix}-b`} className="special-font">
          {renderChars(node.props.children, `${keyPrefix}-b`)}
        </b>
      );
    }

    // Handle fragments or other elements
    if (Array.isArray(node)) {
      return node.map((child, i) => renderChars(child, `${keyPrefix}-${i}`));
    }

    return renderChars(node.props?.children, `${keyPrefix}-child`);
  };

  return (
    <Box
      ref={containerRef}
      className={`animated-title ${containerClass} 
        w-full 
        text-center 
        font-bold 
        px-3 py-2
        text-2xl
        sm:text-3xl
        md:text-5xl
        lg:text-7xl
        leading-tight
        max-w-full
        md:max-w-4xl
        mx-auto
      `}
    >
      <Box className="
        flex flex-wrap justify-center 
        gap-x-1 gap-y-2
        sm:gap-x-2 sm:gap-y-3
        md:gap-x-4 md:gap-y-4
        px-1 sm:px-4 md:px-6
      ">
        {renderChars(title)}
      </Box>
    </Box>
  );
};

export default AnimatedTitle;
