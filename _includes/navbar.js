import { useReducer } from "react";
import Strings from "../_data/strings-es";
import Link from "next/link";
import Search from "../_assets/svg/search";
import SearchPanel from "../_includes/search-panel";

const liItemClass = (currentLocation, targetLocation) =>
  `flex-1 md:flex-initial p-6 text-center ${
    currentLocation === targetLocation && "font-menu-bold hidden md:block"
  }`;

const Navbar = ({ showMenu = true, color = "white", location = "/" }) => {
  const {
    MENU: { HOME, ABOUT_ME, BLOG },
  } = Strings;

  const [search, toggleSearch] = useReducer((val) => !val, false);
  return (
    <>
      <nav
        className={`absolute top-0 flex flex-row font-menu justify-center w-screen text-${color}`}
      >
        <div className="container flex flex-row justify-left md:justify-center relative">
          {showMenu && (
            <ul className={`flex flex-row justify-center text-${color}`}>
              <li className={liItemClass(location, "/")}>
                <Link href="/">{HOME}</Link>
              </li>
              <li className={liItemClass(location, "/sobre-mi")}>
                <Link href="/sobre-mi">{ABOUT_ME}</Link>
              </li>
              <li className={liItemClass(location, "/blog")}>
                <Link href="/blog">{BLOG}</Link>
              </li>
            </ul>
          )}
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

export default Navbar;
