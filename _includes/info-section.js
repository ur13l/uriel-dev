import { motion } from "framer-motion";
import Lottie from "react-lottie";

const InfoSection = ({
  align = "left",
  animation,
  animationHeight,
  animationWidth,
  image,
  bottomImage,
  title,
  paragraphs = [],
  color = "white",
}) => (
  <motion.div
    initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, z: 1, opacity: 1 }}
    transition={{ duration: 1, ease: "easeIn" }}
    className={`flex z-10 flex-row mt-10 mb-10 justify-center content-center text-${color}`}
  >
    <div className="container flex mt-20 mb-20 content-center">
      <div className="flex flex-col w-1/2">
        <h2 className="text-3xl mb-6">{title}</h2>
        {paragraphs.map((paragraph, key) => (
          <p key={key} className="font-regular mb-6">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="w-1/2">
        <Lottie
          options={animation}
          height={animationHeight}
          width={animationWidth}
        />
      </div>
    </div>
  </motion.div>
);

export default InfoSection;
