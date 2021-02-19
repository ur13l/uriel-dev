import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useReducer,
} from "react";
import { compose } from "../_utils/compose";

const BrowserContext = createContext();

/**
 * Hook para controlar los eventos del scroll de acuerdo a diferentes elementos de la página
 * @returns any
 */
export const useBrowserInfo = () => useContext(BrowserContext);

/** Funciones auxiliares **/
const documentReady = () => document.readyState === "complete";
const getMobileSize = () => "mobile";
const getTabletSize = () => "tablet";
const getDesktopSize = () => "desktop";

const getWindowData = (data) => ({
  ...data,
  windowInnerWidth: window.innerWidth,
  windowInnerHeight: window.innerHeight,
});

const getDarkMode = (data) => ({
  ...data,
  darkMode: new Date().getHours() >= 19 || new Date().getHours() <= 6,
});

const getResponsiveData = (data) => ({
  ...data,
  screenSize:
    data.windowInnerWidth <= 768
      ? getMobileSize()
      : data.windowInnerWidth <= 998
      ? getTabletSize()
      : getDesktopSize(),
});

const getInitialResponsiveData = (data) => ({
  ...data,
  initialScreenSize:
    data.windowInnerWidth <= 768
      ? getMobileSize()
      : data.windowInnerWidth <= 998
      ? getTabletSize()
      : getDesktopSize(),
});

const isLandscape = (data) => ({
  ...data,
  isLandscape:
    data.windowInnerHeight < 500 &&
    data.windowInnerHeight < data.windowInnerWidth,
});

const setListeners = (onResize) => {
  //window.addEventListener("scroll", onScroll, true);
  window.addEventListener("resize", onResize, true);
  return () => {
    //window.removeEventListener("scroll", onScroll, true);
    window.removeEventListener("resize", onResize, true);
  };
};

/** BrowserProvider Component **/
export const BrowserProvider = ({ children }) => {
  const [data, setData] = useReducer((data, values) => {
    return { ...data, ...values };
  }, {});

  // const onScroll = useCallback(() => {
  //   setData(getScrollingData());
  // }, []);

  const onResize = useCallback(() => {
    setData(compose(getWindowData, getResponsiveData, isLandscape)({}));
  }, [data]);

  useLayoutEffect(() => {
    setData(
      compose(
        getDarkMode,
        getWindowData,
        getInitialResponsiveData,
        getResponsiveData,
        isLandscape
      )()
    );
    return setListeners(onResize);
  }, []);

  return (
    <BrowserContext.Provider value={{ ...data }}>
      {children}
    </BrowserContext.Provider>
  );
};
