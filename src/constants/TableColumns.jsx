import { lazy, Suspense } from "react";
import { FaEdit } from "react-icons/fa";
import { FaAngleDown, FaEye, FaTrashCan } from "react-icons/fa6";
import Loader from "../components/common/Loader";
import dayjs from "dayjs";

const Dropdown = lazy(() => import("antd/lib/dropdown"));

export const patientsTableColumns = (nav, setId, setOpen) => {
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
      title: "Blood Group",
      dataIndex: "blood_type",
      key: "blood_type",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
      align: "right",
      render: (text) => {
        return text + " lbs";
      },
    },
    {
      title: "Height",
      dataIndex: "height",
      key: "height",
      align: "right",
    },

    {
      title: "Age",
      dataIndex: "dob",
      key: "dob",
      align: "right",
      render: (text) => {
        return dayjs().diff(dayjs(text, "DD-MM-YYYY"), "years");
      },
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
                  setOpen(true);
                  setId(record.id);
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
      dataIndex: "lab_date",
      key: "lab_date",
    },
    {
      title: "Hospital Name",
      dataIndex: "lab_name",
      key: "lab_name",
    },
    {
      title: "Patient Name",
      dataIndex: "patient_name",
      key: "patient_name",
    },
    {
      title: "Category",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Created By",
      dataIndex: "cby",
      key: "cby",
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
        return (
          <Suspense fallback={<Loader />}>
            <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
              <a
                className="ant-dropdown-link flex items-center"
                onClick={(e) => e.preventDefault()}
              >
                Actions
              </a>
            </Dropdown>
          </Suspense>
        );
      },
    },
  ];
};

export const bannerTableColumns = (nav) => {
  return [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Active/Inactive",
      dataIndex: "is_active",
      key: "is_active",
      render: (text, record, index) => {
        if (record.is_active == 1) {
          return <span className="text-green-500">Active</span>;
        } else {
          return <span className="text-red-500">Inactive</span>;
        }
      },
    },
    {
      title: "Created By",
      dataIndex: "cby",
      key: "cby",
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

export const bloodPressureTableColumns = () => {
  return [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
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
      title: "Remarks",
      key: "remarks",
      render: (_, record, rowIndex) => {
        console.log(record);
        if (record.systolic < 90 || record.diastolic < 60) {
          return "Low Blood Pressure";
        } else if (
          (record.systolic > 120 && record.systolic <= 140) ||
          (record.diastolic > 80 && record.diastolic <= 90)
        ) {
          return "Elevated Blood Pressure";
        } else if (record.systolic > 140 || record.diastolic > 90) {
          return "High Blood Pressure";
        } else {
          return "Normal Blood Pressure";
        }
      },
    },
  ];
};

export const categoryTableColumns = (nav) => {
  return [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "cat_name",
      key: "cat_name",
    },
    {
      title: "Created By",
      dataIndex: "cby",
      key: "cby",
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
                Actions
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

export const userTableColumns = (nav) => {
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
      title: "Login ID",
      dataIndex: "loginId",
      key: "loginId",
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
                Actions
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

export const medicineTableColumns = (nav) => {
  return [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Patient Name",
      dataIndex: "patientName",
      key: "patientName",
    },
    {
      title: "Take Period",
      dataIndex: "day_type",
      key: "day_type",
    },
    {
      title: "Before/After Meal",
      dataIndex: "meal_type",
      key: "meal_type",
    },
    {
      title: "Take Time",
      dataIndex: "reminder_time",
      key: "reminder_time",
    },
    {
      title: "Created By",
      dataIndex: "cby",
      key: "cby",
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
                Actions
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

export const appointmentTableColumns = (nav) => {
  return [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Hospital Name",
      dataIndex: "check_location",
      key: "check_location",
    },
    {
      title: "Check Category",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Appointment Date",
      dataIndex: "appointment_date",
      key: "appointment_date",
    },
    {
      title: "Appointment Time",
      dataIndex: "appointment_time",
      key: "appointment_time",
    },
    {
      title: "Patient Name",
      dataIndex: "patient_name",
      key: "patient_name",
    },
    {
      title: "Reminder Time",
      dataIndex: "reminder_time",
      key: "reminder_time",
    },
    {
      title: "Created By",
      dataIndex: "cby",
      key: "cby",
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
                Actions
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
