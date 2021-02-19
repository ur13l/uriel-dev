import { motion } from "framer-motion";
import Strings from "../_data/strings-es";
import InfoSection from "../_includes/info-section";
import animation from "../_assets/animations/programming.json";
import rdPng from "../_assets/images/rd.png?trace";
import { useBrowserInfo } from "../_hooks/use-browser-info";

const getAnimationOptions = (animation) => ({
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});

const Experience = () => {
  const {
    EXPERIENCE: { EXPERIENCE, EXPERIENCE_PARAGRAPH_1, EXPERIENCE_PARAGRAPH_2 },
  } = Strings;
  const { screenSize } = useBrowserInfo();

  return (
    <div className="relative">
      <motion.div
        initial={{ x: "110vw", y: "-30px", skewY: -2 }}
        animate={{ x: screenSize === "mobile" ? "0" : "100px" }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="absolute top-0 h-full w-full bg-blue-light"
      />
      <motion.div
        initial={{ x: "100vw", skewY: -2 }}
        animate={{ x: screenSize === "mobile" ? "0" : "40px" }}
        transition={{ ease: "easeIn", duration: 0.5 }}
        className="absolute top-0 h-full w-full bg-blue-dark"
      />
      <InfoSection
        title={EXPERIENCE}
        paragraphs={[EXPERIENCE_PARAGRAPH_1, EXPERIENCE_PARAGRAPH_2]}
        color={"white"}
        animation={getAnimationOptions(animation)}
        animationHeight={340}
        animationWidth={340}
        bottomImage={{
          src: rdPng,
          width: "385px",
          alt: "Rocktech R+D",
          height: "29px",
        }}
      />
    </div>
  );
};

export default Experience;
