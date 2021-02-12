import SocialList from "../_includes/social-list";
import Menu from "../_includes/menu";
import PropTypes from "prop-types";

const CoverFooter = ({ location = "/" }) => (
  <footer className="fixed bottom-0 flex flex-col justify-center content-center w-screen ">
    <SocialList />
    <Menu location={location} showCurrentLocation={false} color={"white"} />
  </footer>
);

CoverFooter.propTypes = {
  location: PropTypes.string,
};

CoverFooter.defaultProps = {
  location: "/",
};

export default CoverFooter;
