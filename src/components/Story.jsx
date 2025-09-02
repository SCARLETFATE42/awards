"use client";

import { Box, Text } from "@mantine/core";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import { useRef } from "react";
import Rounded from "./Rounded";
import Button from "../components/Button";

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeave = () => {
    if (frameRef.current) {
      frameRef.current.style.transform = "translateY(0%) scale(1)";
      frameRef.current.style.opacity = "1";
    }
    gsap.to(frameRef.current, {
      duration: 0.3,
      ease: "power1.inOut",
      rotateX: 0,
      rotateY: 0,
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; // 🔹 disable tilt on mobile
    if (frameRef.current) {
      const { left, top, width, height } = frameRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 2;
      const y = ((e.clientY - top) / height - 0.5) * 2;
      const rotateX = y * 10;
      const rotateY = x * 10;

      gsap.to(frameRef.current, {
        duration: 0.3,
        ease: "power1.inOut",
        rotateX,
        rotateY,
        transformPerspective: 600,
      });
    }
  };

  return (
    <section
      id="story"
      className="bg-black pb-20 min-h-screen w-full text-blue-50"
    >
      <Box className="flex flex-col items-center justify-center text-center pt-16 px-4 md:px-8 lg:px-16">
        {/* Small intro heading */}
        <p className="font-face2 text-xs uppercase md:text-lg lg:text-xl">
          the multiselected versatile world
        </p>

        {/* Title + Image */}
        <Box className="relative w-full max-w-7xl mx-auto">
          <AnimatedTitle
            containerClass="mt-4 md:mt-8 lg:mt-12 max-w-4xl mx-auto pointer-events-none mix-blend-difference relative z-10"
            sectionId="#story"
            title={
              <>
                The St<b>o</b>ry of a <br /> Hidden Real<b>m</b>
              </>
            }
          />

          <Box className="story-img-container w-full max-w-4xl mx-auto mt-8 h-64 sm:h-80 md:h-[32rem] lg:h-[38rem]">
            <Box className="story-img-mask w-full h-full overflow-hidden rounded-3xl">
              <Box className="story-img-content w-full h-full">
                <img
                  src="/award-winning-website-main/public/img/entrance.webp"
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  ref={frameRef}
                  alt="Entrance"
                  className="w-full h-full object-cover object-center transition-all duration-300 ease-out"
                />
              </Box>
            </Box>
            <Rounded />
          </Box>
        </Box>

        {/* Text + CTA */}
        <Box className="flex flex-col md:flex-row w-full justify-center items-center md:items-end gap-8 mt-10 md:mt-12 lg:mt-16">
          <Box className="flex h-full flex-col items-center md:items-start md:me-20 lg:me-32 text-center md:text-start">
            <Text className="mt-3 max-w-xs sm:max-w-sm md:max-w-md font-face !text-violet-50 text-sm sm:text-base md:text-lg">
              Where realms cross, lies Pandora and the boundless pillars.
              Discover its secrets and shape your destiny amidst countless
              opportunities.
            </Text>
            <Button
              title="Explore Pandora"
              containerClass="mt-6 !bg-white !text-black !rounded-full px-6 py-2 text-sm sm:text-base md:text-lg"
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Story;
