"use client";
import { Box, Text } from "@mantine/core";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: "margin", // ✅ ensures Features is pushed down
        },
      });

      clipAnimation.to(".about-image", {
        clipPath: "inset(0% round 0px)",
        ease: "power1.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={containerRef}
      className="min-h-screen w-full relative z-20"
      id="about"
    >
      <Box className="px-4 md:px-8 lg:px-16" id="clip">
        <Box className="mask-clip-path about-image relative overflow-hidden w-full max-w-3xl mx-auto h-64 md:h-[40vh] lg:h-[60vh] rounded-3xl">
          <img
            src="/award-winning-website-main/public/img/about.webp"
            alt="background"
            className="absolute left-0 top-0 w-full h-full object-cover"
          />
        </Box>
      </Box>

      <Box className="flex flex-col items-center justify-center text-center pt-10 px-4 md:px-8 lg:px-16">
        <Text className="font-face2 text-xs uppercase md:text-lg lg:text-xl">
          about the hidden realm
        </Text>
        <Text className="mt-4 max-w-2xl text-center text-base md:text-lg lg:text-xl text-blue-50">
          Discover the endless possibilities where imagination shapes destiny.
          This is where innovation meets boundless creativity, giving life to
          extraordinary experiences.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
