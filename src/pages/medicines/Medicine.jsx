import React, { useEffect, useMemo, useState } from "react";
import withTableAndTitle from "../../components/hoc/withTableAndTitle.jsx";
import { medicineTableColumns } from "../../constants/TableColumns.jsx";
import {
  deleteMedicine,
  getCreateMedicinesStatus,
  getDeleteMedicinesMessage,
  getDeleteMedicinesStatus,
  getMedicines,
  getMedicinesList,
  getMedicinesMessage,
  getMedicinesStatus,
  getPatientMedicineDetails,
  getUpdateMedicinesStatus,
  resetCreateMedicinesStatus,
  resetDeleteMedicinesStatus,
  resetUpdateMedicinesStatus,
} from "../../app/medicines/medicineSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setPageTitle } from "../../app/ThemeConfig/themeConfigSlice.jsx";
import { DatePicker } from "antd";
import PatientsSegmented from "../../components/common/PatientsSegmented.jsx";
import { patients } from "../../app/Patients/patientSlice.jsx";
import { generateQueryString } from "../../utilities/utilsFunctions.js";
import dayjs from "dayjs";

const Medicine = () => {
  const dispatch = useDispatch();
  const deleteStatus = useSelector(getDeleteMedicinesStatus);
  const updateStatus = useSelector(getUpdateMedicinesStatus);
  const createStatus = useSelector(getCreateMedicinesStatus);
  const patientList = useSelector(patients);
  const medicines = useSelector(getMedicinesList);
  console.log(medicines);

  const [patient, setPatient] = useState(null);
  // const selectedPatient = patientList.find((p) => p.id === patient);
  const currentDate = new Date();
  const formattedCurrentDate = dayjs(currentDate).format("DD-MM-YYYY");
  const day1InCurrentMonth = dayjs(
    new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
  ).format("DD-MM-YYYY");
  const [searchParams, setSearchParams] = useState({
    start_date: day1InCurrentMonth,
    end_date: formattedCurrentDate,
  });
  const memoizedQueryString = useMemo(
    () => generateQueryString(searchParams),
    [searchParams],
  );
  useEffect(() => {
    if (patientList.length > 0) {
      setPatient(patientList[0]?.id);
    }
  }, [patientList]);
  useEffect(() => {
    dispatch(setPageTitle("Medicines"));
  }, []);
  useEffect(() => {
    patient &&
      dispatch(
        getMedicines({
          api: `/medicine_record_list?family_member_id=${patient}&${memoizedQueryString}`,
        }),
      );
    dispatch(
      getPatientMedicineDetails({
        api: "/medicine_record_data",
        postData: {
          family_member_id: patient,
          start_date: searchParams.start_date,
          end_date: searchParams.end_date,
        },
      }),
    );
  }, [patient, memoizedQueryString]);
  useEffect(() => {
    if (
      deleteStatus === "succeeded" ||
      createStatus === "succeeded" ||
      updateStatus === "succeeded"
    ) {
      dispatch(getMedicines({ api: "/medicine_record_list" }));
    }
    (deleteStatus === "succeeded" || deleteStatus === "failed") &&
      dispatch(resetDeleteMedicinesStatus());
    (createStatus === "succeeded" || createStatus === "failed") &&
      dispatch(resetCreateMedicinesStatus());
    (updateStatus === "succeeded" || updateStatus === "failed") &&
      dispatch(resetUpdateMedicinesStatus());
  }, [createStatus, deleteStatus, dispatch, updateStatus]);
  return (
    <>
      <PatientsSegmented patient={patient} setPatient={setPatient} />
      <div className={"flex flex-wrap gap-4"}>
        <DatePicker
          className={"w-[90%] sm:w-[12rem]"}
          placeholder={"Start Date: DD-MM-YYYY"}
          format={"DD-MM-YYYY"}
          defaultValue={dayjs(day1InCurrentMonth, "DD-MM-YYYY")}
          allowClear={false}
          onChange={(e) =>
            setSearchParams({
              ...searchParams,
              start_date: e.format("DD-MM-YYYY"),
            })
          }
        />
        <DatePicker
          className={"w-[90%] sm:w-[12rem]"}
          placeholder={"End Date: DD-MM-YYYY"}
          format={"DD-MM-YYYY"}
          allowClear={false}
          defaultValue={dayjs(formattedCurrentDate, "DD-MM-YYYY")}
          onChange={(e) =>
            setSearchParams({
              ...searchParams,
              end_date: e.format("DD-MM-YYYY"),
            })
          }
        />
      </div>
    </>
  );
};
const pageTitleProps = {
  title: "Medicines",
  hasButton: false,
};
const buttonProps = {
  hasButton: true,
  text: "Add Medicine",
  link: "/medicine/create",
};
const tableProps = {
  columns: medicineTableColumns,
  data: getMedicinesList,
  status: getMedicinesStatus,
  message: getMedicinesMessage,
};

const modalProps = {
  title: "Delete Medicine",
  text: "Are you sure you want to delete this medicine?",
  method: deleteMedicine,
  api: "/medicine_record_delete",
  status: getDeleteMedicinesStatus,
  message: getDeleteMedicinesMessage,
  extraData: {
    uby: JSON.parse(localStorage.getItem("user")).name,
  },
};
const MedicineWithTableAndTitle = withTableAndTitle(
  Medicine,
  pageTitleProps,
  buttonProps,
  tableProps,
  modalProps,
);

export default MedicineWithTableAndTitle;
