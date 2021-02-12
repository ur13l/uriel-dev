import Link from "next/link";
import Strings from "../_data/strings-es";
import PropTypes from "prop-types";

const liItemClass = (currentLocation, targetLocation, showCurrentLocation) =>
  `flex-1 md:flex-initial p-6 text-center ${
    currentLocation === targetLocation &&
    `font-menu-bold hidden ${showCurrentLocation && "md:block"}`
  }`;

const Menu = ({
  color = "white",
  location = "/",
  showCurrentLocation = true,
}) => {
  const {
    MENU: { HOME, ABOUT_ME, BLOG },
  } = Strings;
  return (
    <ul className={`flex flex-row justify-center font-menu text-${color}`}>
      <li className={liItemClass(location, "/", showCurrentLocation)}>
        <Link href="/">{HOME}</Link>
      </li>
      <li className={liItemClass(location, "/sobre-mi", showCurrentLocation)}>
        <Link href="/sobre-mi">{ABOUT_ME}</Link>
      </li>
      <li className={liItemClass(location, "/blog", showCurrentLocation)}>
        <Link href="/blog">{BLOG}</Link>
      </li>
    </ul>
  );
};

Menu.propTypes = {
  color: PropTypes.string,
  location: PropTypes.string,
  showCurrentLocation: PropTypes.bool,
};

Menu.defaultProps = {
  color: "white",
  location: "/",
  showCurrentLocation: true,
};

export default Menu;
