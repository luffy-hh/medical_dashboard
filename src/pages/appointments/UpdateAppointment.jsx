import React, { useState } from "react";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import PropTypes from "prop-types";
import { appointmentCreateInputs } from "../../constants/FormInputs.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomForm from "../../components/common/CustomForm.jsx";
import PatientsSegmented from "../../components/common/PatientsSegmented.jsx";
import dayjs from "dayjs";
import {
  updateAppointment,
  updateAppointmentMessage,
  updateAppointmentStatus,
} from "../../app/appointment/appointmentSlice.jsx";

const UpdateAppointment = ({ router, onFinish }) => {
  const initialValues = {
    ...router.location.state,
    appointment_date: dayjs(
      router.location.state.appointment_date,
      "YYYY-MM-DD",
    ).format("DD-MM-YYYY"),
  };

  const [patient, setPatient] = useState(initialValues.family_member_id);
  return (
    <>
      <PageTitleWithRouter title={"Update Appointment"} />
      <PatientsSegmented patient={patient} setPatient={setPatient} />
      <CustomForm
        data={appointmentCreateInputs()}
        initialValues={initialValues}
        onFinish={(values) => {
          const finalValues = {
            ...values,
            appointment_time: dayjs(values.appointment_time).format("HH:mm:ss"),
            reminder_time: dayjs(values.reminder_time).format("HH:mm:ss"),
            appointment_date: dayjs(values.appointment_date).format(
              "DD-MM-YYYY",
            ),
          };
          console.log(finalValues.appointment_date);

          onFinish({
            ...finalValues,
            family_member_id: patient,
            id: router.location.state.id,
          });
        }}
      />
    </>
  );
};

UpdateAppointment.propTypes = {
  router: PropTypes.object,
  onFinish: PropTypes.func,
};

const formProps = {
  method: updateAppointment,
  api: "/appointment_update",
  // apiHasExtra: "id",
  status: updateAppointmentStatus,
  message: updateAppointmentMessage,
  extraData: {
    uby: JSON.parse(localStorage.getItem("user")).name,
  },
};
const UpdateAppointmentWithNotiAndLoader = withNotiAndLoader(
  UpdateAppointment,
  formProps,
);
export default UpdateAppointmentWithNotiAndLoader;
