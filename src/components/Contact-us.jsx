import { Box } from "@mantine/core";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <Box className={`${clipClass} relative`}>
    <img 
      src={src} 
      alt="" 
      className="max-w-full h-auto object-contain" 
    />
  </Box>
);

const ContactUs = () => {
  return (
    <Box id="contact" className="my-20 w-screen px-4 md:px-10">
      <Box
        className="
        relative rounded-lg bg-black 
        py-10 md:py-28 lg:py-44 
        px-4 md:px-10 
        text-blue-50 
        mt-60 md:mt-20 
        sm:overflow-hidden
        "
      >
        {/* First image: desktop only */}
        <Box className="absolute -top-6 left-0 hidden md:block max-w-[12rem] lg:max-w-[18rem]">
          <ImageClipBox
            clipClass="contact-clip-path-1"
            src="/award-winning-website-main/public/img/contact-1.webp"
          />
        </Box>

        {/* Second image: desktop only */}
        <Box className="absolute -left-10 top-10 hidden md:block max-w-[14rem] lg:max-w-[20rem]">
          <ImageClipBox
            clipClass="contact-clip-path-2 translate-y-10 lg:translate-y-20"
            src="/award-winning-website-main/public/img/contact-2.webp"
          />
        </Box>

        {/* Third image (Swordman): desktop */}
        <Box className="absolute hidden md:block right-6 top-10 max-w-[12rem] lg:max-w-[18rem]">
          <ImageClipBox
            clipClass="absolute md:scale-110"
            src="/award-winning-website-main/public/img/swordman-partial.webp"
          />
          <ImageClipBox
            clipClass="sword-man-clip-path md:scale-110"
            src="/award-winning-website-main/public/img/swordman.webp"
          />
        </Box>

        {/* Third image (Swordman): mobile only */}
        <Box className="absolute -top-40 left-1/2 -translate-x-1/2 md:hidden max-w-[12rem]">
          <ImageClipBox
            clipClass="sword-man-clip-path scale-110"
            src="/award-winning-website-main/public/img/swordman.webp"
          />
        </Box>

        {/* Text + Button */}
        <Box className="flex flex-col items-center text-center relative z-10">
          <p className="font-face2 text-xs uppercase">join Pandora</p>

          <p className="special-font mt-6 w-full font-face5 text-3xl md:text-5xl lg:text-[6rem] leading-tight">
            Lets c<b>o</b>nnect to <br /> an a<b>g</b>e of <br /> multi<b>uni</b>versal g<b>a</b>ming
          </p>

          <Button
            title="Contact Us"
            href="https://x.com/michaeleme75903"
            containerClass="bg-blue-500 text-white py-2 px-6 mt-8 hover:!bg-blue-400 rounded-lg"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
