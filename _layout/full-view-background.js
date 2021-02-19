import PropTypes from "prop-types";

const FullViewBackground = ({
  children,
  layerColor,
  opacity = 100,
  backgroundImage,
}) => (
  <main
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
    className="w-screen my-auto bg-cover bg-center bg-img"
  >
    <div
      className={`flex-col flex w-screen h-screen ${layerColor} bg-opacity-${opacity} white content-center justify-center`}
    >
      {children}
    </div>
  </main>
);

FullViewBackground.propTypes = {
  children: PropTypes.node.isRequired,
  layerColor: PropTypes.string.isRequired,
  opacity: PropTypes.number,
  backgroundImage: PropTypes.string.isRequired,
};

FullViewBackground.defaultProps = {
  opacity: 100,
};
export default FullViewBackground;
