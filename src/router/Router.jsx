import { lazy } from "react";
import Loadable from "../layouts/components/Loadable";
const BannerList = Loadable(lazy(() => import("../pages/banner/BannerList")));
const CreateBanner = Loadable(
  lazy(() => import("../pages/banner/CreateBanner")),
);
const BannerDetails = Loadable(
  lazy(() => import("../pages/banner/BannerDetails")),
);
const UpdateBanner = Loadable(
  lazy(() => import("../pages/banner/UpdateBanner")),
);
const UserList = Loadable(lazy(() => import("../pages/users/UserList")));
const UserDetails = Loadable(lazy(() => import("../pages/users/UserDetails")));
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
const MonthlyRecordDetails = Loadable(
  lazy(() => import("../pages/monthlyRecords/MonthlyRecordDetails.jsx")),
);
const UpdateMonthlyRecord = Loadable(
  lazy(() => import("../pages/monthlyRecords/UpdateMonthlyRecord")),
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
const DailyRecordDetails = Loadable(
  lazy(() => import("../pages/dailyRecords/DailyRecordDetails")),
);
const UpdateDailyRecord = Loadable(
  lazy(() => import("../pages/dailyRecords/UpdateDailyRecord")),
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
const UpdateCategory = Loadable(
  lazy(() => import("../pages/category/UpdateCategory")),
);
const Medicine = Loadable(lazy(() => import("../pages/medicines/Medicine")));
const UpdateMedicine = Loadable(
  lazy(() => import("../pages/medicines/UpdateMedicine")),
);
const CreateMedicine = Loadable(
  lazy(() => import("../pages/medicines/CreateMedicine")),
);
const AppointmentList = Loadable(
  lazy(() => import("../pages/appointments/AppointmentList")),
);
const AppointmentDetails = Loadable(
  lazy(() => import("../pages/appointments/AppointmentDetails")),
);
const UpdateAppointment = Loadable(
  lazy(() => import("../pages/appointments/UpdateAppointment")),
);
const CreateAppointment = Loadable(
  lazy(() => import("../pages/appointments/CreateAppointment")),
);
const PatientDetails = Loadable(
  lazy(() => import("../pages/patients/PatientDetails")),
);
const EditPatient = Loadable(
  lazy(() => import("../pages/patients/EditPatient")),
);
const CreateUser = Loadable(lazy(() => import("../pages/users/CreateUser")));
const UpdateUser = Loadable(lazy(() => import("../pages/users/UpdateUser")));
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
        path: "/patient",
        name: "Patients",
        element: <Patients />,
      },
      {
        path: "/patient/:id",
        name: "Patient Details",
        element: <PatientDetails />,
      },
      {
        path: "/patient/:id/edit",
        name: "Edit Patient",
        element: <EditPatient />,
      },
      { path: "category", name: "Categories", element: <CategoryList /> },
      {
        path: "/category/create",
        name: "Create Category",
        element: <CreateCategory />,
      },
      {
        path: "/category/:id/edit",
        name: "Edit Category",
        element: <UpdateCategory />,
      },
      { path: "user", name: "Users", element: <UserList /> },
      { path: "user/:id", name: "User Details", element: <UserDetails /> },
      { path: "user/:id/edit", name: "Edit User", element: <UpdateUser /> },
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
        path: "/banner/:id",
        name: "Banner Details",
        element: <BannerDetails />,
      },
      {
        path: "/banner/:id/edit",
        name: "Edit Banner",
        element: <UpdateBanner />,
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
        path: "/daily/:name/create",
        name: "Create Records",
        element: <CreateDailyRecord />,
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
        path: "/daily-records/:id/details",
        name: "Daily Record Details",
        element: <DailyRecordDetails />,
      },
      {
        path: "/daily-records/:id/edit",
        name: "Edit Daily",
        element: <UpdateDailyRecord />,
      },
      {
        path: "/lab-records",
        name: "Monthly",
        element: <MonthlyRecords />,
      },
      {
        path: "/lab-records/:id",
        name: "Lab Record Details",
        element: <MonthlyRecordDetails />,
      },
      {
        path: "/lab-records/:id/edit",
        name: "Edit Monthly",
        element: <UpdateMonthlyRecord />,
      },
      {
        path: "/lab-records/create",
        name: "Create Monthly",
        element: <CreateMonthlyRecord />,
      },
      {
        path: "/medicine",
        name: "Medicine",
        element: <Medicine />,
      },
      {
        path: "/medicine/:id/edit",
        name: "Medicine Update",
        element: <UpdateMedicine />,
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
      {
        path: "/appointment/:id",
        name: "Appointment Details",
        element: <AppointmentDetails />,
      },
      {
        path: "/appointment/:id/edit",
        name: "Edit Appointment",
        element: <UpdateAppointment />,
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
