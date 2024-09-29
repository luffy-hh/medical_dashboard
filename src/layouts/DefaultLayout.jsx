import { lazy, Suspense } from "react";
// import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
// import Sidebar from "./components/sidebar/Sidebar";
const Sidebar = lazy(() => import("./components/sidebar/Sidebar"));
import { Layout } from "antd";
const TopBar = lazy(() => import("./components/topbar/Topbar"));

const Loader = lazy(() => import("../components/common/Loader"));

const { Content } = Layout;

const DefaultLayout = () => {
  return (
    <Layout hasSider>
      <Suspense fallback={<Loader />}>
        <Sidebar />
      </Suspense>
      <Layout>
        <TopBar />
        <Content>
          <Outlet />
        </Content>
      </Layout>
      {/*<NavBar />*/}
      {/*<h1 className="fixed text-2xl font-bold w-full md:w-[20rem] left-0 py-4 text-center text-blue-700 bg-slate-100 z-10">*/}
      {/*  Linn Car DB*/}
      {/*</h1>*/}
      {/*<SideBar />*/}
    </Layout>
  );
};

export default DefaultLayout;
