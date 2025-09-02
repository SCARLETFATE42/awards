"use client";
import { CardBody, CardContainer, CardItem } from "/ui/3d-card";

const VideoPlayer = ({ title, description, src, muted = true, loop = true }) => {
  return (
    <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
      {/* Background video */}
      <video
        src={src}
        autoPlay
        muted={muted}
        loop={loop}
        className="w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-start p-2 sm:p-4 z-10">
        <h1 className="bento-title special-font text-base sm:text-xl md:text-2xl lg:text-4xl">{title}</h1>
        <p className="text-gray-200 max-w-64 -mt-1 text-xs sm:text-sm md:text-base lg:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default function Bentocard() {
  return (
    <CardContainer className="inter-var w-full">
      <CardItem translateZ={50}>
        <VideoPlayer
          src="/award-winning-website-main/public/videos/feature-1.mp4"
          title={
            <>
              radi<b>a</b>nt
            </>
          }
          description="A captivating video showcasing the features of the Bentocard."
        />
      </CardItem>
    </CardContainer>
  );
}
