import React, { useEffect, useState } from "react";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import { medicineCreateInputs } from "../../constants/FormInputs.jsx";
import { dummyPatients } from "../../constants/DummyData.jsx";
import { Avatar, Segmented } from "antd";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { patients } from "../../app/Patients/patientSlice.jsx";
import PatientsSegmented from "../../components/common/PatientsSegmented.jsx";
import dayjs from "dayjs";
import {
  createMedicine,
  getCreateMedicinesMessage,
  getCreateMedicinesStatus,
} from "../../app/medicines/medicineSlice.jsx";

const CreateMedicine = ({ onFinish }) => {
  const patientList = useSelector(patients);
  const [patient, setPatient] = useState(null);
  // console.log(patient);
  // const selectedPatient = dummyPatients.find((p) => p.id === patient);
  const [dayTypeValues, setDayTypeValues] = useState([]);
  const [morning, setMorning] = useState(false);
  useEffect(() => {
    if (patientList.length > 0) {
      setPatient(patientList[0]?.id);
    }
  }, [patientList]);

  const data = medicineCreateInputs(dayTypeValues, setDayTypeValues);
  return (
    <>
      <PageTitleWithRouter title="Create Medicine" />
      <PatientsSegmented setPatient={setPatient} patient={patient} />
      <CustomFormWithRouter
        data={data}
        initialValues={{}}
        onFinish={(values) => {
          const finalValues = {
            start_date: dayjs(values.start_date).format("DD-MM-YYYY"),
            end_date: dayjs(values.end_date).format("DD-MM-YYYY"),
            title: values.title,
            medicine_name: values.medicine_name,
            medicine_photo: values.medicine_photo,
            family_member_id: patient,
            param: [],
          };
          if (values.morning || values.afternoon || values.night) {
            if (values.morning) {
              finalValues.param.push({
                day_type: "Morning",
                meal_type: values.morning_meal_type,
                reminder_time: dayjs(values.morning_reminder_time).format(
                  "HH:mm:ss",
                ),
              });
            }
            if (values.afternoon) {
              finalValues.param.push({
                day_type: "Afternoon",
                meal_type: values.afternoon_meal_type,
                reminder_time: dayjs(values.afternoon_reminder_time).format(
                  "HH:mm:ss",
                ),
              });
            }
            if (values.night) {
              finalValues.param.push({
                day_type: "Night",
                meal_type: values.night_meal_type,
                reminder_time: dayjs(values.night_reminder_time).format(
                  "HH:mm:ss",
                ),
              });
            }
            finalValues.param = JSON.stringify(finalValues.param);
            console.log(finalValues);
            onFinish(finalValues);
          }
        }}
      />
      {/*<Form></Form>*/}
    </>
  );
};

CreateMedicine.propTypes = {
  onFinish: PropTypes.func,
};

const formProps = {
  method: createMedicine,
  api: "/medicine_record_create",
  status: getCreateMedicinesStatus,
  message: getCreateMedicinesMessage,
  extraData: {
    cby: JSON.parse(localStorage.getItem("user")).name,
  },
};

const CreateMedicineWithNotiAndLoader = withNotiAndLoader(
  CreateMedicine,
  formProps,
);
export default CreateMedicineWithNotiAndLoader;
