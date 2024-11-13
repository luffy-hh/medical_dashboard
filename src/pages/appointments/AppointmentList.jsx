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

const AppointmentList = () => {
  const dispatch = useDispatch();
  const deleteStatus = useSelector(deleteAppointmentStatus);
  const updateStatus = useSelector(updateAppointmentStatus);
  const createStatus = useSelector(createAppointmentStatus);
  const [patient, setPatient] = useState();
  useEffect(() => {
    dispatch(getAppointments({ api: "/appointment_list" }));
    dispatch(setPageTitle("Appointments"));
  }, []);
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
