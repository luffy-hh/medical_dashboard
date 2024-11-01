import {
  AiFillCar,
  AiOutlineDashboard,
  AiOutlineHistory,
} from "react-icons/ai";
import { BsFuelPump } from "react-icons/bs";
import {
  Fa42Group,
  FaHandHoldingMedical,
  FaPeopleGroup,
  FaUserGroup,
} from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { MdManageAccounts } from "react-icons/md";
import {
  TbReport,
  TbReportAnalytics,
  TbReportMedical,
  TbReportMoney,
  TbTool,
} from "react-icons/tb";

export const sideBarData = [
  {
    label: "Dashboard",
    icon: <AiOutlineDashboard />,
    key: "/",
  },
  {
    label: "Patients",
    icon: <GrGroup />,
    key: "/patients",
  },
  {
    label: "Daily Medical Records",
    icon: <TbReportMedical />,
    key: "/daily",
  },
  {
    label: "Medical Checkup Records",
    icon: <TbReportAnalytics />,
    key: "/monthly",
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
