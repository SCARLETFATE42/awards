import { Box, Text } from '@mantine/core'
import { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasclicked, setHasclicked] = useState(false);
  const [isloading, setisLoading] = useState(true);
  const [loadedvideos, setLoadedvideos] = useState(0);

  const totalVids = 4;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setisLoading(false);
    setLoadedvideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVids) + 1;

  const handleMiniVidclick = () => {
    setHasclicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  useEffect(() => {
    if (loadedvideos === totalVids - 1) {
      setisLoading(false);
    }
  }, [loadedvideos]);

  useGSAP(() => {
    if (hasclicked) {
      gsap.set('#next-video', { visibility: 'visible' });

      gsap.to('#next-video', {
        transformOrigin: 'center center',
        scale: 1,
        width: '100%',
        height: '100%',
        duration: 1,
        ease: 'power1.inOut',
        onStart: () => nextVideoRef.current.play(),
      });

      gsap.from('#current-video', {
        transformOrigin: 'center center',
        scale: 0,
        duration: 1.5,
        ease: 'power1.inOut',
      });
    }
  }, { dependencies: [currentIndex], revertOnUpdate: true });

  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath: 'polygon(14% 0, 72% 0%, 93% 96%, 0% 100%)',
      borderRadius: '0 0 40% 10%',
    });

    gsap.from('#video-frame', {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      duration: 1.5,
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
      ease: 'power1.inOut',
      onComplete: () => {
        if (isloading && loadedvideos === totalVids) {
          setisLoading(false);
        }
      },
    });
  });

  const getVideoSrc = (index) => `/award-winning-website-main/public/videos/hero-${index}.mp4`;

  return (
    <>
      <Box className="relative min-h-screen h-screen w-full overflow-x-hidden">
        {isloading && (
          <Box className="flex-center absolute z-[100] min-h-screen h-screen w-full overflow-hidden bg-violet-50">
            <Box className="three-body">
              <Box className="three-body__dot" />
              <Box className="three-body__dot" />
              <Box className="three-body__dot" />
            </Box>
          </Box>
        )}
        <Box
          id="video-frame"
          className="relative min-h-screen h-screen z-10 w-full overflow-hidden bg-blue-100/75"
        >
          <Box>
            <Box
              className="mask-clip-path absolute-center absolute inset-0 z-50 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 cursor-pointer overflow-hidden rounded-lg transition-transform"
            >
              <Box
                onClick={handleMiniVidclick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  src={getVideoSrc(upcomingVideoIndex)}
                  ref={nextVideoRef}
                  loop
                  muted
                  id="current-video"
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                ></video>
              </Box>
            </Box>

            <video
              ref={nextVideoRef}
              src={getVideoSrc(currentIndex)}
              loop
              muted
              id="next-video"
              className="absolute-center invisible absolute z-20 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 object-cover object-center"
              onLoadedData={handleVideoLoad}
            ></video>

            <video
              src={getVideoSrc(currentIndex === totalVids - 1 ? 1 : currentIndex)}
              autoPlay
              playsInline
              muted
              loop
              preload="auto"
              className="absolute left-0 top-0 w-full h-full object-cover object-center"
              onLoadedData={(e) => {
                e.target.play().catch((err) => console.log("Autoplay blocked:", err));
                handleVideoLoad();
              }}
            ></video>
          </Box>
          <Text className="!special-font hero-heading absolute right-2 bottom-2 z-40 !text-blue-100/40 text-xl sm:text-3xl md:text-5xl">
            <img
              src="/award-winning-website-main/public/img/gaming.png"
              alt=""
              className="w-24 h-8 sm:w-40 sm:h-12 md:w-82 md:h-22"
            />
          </Text>
          <Box className="absolute left-0 top-0 z-40 w-full h-full">
            <Box className="mt-8 sm:mt-16 md:mt-24 px-4 sm:px-8 md:px-10">
              <Text>
                <img src="/img/REDIFINE.png" alt="" className="w-24 sm:w-32 md:w-64" />
              </Text>
              <p className="mt-5 mb-5 max-w-xs sm:max-w-md md:max-w-lg font-robert-regular text-blue-100 capitalize text-base sm:text-lg md:text-xl">
                Enter the Metaverse Layer <br />
                Unleash the play Economy
              </p>
              <Button
                id="watch-trailer"
                title="Watch Trailer"
                leftIcon={<TiLocationArrow />}
                containerClass="!bg-yellow-300 !flex-center !flex !gap-1"
              />
            </Box>
          </Box>
        </Box>

        <Text className="!special-font hero-heading absolute right-2 bottom-2 !text-black text-xl sm:text-3xl md:text-5xl">
          <img
            src="/award-winning-website-main/public/img/fontbolt.png"
            alt=""
            className="w-24 h-8 sm:w-40 sm:h-12 md:w-82 md:h-22"
          />
        </Text>
      </Box>
    </>
  );
};

export default Hero;
