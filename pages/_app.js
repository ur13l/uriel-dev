import "../styles/globals.css";
import "../configure-amplify";
import "tailwindcss/tailwind.css";
import "vditor/src/assets/scss/index.scss";
import PropTypes from "prop-types";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
