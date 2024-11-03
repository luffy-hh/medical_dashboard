import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topbarBg: "gray-700",
  customizerSidebar: false,
  isRTL: false,
  isDark: false,
  isMiniSidebar: false,
  sidebarBg: "white",
  isTopbarFixed: true,
  isMobileSidebar: false,
  isSidebarFixed: true,
  isLayoutHorizontal: false,
  isInnerRightPart: false, // this is for the three column layout right part show hide in table & mobile
  pageTitle: "",
};

const ThemeConfigSlice = createSlice({
  name: "themeConfig",
  initialState,
  reducers: {
    ToggleMiniSidebar: (state) => {
      state.isMiniSidebar = !state.isMiniSidebar;
    },
    setPageTitle: (state, action) => {
      document.title = `${action.payload} | Personal Health Care`;
    },
    ToggleMobileSidebar: (state) => {
      state.isMobileSidebar = !state.isMobileSidebar;
    },
  },
});

export const { ToggleMobileSidebar, ToggleMiniSidebar, setPageTitle } =
  ThemeConfigSlice.actions;
export default ThemeConfigSlice.reducer;
