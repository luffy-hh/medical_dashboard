import { lazy } from "react";
import Loadable from "../layouts/components/Loadable";
const CreatePatient = Loadable(
  lazy(() => import("../pages/patients/CreatePatient")),
);
const DailyRecords = Loadable(
  lazy(() => import("../pages/dailyRecords/DailyRecords")),
);
const MonthlyRecords = Loadable(
  lazy(() => import("../pages/monthlyRecords/MonthlyRecords")),
);
const CreateMonthlyRecord = Loadable(
  lazy(() => import("../pages/monthlyRecords/CreateMonthlyRecord")),
);
const Home = Loadable(lazy(() => import("../pages/home/Home")));
const Login = Loadable(lazy(() => import("../pages/auth/Login")));
const Patients = Loadable(lazy(() => import("../pages/patients/Patients")));
const DefaultLayout = Loadable(lazy(() => import("../layouts/DefaultLayout")));
const BlankLayout = Loadable(lazy(() => import("../layouts/BlankLayout")));
const CreateDailyRecord = Loadable(
  lazy(() => import("../pages/dailyRecords/CreateDailyRecord")),
);
const CreateDailyBloodSugar = Loadable(
  lazy(() => import("../pages/dailyRecords/CreateDailyBloodSugar")),
);
const CreateDailyBloodPressure = Loadable(
  lazy(() => import("../pages/dailyRecords/CreateDailyBloodPressure")),
);
const CreateDailyTemperature = Loadable(
  lazy(() => import("../pages/dailyRecords/CreateDailyTemperature")),
);
const CreateDailyPulseRate = Loadable(
  lazy(() => import("../pages/dailyRecords/CreateDailyPulseRate")),
);
const CreateDailyBloodOxygen = Loadable(
  lazy(() => import("../pages/dailyRecords/CreateDailyBloodOxygen")),
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
        path: "/daily/blood-sugar/create",
        name: "Create Daily Blood Sugar",
        element: <CreateDailyBloodSugar />,
      },
      {
        path: "/daily/blood-pressure/create",
        name: "Create Daily Blood Pressure",
        element: <CreateDailyBloodPressure />,
      },
      {
        path: "/daily/temperature/create",
        name: "Create Daily Temperature",
        element: <CreateDailyTemperature />,
      },
      {
        path: "/daily/pulse-rate/create",
        name: "Create Daily Pulse Rate",
        element: <CreateDailyPulseRate />,
      },
      {
        path: "/daily/blood-oxygen/create",
        name: "Create Daily Blood Oxygen",
        element: <CreateDailyBloodOxygen />,
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
