import { motion } from "framer-motion";
import Strings from "../_data/strings-es";
import InfoSection from "./info-section";
import animation from "../_assets/animations/idea.json";
import { useBrowserInfo } from "../_hooks/use-browser-info";

const getAnimationOptions = (animation) => ({
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});

const Community = () => {
  const {
    EXPERIENCE: { EXPERIENCE, EXPERIENCE_PARAGRAPH_1, EXPERIENCE_PARAGRAPH_2 },
  } = Strings;

  const { screenSize } = useBrowserInfo();
  return (
    <div className="relative">
      <motion.div
        initial={{ x: "-110vw", y: "-60px", skewY: -2 }}
        animate={{ x: screenSize === "mobile" ? "0" : "-100px" }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="absolute top-0 h-full w-full bg-blue-light"
      />

      <InfoSection
        title={EXPERIENCE}
        paragraphs={[EXPERIENCE_PARAGRAPH_1, EXPERIENCE_PARAGRAPH_2]}
        color={"black"}
        alignText="right"
        animation={getAnimationOptions(animation)}
        animationHeight={340}
        animationWidth={340}
      />
    </div>
  );
};

export default Community;
