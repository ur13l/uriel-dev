import PropTypes from "prop-types";
import GitHub from "../_assets/svg/github";
import Twitter from "../_assets/svg/twitter";
import LinkedIn from "../_assets/svg/linkedin";
import Mail from "../_assets/svg/mail";

const liClass = "w-7 h-7 m-6";

const SocialList = ({ color = "#ffffff" }) => (
  <ul className="flex flex-row justify-center">
    <li className={liClass}>
      <a href="https://github.com/ur13l" target="_blank">
        <GitHub color={color} />
      </a>
    </li>
    <li className={liClass}>
      <a href="https://twitter.com/Uriel_I7" target="_blank">
        <Twitter color={color} />
      </a>
    </li>
    <li className={liClass}>
      <a href="https://linkedin.com/in/uriel-infante/" target="_blank">
        <LinkedIn color={color} />
      </a>
    </li>
    <li className={liClass}>
      <a href="mailto:ur13l.infante@gmail.com" target="_blank">
        <Mail color={color} />
      </a>
    </li>
  </ul>
);

SocialList.propTypes = {
  color: PropTypes.string,
};

SocialList.defaultProps = {
  color: "#ffffff",
};

export default SocialList;
