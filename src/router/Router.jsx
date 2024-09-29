import { lazy } from "react";
import Loadable from "../layouts/components/Loadable";
const CreatePatient = Loadable(
  lazy(() => import("../pages/patients/CreatePatient"))
);
const DailyRecords = Loadable(
  lazy(() => import("../pages/dailyRecords/DailyRecords"))
);
const MonthlyRecords = Loadable(
  lazy(() => import("../pages/monthlyRecords/MonthlyRecords"))
);
const CreateMonthlyRecord = Loadable(
  lazy(() => import("../pages/monthlyRecords/CreateMonthlyRecord"))
);
const Home = Loadable(lazy(() => import("../pages/home/Home")));
const Login = Loadable(lazy(() => import("../pages/auth/Login")));
const Patients = Loadable(lazy(() => import("../pages/patients/Patients")));
const DefaultLayout = Loadable(lazy(() => import("../layouts/DefaultLayout")));
const BlankLayout = Loadable(lazy(() => import("../layouts/BlankLayout")));
const CreateDailyRecord = Loadable(
  lazy(() => import("../pages/dailyRecords/CreateDailyRecord"))
);
const Routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        name: "Dashboard",
        element: <Home />,
      },
      {
        path: "/patients",
        name: "Patients",
        element: <Patients />,
      },
      {
        path: "/patients/create",
        name: "Create Patients",
        element: <CreatePatient />,
      },
      {
        path: "/daily",
        name: "Daily",
        element: <DailyRecords />,
      },
      {
        path: "/daily/create",
        name: "Create Daily",
        element: <CreateDailyRecord />,
      },
      {
        path: "/monthly",
        name: "Monthly",
        element: <MonthlyRecords />,
      },
      {
        path: "/monthly/create",
        name: "Create Monthly",
        element: <CreateMonthlyRecord />,
      },
    ],
  },
  {
    path: "/auth",
    element: <BlankLayout />,
    children: [
      {
        path: "/auth",
        name: "Login",
        element: <Login />,
      },
    ],
  },
];

export default Routes;
