import PropTypes from "prop-types";
import Navbar from "../_includes/navbar";
import Footer from "../_includes/footer";
import { useRouter } from "next/router";
import { BrowserProvider } from "../_hooks/use-browser-info";

const MainLayout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <BrowserProvider>
      <main className="bg-white">
        <Navbar location={pathname} color={"var(--blue-dark)"} />
        <div className="w-full overflow-x-hidden">{children}</div>
        <Footer location={pathname} />
      </main>
    </BrowserProvider>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
