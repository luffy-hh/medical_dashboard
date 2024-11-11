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

const CreateMedicine = ({ onFinish }) => {
  const patientList = useSelector(patients);
  const [patient, setPatient] = useState(null);
  console.log(patient);
  const selectedPatient = dummyPatients.find((p) => p.id === patient);
  const [dayTypeValues, setDayTypeValues] = useState([]);
  const [mealTypeValues, setMealTypeValues] = useState([]);
  useEffect(() => {
    if (patientList.length > 0) {
      setPatient(patientList[0]?.id);
    }
  }, [patientList]);

  const data = medicineCreateInputs(
    dayTypeValues,
    setDayTypeValues,
    mealTypeValues,
    setMealTypeValues,
  );
  return (
    <>
      <PageTitleWithRouter title="Create Medicine" />
      <PatientsSegmented setPatient={setPatient} patient={patient} />
      <CustomFormWithRouter
        data={data}
        initialValues={{}}
        onFinish={(values) => {
          onFinish(values);
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
  method: () => {},
  api: "",
  status: () => {},
  message: () => {},
  extraData: {},
};

const CreateMedicineWithNotiAndLoader = withNotiAndLoader(
  CreateMedicine,
  formProps,
);
export default CreateMedicineWithNotiAndLoader;
