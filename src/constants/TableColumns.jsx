import { lazy, Suspense } from "react";
import { FaEdit } from "react-icons/fa";
import { FaAngleDown, FaEye, FaTrashCan } from "react-icons/fa6";
import Loader from "../components/common/Loader";
const Dropdown = lazy(() => import("antd/lib/dropdown"));

export const patientsTableColumns = (nav) => {
  return [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title:"Blood Group",
      dataIndex: "blood_group",
      key: "blood_group",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "Height",
      dataIndex: "height",
      key: "height",
    },

    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Actions",
      key: "action",
      render: (text, record) => {
        const menuItems = [
          {
            key: "view",
            label: (
              <div
                onClick={() => nav(`${record.id}`, { state: { ...record } })}
                className=" flex gap-2 items-center"
              >
                <FaEye /> <span className=" inline-block">View</span>
              </div>
            ),
          },
          {
            key: "edit",
            label: (
              <div
                className=" flex gap-2 items-center"
                onClick={() =>
                  nav(`${record.id}/edit`, { state: { ...record } })
                }
              >
                <FaEdit /> <span className=" inline-block">Edit</span>
              </div>
            ),
          },
          {
            key: "delete",
            label: (
              <div
                className=" flex gap-2 items-center"
                onClick={() => {
                  //   setOpen(true);
                  //   setMeterId(record.id);
                }}
              >
                <FaTrashCan /> <span className=" inline-block">Delete</span>
              </div>
            ),
          },
        ];
        // console.log(record);
        return (
          <Suspense fallback={<Loader />}>
            <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
              <a
                className="ant-dropdown-link flex items-center"
                onClick={(e) => e.preventDefault()}
              >
                Actions{" "}
                <span>
                  <FaAngleDown />
                </span>
              </a>
            </Dropdown>
          </Suspense>
        );
      },
    },
  ];
};

export const dailyRecordsTableColumns = (nav) => {
  return [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    // {
    //   title: "Time",
    //   dataIndex: "time",
    //   key: "time",
    // },
    {
      title: "Diabetes",
      align: "center",
      children: [
        {
          title: "Before Eating",
          dataIndex: "before_eating",
          key: "before_eating",
        },
        {
          title: "After Eating",
          dataIndex: "after_eating",
          key: "after_eating",
        },
      ],
    },
    {
      title: "Blood Pressure",
      align: "center",
      children: [
        {
          title: "Systolic",
          dataIndex: "systolic",
          key: "systolic",
        },
        {
          title: "Diastolic",
          dataIndex: "diastolic",
          key: "diastolic",
        },
      ],
    },
    {
      title: "Temperature",
      dataIndex: "temperature",
      key: "temperature",
    },
    {
      title: "SPO2",
      dataIndex: "spo2",
      key: "spo2",
    },
    {
      title: "Pulse",
      dataIndex: "pulse",
      key: "pulse",
    },
    {
      title: "Night Injection",
      dataIndex: "night_injection",
      key: "night_injection",
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
      key: "remarks",
    },
    {
      title: "Actions",
      key: "action",
      render: (text, record) => {
        const menuItems = [
          {
            key: "view",
            label: (
              <div
                onClick={() => nav(`${record.id}`, { state: { ...record } })}
                className=" flex gap-2 items-center"
              >
                <FaEye /> <span className=" inline-block">View</span>
              </div>
            ),
          },
          {
            key: "edit",
            label: (
              <div
                className=" flex gap-2 items-center"
                onClick={() =>
                  nav(`${record.id}/edit`, { state: { ...record } })
                }
              >
                <FaEdit /> <span className=" inline-block">Edit</span>
              </div>
            ),
          },
          {
            key: "delete",
            label: (
              <div
                className=" flex gap-2 items-center"
                onClick={() => {
                  //   setOpen(true);
                  //   setMeterId(record.id);
                }}
              >
                <FaTrashCan /> <span className=" inline-block">Delete</span>
              </div>
            ),
          },
        ];
        // console.log(record);
        return (
          <Suspense fallback={<Loader />}>
            <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
              <a
                className="ant-dropdown-link flex items-center"
                onClick={(e) => e.preventDefault()}
              >
                Actions{" "}
                <span>
                  <FaAngleDown />
                </span>
              </a>
            </Dropdown>
          </Suspense>
        );
      },
    },
  ];
};

export const monthlyRecordsTableColumns = (nav) => {
  return [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Patient Name",
      dataIndex: "patient_name",
      key: "patient_name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
  ];
};
