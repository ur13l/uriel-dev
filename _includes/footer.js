import Menu from "./menu";
import SocialList from "./social-list";
import PropTypes from "prop-types";

const Footer = ({ location = "/" }) => (
  <footer className="bg-blue-dark flex justify-center text-white">
    <div className="flex flex-col md:flex-row justify-center content-center container px-6 md:px-10 lg:px-20">
      <span className="flex-grow self-center py-6 order-3 md:order-1">
        Copyright® {new Date().getFullYear()}
      </span>
      <div className="order-1 md:order-2">
        <Menu location={location} showCurrentLocation={false} />
      </div>
      <div className="order-2 md:order-3">
        <SocialList />
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  location: PropTypes.string,
};

Footer.defaultProps = {
  location: "/",
};

export default Footer;
