import { Box, Button } from "@mantine/core"
import gsap from "gsap";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react"
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";

const Navbar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setisNavVisible] = useState(true);

    const navcontainerRef = useRef(null);
    const audioElementRef = useRef(null);

    const toggleAudioIndicator = () => {
    setIsAudioPlaying( (prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
    }

    const { y: currentScrollY } = useWindowScroll();

    useEffect(() => {
    if (currentScrollY === 0) {
        setisNavVisible(true);
        navcontainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
        setisNavVisible(false);
        navcontainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
        setisNavVisible(true);
        navcontainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navcontainerRef.current, {
            duration: 0.4,
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            ease: "power2.out"
        });
    }, [isNavVisible]);

    useEffect(() => {
    if (isAudioPlaying) {
        audioElementRef.current.play();
    } else {
        audioElementRef.current.pause();
    }
    }, [isAudioPlaying]);


return (
    <>
    <Box className="fixed inset-x-0 top-4 left-0 z-50
    h-16 border-none 
    transition-all duration-700 sm:inset-x-6"
    ref={navcontainerRef}
    >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
            <Box className="flex items-center gap-7">
                <img src="/award-winning-website-main/public/img/DS.jpeg" alt="logo" 
                className="w-10 h-10 rounded-full" />

                <Button 
                // title=""
                rightSection={<TiLocationArrow />}
                // containerClassName="!text-red"
                className="!text-black !bg-blue-50 md:flex hidden 
                !border-none !rounded-full !shadow-none
                items-center justify-center gap-1
                "
                >Products</Button>
            </Box>

            <Box className="flex h-full items-center">
                <Box className="hidden md:block">
                {[ "Nexus", "About", "Vault", "Prologue", "Contact" ].map((item, index) => (
                    <a href={`#${item.toLowerCase()}`} 
                    key={index}
                    className="nav-hover-btn"
                    >
                        {item}
                    </a>
                ))}
                </Box>

                <button className="ml-10 flex items-center space-x-0.5 cursor-pointer"
                onClick={toggleAudioIndicator}>
                    <audio ref={audioElementRef} 
                            src="/award-winning-website-main/public/audio/loop.mp3"
                            className="hidden"
                            loop />
                        {[1, 2, 3, 4].map((bar) => (
                            <div key={bar} 
                            className={`indicator-line ${isIndicatorActive ? "active" : ""}`} style={{ animationDelay: `${bar * 0.01}s ` }}/>
                        ))}
                </button>
            </Box>
        </nav>
        </header>
    </Box>
    </>
  )
}

export default Navbar
