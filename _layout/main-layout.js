import PropTypes from "prop-types";
import Navbar from "../_includes/navbar";
import Footer from "../_includes/footer";
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <>
      <Navbar location={pathname} color={"var(--blue-dark)"} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
