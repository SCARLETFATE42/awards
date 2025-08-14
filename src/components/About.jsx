import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Box, Text } from "@mantine/core";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

      clipAnimation.to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
      });
    },
    { scope: containerRef }
  );

  return (
    <Box ref={containerRef} className="min-h-screen w-screen" id="about">
      <Box className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <Text className="!font-general !text-sm uppercase md:!text-[10px]">
          Welcome to Zentry
        </Text>

        <AnimatedTitle
          title={`Discover the world's <br /> largest shared adventure`}
          containerClass="mt-5 text-center !text-7xl !text-black"
        />

        <Box className="about-subtext">
          <p>
            The Game of Games begins — your life, now an epic MMORPG
          </p>
          <p>
            Farlight84 unites every player from countless games and platforms
          </p>
        </Box>
      </Box>

      <Box className="h-dvh w-screen" id="clip">
        <Box className="mask-clip-path about-image relative overflow-hidden">
          <img
            src="/award-winning-website-main/public/img/about.webp"
            alt="background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
