import { Box, Button } from "@mantine/core";
import gsap from "gsap";
import { useEffect, useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";

const NAV_LINKS = [
  { label: "Nexus", href: "#nexus" },
  { label: "About", href: "#about" },
  { label: "Vault", href: "#story" },      // Vault links to Story
  { label: "Prologue", href: "#prologue" },
  { label: "Contact", href: "#contact" },  // Contact links to Contact
];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setisNavVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navcontainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

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

  // Close mobile menu on navigation
  const handleMobileNavClick = (href) => {
    setMobileMenuOpen(false);
    window.location.hash = href;
  };

  return (
    <>
      <Box
        className="fixed inset-x-0 top-2 left-0 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
        ref={navcontainerRef}
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex w-full items-center justify-between p-2 md:p-4">
            <Box className="flex items-center gap-4 md:gap-7">
              <img
                src="/award-winning-website-main/public/img/DS.jpeg"
                alt="logo"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
              />

              <Button
                rightSection={<TiLocationArrow />}
                className="!text-black !bg-blue-50 hidden md:flex !border-none !rounded-full !shadow-none items-center justify-center gap-1"
              >
                Products
              </Button>
            </Box>

            <Box className="flex h-full items-center">
              {/* Responsive nav links: hidden on small, flex on md+ */}
              <Box className="hidden md:flex gap-4">
                {NAV_LINKS.map((item, index) => (
                  <a
                    href={item.href}
                    key={index}
                    className="nav-hover-btn text-xs md:text-sm lg:text-base"
                  >
                    {item.label}
                  </a>
                ))}
              </Box>
              {/* Mobile menu button: visible on small screens */}
              <Box className="md:hidden ml-4 relative">
                <Button
                  className="!bg-blue-50 !text-black !rounded-full !shadow-none px-3 py-1 text-xs"
                  size="compact-xs"
                  onClick={() => setMobileMenuOpen((open) => !open)}
                >
                  Menu
                </Button>
                {/* Dropdown menu */}
                {mobileMenuOpen && (
                  <Box className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-blue-100 z-50 flex flex-col py-2 animate-fade-in">
                    {NAV_LINKS.map((item, idx) => (
                      <button
                        key={item.label}
                        className="w-full text-left px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300 rounded"
                        onClick={() => handleMobileNavClick(item.href)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </Box>
                )}
              </Box>

              <button
                className="ml-6 flex items-center space-x-0.5 cursor-pointer"
                onClick={toggleAudioIndicator}
              >
                <audio
                  ref={audioElementRef}
                  src="/award-winning-website-main/public/audio/loop.mp3"
                  className="hidden"
                  loop
                />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={`indicator-line ${isIndicatorActive ? "active" : ""}`}
                    style={{ animationDelay: `${bar * 0.01}s` }}
                  />
                ))}
              </button>
            </Box>
          </nav>
        </header>
      </Box>
      {/* Simple fade-in animation for dropdown */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default Navbar;
