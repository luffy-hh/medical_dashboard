import React from "react";
import PageTitleWithRouter from "../../components/common/PageTitle";
import InnerContainer from "../../components/common/InnerContainer";
import CustomFormWithRouter from "../../components/common/CustomForm";
import { patientInputs } from "../../constants/FormInputs";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import PropTypes from "prop-types";
import {
  createPatient,
  createPatientMessage,
  createPatientStatus,
} from "../../app/Patients/patientSlice.jsx";
import dayjs from "dayjs";

const CreatePatient = ({ form, onFinish }) => {
  // console.log(form, typeof form);

  return (
    <>
      <PageTitleWithRouter title={"Create Patient"} />
      <CustomFormWithRouter
        data={patientInputs()}
        initialValues={{}}
        onFinish={(values) => {
          const finalValues = {
            ...values,
            dob: dayjs(values.dob).format("DD-MM-YYYY"),
          };
          onFinish(finalValues);
        }}
      />
    </>
  );
};
CreatePatient.propTypes = {
  form: PropTypes.object,
  onFinish: PropTypes.func,
};
const formProps = {
  method: createPatient,
  // statusResetMethod: resetCreatePatientStatus,
  api: "/family_member_store",
  status: createPatientStatus,
  message: createPatientMessage,
  extraData: {
    cby: JSON.parse(localStorage.getItem("user")).name,
    "Device-Type": "web",
  },
};
const CreatePatientWithNotiAndLoader = withNotiAndLoader(
  CreatePatient,
  formProps
);
export default CreatePatientWithNotiAndLoader;
