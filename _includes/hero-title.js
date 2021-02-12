import PropTypes from "prop-types";

const HeroTitle = ({ children }) => (
  <h1 className="text-6xl text-white text-center">{children}</h1>
);

HeroTitle.propTypes = { children: PropTypes.node.isRequired };

export default HeroTitle;
