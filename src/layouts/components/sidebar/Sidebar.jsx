import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { sideBarData } from "../../../constants/SidebarData";
const { Sider, Content } = Layout;

const Sidebar = () => {
  const nav = useNavigate();
  const location = useLocation();
  const activeBg = useSelector((state) => state.themeConfig.sidebarBg);
  const isFixed = useSelector((state) => state.themeConfig.isSidebarFixed);
  const currentURL = location.pathname.split("/").slice(0, -1).join("/");
  const handleMenuClick = (e) => {
    console.log(e);
    nav(e.key);
  };
  return (
    <Sider
      width={250}
      style={{
        minHeight: "100vh",
        maxHeight: "auto",
        backgroundColor: "#343a3f",
      }}
      className="custom-sider"
      breakpoint="md"
      zeroWidthTriggerStyle={{ top: "10px" }}
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        // console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        // console.log(collapsed, type);
      }}
    >
      <div
        className=" text-white text-center px-5 py-7 cursor-pointer bg-[#0769b4]"
        onClick={() => nav("/")}
      >
        Medical Dashboard
      </div>
      <Menu
        style={{
          backgroundColor: "#343a3f ",
        }}
        theme="dark"
        mode="inline"
        selectedKeys={`/${location.pathname.split("/")[1]}`}
        items={sideBarData}
        onClick={handleMenuClick}
      />
    </Sider>
  );
};

export default Sidebar;