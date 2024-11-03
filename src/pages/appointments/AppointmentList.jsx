import React from "react";
import withTableAndTitle from "../../components/hoc/withTableAndTitle.jsx";
import { appointments } from "../../app/appointment/appointmentSlice.jsx";
import { appointmentTableColumns } from "../../constants/TableColumns.jsx";

const AppointmentList = () => {
  return <></>;
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
};
const AppointmentListWithTableAndTitle = withTableAndTitle(
  AppointmentList,
  pageTitleProps,
  buttonProps,
  tableProps,
);

export default AppointmentListWithTableAndTitle;
