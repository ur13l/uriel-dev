import { motion } from "framer-motion";
import Lottie from "react-lottie";
import PropTypes from "prop-types";

const InfoSection = ({
  alignText = "left",
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
    <div
      className={`container px-6 md:px-10 lg:px-20 flex mt-20 mb-20 content-center flex-col ${
        alignText === "left" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="flex flex-col w-full md:w-1/2">
        <h2
          className={`text-3xl mb-6 ${
            color != "white" ? "text-blue-dark" : ""
          }`}
        >
          {title}
        </h2>
        {paragraphs.map((paragraph, key) => (
          <p key={key} className="font-regular mb-6">
            {paragraph}
          </p>
        ))}
        {bottomImage && (
          <div>
            <img {...bottomImage} src={bottomImage.src.src} />
          </div>
        )}
      </div>
      <div
        className={`w-full md:w-1/2 flex ${
          alignText === "left" ? "justify-end" : "justify-start"
        }`}
      >
        {animation && (
          <div>
            <Lottie
              options={animation}
              height={animationHeight}
              width={animationWidth}
            />
          </div>
        )}
        {image && (
          <div className="rounded-3xl overflow-hidden">
            <img {...image} src={image.src.src} />
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

InfoSection.propTypes = {
  alignText: PropTypes.string,
  animation: PropTypes.string,
  animationHeight: PropTypes.number,
  animationWidth: PropTypes.number,
  image: PropTypes.object,
  bottomImage: PropTypes.object,
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.array,
  color: PropTypes.string,
};

InfoSection.defaultProps = {
  alignText: "left",
  paragraphs: [],
  color: "white",
};
export default InfoSection;
