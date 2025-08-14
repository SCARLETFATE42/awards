import { Box, Text } from '@mantine/core'
import { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocation, TiLocationArrow } from 'react-icons/ti'; // For Typicons
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(ScrollTrigger)
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasclicked, setHasclicked] = useState(false);
  const [isloading, setisLoading] = useState(true);
  const [loadedvideos, setLoadedvideos] = useState(0)

  const totalVids = 4; 
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setisLoading(false);
    setLoadedvideos((prev) => prev + 1);
  }

  const upcomingVideoIndex = ( currentIndex % totalVids ) + 1;

  const handleMiniVidclick = () => {
        setHasclicked(true);

        setCurrentIndex(upcomingVideoIndex);
    }

    useEffect(() => {
      if(loadedvideos === totalVids -1) {
        setisLoading(false);
      }
    }, [loadedvideos])
    

    useGSAP( ()=>{
      if(hasclicked) {
        gsap.set('#next-video', { visibility:'visible' });

        gsap.to('#next-video', {
          transformOrigin: 'center center',
          scale: 1,
          width: '100%',
          height: '100%',
          duration: 1,
          ease: 'power1.inOut',
          onStart: () => nextVideoRef.current.play(),
        })

        gsap.from( '#current-video', {
          transformOrigin: 'center center',
          scale: 0,
          duration: 1.5,
          ease: 'power1.inOut'
        } )
      }
    }, {dependencies: [ currentIndex ], revertOnUpdate: true} )

    useGSAP ( () =>{
      gsap.set( '#video-frame', {
        clipPath: 'polygon(14% 0, 72% 0%, 93% 96%, 0% 100%)',
        borderRadius: '0 0 40% 10%'
      } )

      gsap.from( '#video-frame', {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        borderRadius: '0 0 0 0',
        duration: 1.5,
        scrollTrigger: {
          trigger: '#video-frame',
          start: 'center center',
          end : 'bottom center',
          scrub: true,
        },
        ease: 'power1.inOut',
        onComplete: () => {
          if (isloading && loadedvideos === totalVids) {
            setisLoading(false);
          }
        }
      } )
    } )

    const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;

  return (
    <>
        <Box className='relative h-dvh w-screen overflow-x-hidden'>

          {isloading && (
            <Box className='flex-center absolute z-[100] 
            h-dvh w-screen overflow-hidden bg-violet-50'>
              <Box className='three-body'>
            <Box className='three-body__dot' />
            <Box className='three-body__dot' />
            <Box className='three-body__dot' />
              </Box>
            </Box>
          )}
            <Box id='video-frame' className='relative h-dvh z-10 w-screen overflow-hidden bg-blue-100/75'>
                <Box>
                    <Box className='mask-clip-path absolute-center absolute inset-0 z-50 size-64 
                                    cursor-pointer overflow-hidden rounded-lg
                                    transition-transform'>
                        <Box onClick={handleMiniVidclick} className='origin-center scale-50 opacity-0
                                      transition-all
                                      duration-500 ease-in hover:scale-100 hover:opacity-100'>
                            
                          <video
                        src={getVideoSrc (upcomingVideoIndex)}
                        ref={nextVideoRef}
                        loop
                        muted
                        id='current-video'
                        className='size-64 origin-center scale-150 object-cover object-center'
                          onLoadedData={handleVideoLoad}></video>
                        </Box>
                    </Box>

                    <video 
                      ref={nextVideoRef}
                      src={getVideoSrc(currentIndex)}
                      loop
                      muted
                      id='next-video'
                      className='absolute-center invisible absolute z-20 size-64
                      object-cover object-center'
                      onLoadedData={handleVideoLoad}
                    ></video>

                    <video 
                    src={getVideoSrc (currentIndex === totalVids - 1 
                      ? 1 : currentIndex
                    )}
                    autoPlay
                    loop
                    muted
                    className='absolute left-0 top-0 size-full object-cover
                    object-center'
                    onLoadedData={handleVideoLoad}
                    ></video>
                </Box>
                <Text className='!special-font hero-heading absolute right-5 bottom-5
                z-40 !text-blue-100/40 !text-5xl'>
                <img src="/img/gaming.png" alt="" className='w-82 h-22' />
                </Text>
                <Box className='absolute left-0 top-0 z-40 size-full'>
                  <Box className="mt-24 px-5 sm:px-10">
                    <Text>
                      <img src="/img/REDIFINE.png" alt="" />
                    </Text>
                    <p className='mt-5 mb-5 max-w-64 font-robert-regular text-blue-100 capitalize'>Enter the Metaverse Layer <br />
                    Unleash the play Economy</p>
                    <Button 
                    id='watch-trailer'
                    title='Watch Trailer'
                    leftIcon={<TiLocationArrow/>}
                    containerClass='!bg-yellow-300 !flex-center !gap-1'
                    />
                  </Box>
                </Box>
            </Box>


            <Text className='!special-font hero-heading absolute right-5 bottom-5
                !text-black !text-5xl'>
                <img src="/img/fontbolt.png" alt="" className='w-82 h-22'/>
                </Text>
        </Box>
    </>
  )
}

export default Hero
