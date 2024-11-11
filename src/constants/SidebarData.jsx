import { AiOutlineHistory } from "react-icons/ai";
import { GrDashboard, GrGroup } from "react-icons/gr";
import { MdManageAccounts } from "react-icons/md";
import {
  TbCarouselHorizontal,
  TbCategory,
  TbReportAnalytics,
  TbReportMedical,
} from "react-icons/tb";
import { GiMedicinePills } from "react-icons/gi";

export const sideBarData = [
  {
    label: "Dashboard",
    icon: <GrDashboard />,
    key: "/",
  },
  {
    label: "Create Daily Checkup",
    icon: <TbReportMedical />,
    key: "/daily",
  },
  {
    label: "Daily Checkup Records",
    icon: <AiOutlineHistory />,
    key: "/daily-records",
  },
  {
    label: "Lab Checkup Records",
    icon: <TbReportAnalytics />,
    key: "/lab-records",
  },
  {
    label: "Patients",
    icon: <GrGroup />,
    key: "/patient",
  },
  {
    label: "Medicines",
    icon: <GiMedicinePills />,
    key: "/medicine",
  },
  {
    label: "Appointments",
    icon: <TbReportMedical />,
    key: "/appointment",
  },
  {
    label: "Banners",
    icon: <TbCarouselHorizontal />,
    key: "/banner",
  },
  {
    label: "Categories",
    icon: <TbCategory />,
    key: "/category",
  },
  {
    label: "Users",
    icon: <MdManageAccounts />,
    key: "/user",
  },

  //   {
  //     label: "Daily Reports",
  //     icon: <TbReport />,
  //     key: "/reports",
  //   },
  //   { label: "Fuel Fill Records", icon: <BsFuelPump />, key: "/fuel" },
  //   {
  //     label: "Fuel Reports",
  //     icon: <TbReportMoney />,
  //     key: "/fuel-report",
  //   },
  //   {
  //     label: "Maintenance",

  //     icon: <TbTool />,
  //     key: "/maintenance",
  //   },
  //   {
  //     label: "User Management",
  //     icon: <MdManageAccounts />,
  //     key: "/user-management",
  //   },
];
