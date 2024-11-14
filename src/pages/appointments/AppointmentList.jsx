import React, { useEffect, useState } from "react";
import withTableAndTitle from "../../components/hoc/withTableAndTitle.jsx";
import {
  appointments,
  appointmentsMessage,
  appointmentsStatus,
  createAppointmentStatus,
  deleteAppointment,
  deleteAppointmentMessage,
  deleteAppointmentStatus,
  getAppointments,
  resetCreateAppointmentStatus,
  resetDeleteAppointmentStatus,
  resetUpdateAppointmentStatus,
  updateAppointmentStatus,
} from "../../app/appointment/appointmentSlice.jsx";
import { appointmentTableColumns } from "../../constants/TableColumns.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setPageTitle } from "../../app/ThemeConfig/themeConfigSlice.jsx";
import PatientsSegmented from "../../components/common/PatientsSegmented.jsx";
import { patients } from "../../app/Patients/patientSlice.jsx";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const AppointmentList = () => {
  const dispatch = useDispatch();
  const deleteStatus = useSelector(deleteAppointmentStatus);
  const updateStatus = useSelector(updateAppointmentStatus);
  const createStatus = useSelector(createAppointmentStatus);
  const patientList = useSelector(patients);
  const [patient, setPatient] = useState(null);
  const [searchParams, setSearchParams] = useState({
    form_date: "",
    to_date: "",
  });

  useEffect(() => {
    patient &&
      dispatch(
        getAppointments({
          api: "/appointment_list",
          postData: {
            family_member_id: patient,
            from_date: searchParams.from_date,
            to_date: searchParams.to_date,
          },
        }),
      );
  }, [patient, searchParams]);
  useEffect(() => {
    dispatch(setPageTitle("Appointments"));
  }, []);
  useEffect(() => {
    patientList.length > 0 && setPatient(patientList[0]?.id);
  }, [patientList]);
  useEffect(() => {
    if (
      deleteStatus === "succeeded" ||
      updateStatus === "succeeded" ||
      createStatus === "succeeded"
    ) {
      dispatch(getAppointments({ api: "/appointment_list" }));
    }
    (deleteStatus === "succeeded" || deleteStatus === "failed") &&
      dispatch(resetDeleteAppointmentStatus());
    (updateStatus === "succeeded" || updateStatus === "failed") &&
      dispatch(resetUpdateAppointmentStatus());
    (createStatus === "succeeded" || createStatus === "failed") &&
      dispatch(resetCreateAppointmentStatus());
  }, [createStatus, deleteStatus, dispatch, updateStatus]);
  return (
    <>
      <PatientsSegmented setPatient={setPatient} patient={patient} />
      <div className={"flex gap-4"}>
        <DatePicker
          placeholder={"From Date: DD-MM-YYYY"}
          format={"DD-MM-YYYY"}
          onChange={(e) =>
            setSearchParams({
              ...searchParams,
              from_date: e && dayjs(e).format("DD-MM-YYYY"),
            })
          }
        />
        <DatePicker
          placeholder={"To Date: DD-MM-YYYY"}
          format={"DD-MM-YYYY"}
          onChange={(e) =>
            setSearchParams({
              ...searchParams,
              to_date: e && dayjs(e).format("DD-MM-YYYY"),
            })
          }
        />
      </div>
    </>
  );
};
const pageTitleProps = {
  title: "Appointments",
  hasButton: false,
};
const buttonProps = {
  hasButton: true,
  text: "Add Appointment",
  link: "/appointment/create",
};
const tableProps = {
  columns: appointmentTableColumns,
  data: appointments,
  status: appointmentsStatus,
  message: appointmentsMessage,
};
const modalProps = {
  title: "Delete Appointment",
  text: "Are you sure you want to delete this appointment?",
  method: deleteAppointment,
  api: "/appointment_delete",
  status: deleteAppointmentStatus,
  message: deleteAppointmentMessage,
  extraData: { uby: JSON.parse(localStorage.getItem("user")).name },
};
const AppointmentListWithTableAndTitle = withTableAndTitle(
  AppointmentList,
  pageTitleProps,
  buttonProps,
  tableProps,
  modalProps,
);

export default AppointmentListWithTableAndTitle;
