import { lazy } from "react";
import Loadable from "../layouts/components/Loadable";
const BannerList = Loadable(lazy(() => import("../pages/banner/BannerList")));
const CreateBanner = Loadable(
  lazy(() => import("../pages/banner/CreateBanner")),
);
const UserList = Loadable(lazy(() => import("../pages/users/UserList")));
const CategoryList = Loadable(
  lazy(() => import("../pages/category/CategoryList")),
);
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
const ViewDailyRecords = Loadable(
  lazy(() => import("../pages/dailyRecords/ViewDailyRecords")),
);
const DailyRecordsByCategory = Loadable(
  lazy(() => import("../pages/dailyRecords/DailyRecordByCategory")),
);
const CreateCategory = Loadable(
  lazy(() => import("../pages/category/CreateCategory")),
);
const Medicine = Loadable(lazy(() => import("../pages/medicines/Medicine")));
const CreateMedicine = Loadable(
  lazy(() => import("../pages/medicines/CreateMedicine")),
);
const AppointmentList = Loadable(
  lazy(() => import("../pages/appointments/AppointmentList")),
);
const CreateAppointment = Loadable(
  lazy(() => import("../pages/appointments/CreateAppointment")),
);
const CreateUser = Loadable(lazy(() => import("../pages/users/CreateUser")));
const NotFound = Loadable(lazy(() => import("../pages/errors/NotFound")));
const Routes = [
  {
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
      { path: "category", name: "Categories", element: <CategoryList /> },
      {
        path: "/category/create",
        name: "Create Category",
        element: <CreateCategory />,
      },
      { path: "user", name: "Users", element: <UserList /> },
      {
        path: "/user/create",
        name: "Create User",
        element: <CreateUser />,
      },
      {
        path: "/banner",
        name: "Banner",
        element: <BannerList />,
      },
      {
        path: "/banner/create",
        name: "Create Banner",
        element: <CreateBanner />,
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
        path: "/daily-records",
        name: "Daily Record",
        element: <ViewDailyRecords />,
      },
      {
        path: "/daily-records/:category",
        name: "Daily Record By Category",
        element: <DailyRecordsByCategory />,
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
      {
        path: "/medicine",
        name: "Medicine",
        element: <Medicine />,
      },
      {
        path: "/medicine/create",
        name: "Create Medicine",
        element: <CreateMedicine />,
      },
      {
        path: "/appointment",
        name: "Appointment",
        element: <AppointmentList />,
      },
      {
        path: "/appointment/create",
        name: "Create Appointment",
        element: <CreateAppointment />,
      },
    ],
  },
  {
    // implement error page with react-error-boundary in future
    element: <BlankLayout />,
    children: [
      {
        path: "/auth",
        name: "Login",
        element: <Login />,
      },
      {
        path: "/500",
        name: "Error",
        element: <NotFound />,
      },
    ],
  },
];

export default Routes;
