"use client";

import { Box } from "@mantine/core";
import Bentocard from "./Bentocard";
import { TiLocationArrow } from "react-icons/ti";
import { useRef, useState } from "react";

const BentoTilt = ({ children, className = "", style = {} }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = rect.top + rect.height / 2 - e.clientY;

    const rotateX = y / 40;
    const rotateY = x / -50;

    setTransformStyle(
      `perspective(2500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`
    );
  };

  return (
    <div
      className={`${className} md:border md:border-gray-700`} 
      /* 🔹 border only on md+ screens */
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTransformStyle("")}
      style={{
        transform: transformStyle,
        transition: "transform 0.2s ease-out",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const Bentocard2 = ({ title, description, src, muted = true, loop = true }) => {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <video
        src={src}
        autoPlay
        muted={muted}
        loop={loop}
        playsInline
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 flex flex-col justify-start p-4 z-10">
        <h1 className="bento-title special-font">{title}</h1>
        <p className="text-gray-200 max-w-80 -mt-1">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      {/* <Box className="container mx-auto px-3 md:px-10">Feature 1</Box> */}

      <Box className="px-5 py-32 capitalize">
        <p className="font-face text-lg text-blue-50">Into the metaverse layer</p>
        <p className="max-w-md font-face text-lg text-blue-50 opacity-50">
          Step into a realm where imagination shapes reality. Forge alliances,
          battle foes, and uncover hidden treasures. Every choice you make
          shapes your legend. Your journey begins now—are you ready?
        </p>
      </Box>

      {/* Responsive grid */}
      <Box
        className="grid gap-6 m-6 grid-cols-1 auto-rows-[40vh] md:grid-cols-2 md:!auto-rows-[64vh] mt-[480px] md:mt-74"
      >
        <style>
          {`
            @media (min-width: 768px) {
              .grid {
                grid-template-areas:
                  "bento bento"
                  "zigma nepsix"
                  "zigma azul"
                  "more feature5";
                grid-template-columns: 1fr 1fr;
                grid-auto-rows: minmax(200px, auto);
              }
            }
            @media (max-width: 767px) {
              .grid {
                grid-template-areas:
                  "bento"
                  "zigma"
                  "nepsix"
                  "azul"
                  "more"
                  "feature5"; 
                grid-template-columns: 1fr; 
              }
            }
          `}
        </style>

        {/* radiant */}
        <BentoTilt style={{ gridArea: "bento" }}>
          <Bentocard />
        </BentoTilt>

        {/* zigma */}
        <BentoTilt style={{ gridArea: "zigma" }}>
          <Bentocard2
            src="/award-winning-website-main/public/videos/feature-2.mp4"
            title={<span>Zig<b>m</b>a</span>}
            description="An anime and gaming NFT collection - the IP primed for expansion"
          />
        </BentoTilt>

        {/* nepsix */}
        <BentoTilt style={{ gridArea: "nepsix" }}>
          <Bentocard2
            src="/award-winning-website-main/public/videos/feature-3.mp4"
            title={<span>n<b>e</b>psix</span>}
            description="An engaging and professional company where you can develop both hard and soft skills."
          />
        </BentoTilt>

        {/* azul */}
        <BentoTilt style={{ gridArea: "azul" }}>
          <Bentocard2
            src="/award-winning-website-main/public/videos/feature-4.mp4"
            title={<span>az<b>u</b>l</span>}
            description="Azul — the AI agent that adapts to you, making every battle smarter."
          />
        </BentoTilt>

        {/* coming soon */}
        <BentoTilt style={{ gridArea: "more" }} className="bg-violet-500 p-5 flex flex-col justify-between">
          <h1 className="bento-title special-font !text-black">
            <b>mo</b>re comi<b>ng</b> s<b>oo</b>n!!!
          </h1>
          <TiLocationArrow className="self-end scale-[4]" />
        </BentoTilt>

        {/* feature 5 */}
        <BentoTilt style={{ gridArea: "feature5" }} className="bg-pink-500 overflow-hidden">
          <video
            src="/award-winning-website-main/public/videos/feature-5.mp4"
            loop
            autoPlay
            muted
            playsInline
            className="size-full object-center object-cover"
          />
        </BentoTilt>
      </Box>
    </section>
  );
};

export default Features;
