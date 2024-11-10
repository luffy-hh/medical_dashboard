import React, { useEffect, useState } from "react";
import InnerContainer from "../../components/common/InnerContainer";
import PageTitleWithRouter from "../../components/common/PageTitle";
import CustomFormWithRouter from "../../components/common/CustomForm";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import { medicalCheckupCreateInputs } from "../../constants/FormInputs.jsx";
import { useSelector } from "react-redux";
import { patients } from "../../app/Patients/patientSlice.jsx";
import PatientsSegmented from "../../components/common/PatientsSegmented.jsx";
import PropTypes from "prop-types";
import {
  createLabRecord,
  createLabRecordMessageSelector,
  createLabRecordStatusSelector,
} from "../../app/labRecords/labRecordSlice.jsx";
import dayjs from "dayjs";

const CreateMonthlyRecord = ({ onFinish }) => {
  const patientList = useSelector(patients);
  const [patient, setPatient] = useState(null);
  console.log(patient);
  useEffect(() => {
    if (patientList.length > 0) {
      setPatient(patientList[0]?.id);
    }
  }, [patientList]);

  return (
    <>
      <PageTitleWithRouter title="Create Monthly Record" />
      <PatientsSegmented setPatient={setPatient} patient={patient} />
      <CustomFormWithRouter
        data={medicalCheckupCreateInputs()}
        initialValues={{}}
        onFinish={(values) => {
          const finalValues = {
            ...values,
            lab_date: dayjs(values.lab_date).format("DD-MM-YYYY"),
            family_member_id: patient,
          };
          onFinish(finalValues);
        }}
      />
    </>
  );
};

CreateMonthlyRecord.propTypes = {
  onFinish: PropTypes.func,
};

const formProps = {
  method: createLabRecord,
  api: "/lab_record_create",
  status: createLabRecordStatusSelector,
  message: createLabRecordMessageSelector,
  extraData: {
    cby: JSON.parse(localStorage.getItem("user")).name,
  },
};

const CreateMonthlyRecordWithNotiAndLoader = withNotiAndLoader(
  CreateMonthlyRecord,
  formProps,
);
export default CreateMonthlyRecordWithNotiAndLoader;
