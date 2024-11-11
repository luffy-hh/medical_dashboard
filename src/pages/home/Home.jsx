import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../app/ThemeConfig/themeConfigSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle("Dashboard"));
  });
  return <div className="text-3xl">Home</div>;
};

export default Home;
