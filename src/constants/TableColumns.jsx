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

export const dailyRecordsTableColumns = () => {
  return [
    {
      title: "စဥ်",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "ရက်စွဲ",
      dataIndex: "date",
      key: "date",
    },
    // {
    //   title: "Time",
    //   dataIndex: "time",
    //   key: "time",
    // },
    {
      title: "ဆီးချိူ",
      align: "center",
      children: [
        {
          title: "မစားမှီ",
          dataIndex: "Before Meal",
          key: "Before Meal",
          align: "right",
          render: (text) => {
            return text ? text + " mg/dl" : "-";
          },
        },
        {
          title: "စားပြီး",
          dataIndex: "After Meal",
          key: "Before Meal",
          align: "right",
          render: (text) => {
            return text ? text + " mg/dl" : "-";
          },
        },
      ],
    },
    {
      title: "သွေးပေါင်ချိန်",
      align: "center",
      children: [
        {
          title: "အပေါ်သွေး",
          dataIndex: "Systolic",
          key: "Systolic",
          align: "right",
          render: (text) => {
            return text ? text + " mmHg" : "-";
          },
        },
        {
          title: "အောက်သွေး",
          dataIndex: "Diastolic",
          key: "Diastolic",
          align: "right",
          render: (text) => {
            return text ? text + " mmHg" : "-";
          },
        },
      ],
    },
    {
      title: "အပူချိန်",
      dataIndex: "Temperature",
      key: "Temperature",
      align: "right",
      render: (text) => {
        return text ? text + " °F" : "-";
      },
    },
    {
      title: "SPO2",
      dataIndex: "Blood Oxygen",
      key: "Blood Oxygen",
      align: "right",
      render: (text) => {
        return text ? text + " mg/dl" : "-";
      },
    },
    {
      title: "သွေးခုန်နှုန်း",
      dataIndex: "Pulse Rate",
      key: "Pulse Rate",
      align: "right",
      render: (text) => {
        return text ? text + " bpm" : "-";
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

export const bannerTableColumns = (nav, setId, setOpen) => {
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
    // {
    //   title: "Active/Inactive",
    //   dataIndex: "is_active",
    //   key: "is_active",
    //   render: (text, record, index) => {
    //     if (record.is_active == 1) {
    //       return <span className="text-green-500">Active</span>;
    //     } else {
    //       return <span className="text-red-500">Inactive</span>;
    //     }
    //   },
    // },
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

export const bloodPressureTableColumns = () => {
  return [
    {
      title: "Day",
      dataIndex: "record_date",
      key: "record_date",
    },
    {
      title: "Blood Pressure",
      align: "center",
      children: [
        {
          title: "Systolic",
          dataIndex: "value",
          key: "value",
          render: (text) => {
            return text === ""
              ? "-"
              : text.split("/")[0].replace("Systolic", "");
          },
        },
        {
          title: "Diastolic",
          dataIndex: "value",
          key: "value",
          render: (text) => {
            return text === ""
              ? "-"
              : text.split("/")[1].replace("Diastolic", "");
          },
        },
      ],
    },
    {
      title: "Remarks",
      dataIndex: "value",
      key: "value",
      render: (_, record) => {
        // console.log(record);
        const systolic =
          record.value !== "" &&
          Number(record.value.split("/")[0].replace("Systolic", ""));
        console.log(systolic);

        const diastolic =
          record.value !== "" &&
          Number(record.value.split("/")[1].replace("Diastolic", ""));
        if (record.value !== "" && (systolic < 90 || diastolic < 60)) {
          return "Low Blood Pressure";
        } else if (
          record.value !== "" &&
          ((systolic > 120 && systolic < 130) ||
            (diastolic > 80 && diastolic < 90))
        ) {
          return "Elevated Blood Pressure";
        } else if (record.value !== "" && (systolic > 130 || diastolic > 80)) {
          return "High Blood Pressure";
        } else if (record.value === "") {
          return "-";
        } else {
          return "Normal Blood Pressure";
        }
      },
    },
  ];
};

export const categoryTableColumns = (nav, setId, setOpen) => {
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
      title: "Icon",
      dataIndex: "icon",
      key: "icon",
      render: (text) => {
        return (
          <div className=" flex items-center justify-center">
            <img src={text} alt="" className=" w-8 h-8" />
          </div>
        );
      },
    },
    {
      title: "Warning Point",
      dataIndex: "threshold",
      key: "threshold",
      align: "right",
    },
    {
      title: "Warning Point 2",
      dataIndex: "threshold2",
      key: "threshold2",
      align: "right",
      render: (text) => {
        return text === "null" ? "-" : text;
      },
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
      render: (text) => {
        return text === "null" ? "-" : text;
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
          // {
          //   key: "view",
          //   label: (
          //     <div
          //       onClick={() => nav(`${record.id}`, { state: { ...record } })}
          //       className=" flex gap-2 items-center"
          //     >
          //       <FaEye /> <span className=" inline-block">View</span>
          //     </div>
          //   ),
          // },
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

export const userTableColumns = (nav, setId, setOpen) => {
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
      dataIndex: "family_member_name",
      key: "family_member_name",
    },
    {
      title: "Start Taking Date",
      dataIndex: "from_date",
      key: "from_date",
    },
    {
      title: "Last Taking Date",
      dataIndex: "to_date",
      key: "to_date",
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

export const appointmentTableColumns = (nav, setId, setOpen) => {
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
      render: (text) => dayjs(text).format("DD-MM-YYYY"),
    },
    {
      title: "Appointment Time",
      dataIndex: "appointment_time",
      key: "appointment_time",
      render: (text) => dayjs(text, "HH:mm:ss").format("hh:mm A"),
    },
    {
      title: "Patient Name",
      dataIndex: "family_member_name",
      key: "family_member_name",
    },
    {
      title: "Reminder Time",
      dataIndex: "reminder_time",
      key: "reminder_time",
      render: (text) => dayjs(text, "HH:mm:ss").format("hh:mm A"),
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
          // {
          //   key: "view",
          //   label: (
          //     <div
          //       onClick={() => nav(`${record.id}`, { state: { ...record } })}
          //       className=" flex gap-2 items-center"
          //     >
          //       <FaEye /> <span className=" inline-block">View</span>
          //     </div>
          //   ),
          // },
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
                  console.log(record);

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
