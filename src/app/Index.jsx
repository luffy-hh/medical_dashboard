import { configureStore } from "@reduxjs/toolkit";
import ThemeConfigSlice from "./ThemeConfig/themeConfigSlice";

export const store = configureStore({
  reducer: {
    themeConfig: ThemeConfigSlice,
  },
});

export default store;
