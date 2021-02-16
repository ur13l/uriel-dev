import PropTypes from "prop-types";
import Navbar from "../_includes/navbar";
import Footer from "../_includes/footer";

const MainLayout = ({ children }) => (
  <>
    <Navbar color={"var(--blue-dark)"} />
    <main>{children}</main>
    <Footer />
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
