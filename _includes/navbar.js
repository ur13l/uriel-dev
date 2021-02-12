import { useReducer } from "react";
import Search from "../_assets/svg/search";
import SearchPanel from "../_includes/search-panel";
import Menu from "../_includes/menu";
import PropTypes from "prop-types";

const Navbar = ({ showMenu = true, color = "white" }) => {
  const [search, toggleSearch] = useReducer((val) => !val, false);
  return (
    <>
      <nav
        className={`absolute top-0 flex flex-row justify-center w-screen text-${color}`}
      >
        <div className="container flex flex-row justify-left md:justify-center relative">
          {showMenu && <Menu color={color} />}
          <span
            onClick={toggleSearch}
            className="absolute right-0 w-7 h-7 m-6 cursor-pointer text-white"
          >
            <Search />
          </span>
        </div>
      </nav>
      {search && <SearchPanel />}
    </>
  );
};

Navbar.propTypes = {
  showMenu: PropTypes.bool,
  color: PropTypes.string,
};

Navbar.defaultProps = {
  showMenu: true,
  color: "white",
};

export default Navbar;
