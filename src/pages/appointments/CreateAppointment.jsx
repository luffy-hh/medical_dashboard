import React, { useEffect, useState } from "react";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import PropTypes from "prop-types";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import { appointmentCreateInputs } from "../../constants/FormInputs.jsx";
import { dummyPatients } from "../../constants/DummyData.jsx";
import { Avatar, Segmented } from "antd";
import PatientsSegmented from "../../components/common/PatientsSegmented.jsx";
import {
  createPatientMessage,
  createPatientStatus,
  patients,
} from "../../app/Patients/patientSlice.jsx";
import { useSelector } from "react-redux";
import {
  createAppointment,
  createAppointmentMessage,
  createAppointmentStatus,
} from "../../app/appointment/appointmentSlice.jsx";
import dayjs from "dayjs";

const CreateAppointment = ({ router, onFinish }) => {
  const patientList = useSelector(patients);
  const [patient, setPatient] = useState(patientList[0]?.id);
  useEffect(() => {
    if (patientList.length > 0) {
      setPatient(patientList[0]?.id);
    }
  }, [patientList]);
  // const selectedPatient = dummyPatients.find((p) => p.id === patient);

  return (
    <>
      <PageTitleWithRouter title="Create Appointment" />
      <PatientsSegmented setPatient={setPatient} patient={patient} />
      <CustomFormWithRouter
        data={appointmentCreateInputs()}
        initialValues={{}}
        onFinish={(values) => {
          const finalValues = {
            ...values,
            appointment_time: dayjs(values.appointment_time).format("HH:mm:ss"),
            reminder_time: dayjs(values.reminder_time).format("HH:mm:ss"),
            appointment_date: dayjs(values.appointment_date).format(
              "DD-MM-YYYY",
            ),
          };
          onFinish({ ...finalValues, family_member_id: patient });
        }}
      />
    </>
  );
};
CreateAppointment.propTypes = {
  router: PropTypes.object,
  onFinish: PropTypes.func,
};
const formProps = {
  method: createAppointment,
  api: "/appointment_create",
  status: createAppointmentStatus,
  message: createAppointmentMessage,
  extraData: {
    cby: JSON.parse(localStorage.getItem("user")).name,
    "Device-Type": "web",
  },
};
const CreateAppointmentWithNotiAndLoader = withNotiAndLoader(
  CreateAppointment,
  formProps,
);
export default CreateAppointmentWithNotiAndLoader;
