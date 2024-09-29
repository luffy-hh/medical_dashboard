import React, { lazy } from "react";
import PropsTypes from "prop-types";
import { useSelector } from "react-redux";
const LightTheme = lazy(() => import("./LightTheme"));
const DarkTheme = lazy(() => import("./DarkTheme"));

const ThemeSelector = ({ children }) => {
  const isDarkMode = useSelector((state) => state.themeConfig.isDark);
  return (
    <>
      <>{isDarkMode ? <DarkTheme /> : <LightTheme />}</>
      {children}
    </>
  );
};

ThemeSelector.propTypes = {
  children: PropsTypes.node,
};
export default ThemeSelector;
