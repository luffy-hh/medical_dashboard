import { lazy, Suspense, useEffect } from "react";
// import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
// import Sidebar from "./components/sidebar/Sidebar";
const Sidebar = lazy(() => import("./components/sidebar/Sidebar"));
import { Layout } from "antd";
import withRouter from "../components/hoc/withRouter.jsx";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getPatients } from "../app/Patients/patientSlice.jsx";
import { getCategories } from "../app/category/categorySlice.jsx";
import { getMasterData } from "../app/masterData/masterDataSlice.jsx";
const TopBar = lazy(() => import("./components/topbar/TopBar"));

const Loader = lazy(() => import("../components/common/Loader"));

const { Content } = Layout;

const DefaultLayout = ({ router }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log(isAuthenticated && Object.keys(user).length > 0);

  useEffect(() => {
    if (!isAuthenticated || Object.keys(user).length === 0) {
      router.nav("/auth");
    }
  }, [isAuthenticated, user, router]);
  useEffect(() => {
    if (isAuthenticated && Object.keys(user).length > 0) {
      dispatch(getPatients({ api: "/family_member_list" }));
      dispatch(getCategories({ api: "/check_category_list" }));
      dispatch(getMasterData({ api: "/master_data" }));
    }
  }, [isAuthenticated, user, dispatch]);

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
DefaultLayout.propTypes = {
  router: PropTypes.object,
};
const DefaultLayoutWithRouter = withRouter(DefaultLayout);

export default DefaultLayoutWithRouter;
