import { faDiscord, faGithub, faInstagram, faLinkedin, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Text } from "@mantine/core";

const Links = [
  {
    href: "https://discord.com/channels/@me",
    icon: (
      <FontAwesomeIcon
      icon={faDiscord}
      beat
      size="sm"
      style={{ color: "#74C0FC" }}
    />
    ),
  },
  {
    href: "https://github.com/SCARLETFATE42",
    icon: (
      <FontAwesomeIcon icon={faGithub} 
      beatFade 
      style={{ color: "#74C0FC" }} 
      />
    ),
  },
  {
    href: "https://x.com/michaeleme75903",
    icon: (
      <FontAwesomeIcon
      icon={faXTwitter}
      spinPulse
      size="sm"
      style={{ color: "#74C0FC" }}
    />
    ),
  },
  {
    href: "https://api.whatsapp.com/send/?phone=%2B7049593176&type=phone_number&app_absent=0",
    icon: (
      <FontAwesomeIcon
      icon={faWhatsapp}
      spinPulse
      size="sm"
      style={{ color: "#74C0FC" }}
    />
    ),
  },
  {
    href: "https://www.linkedin.com/in/michael-emediong-41382436a/",
    icon: (
      <FontAwesomeIcon icon={faLinkedin}
      beat
      style={{color: "#74C0FC",}}
      />
    ),
  },
  {
    href: "https://www.instagram.com/emzy_blvck/",
    icon: (
      <FontAwesomeIcon icon={faInstagram}
      beat
      style={{color: "#74C0FC",}}
      />
    ),
  },

];

const Footer = () => {
  return (
    <footer className="w-full bg-indigo-600 py-5 text-black">
      <Box className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left font-bold text-[#b5b3b3f3]">
          &copy; Scarletfate {new Date().getFullYear()} All Rights Reserved
        </p>


        <Box className="flex justify-center gap-2.5 md:justify-start">
          {Links.map((link) => (
            <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline transition-all duration-500 ease-in-out hover:!text-white"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </Box>
          <Text><a href="https://portfolio-seven-psi-a1ngg80ta9.vercel.app/" className= "!text-[#b5b3b3f3] font-bold hover:!text-yellow-500 transition-all duration-300 ease-in-out">Michael Emediong</a> </Text>
      </Box>
    </footer>
  );
};

export default Footer;