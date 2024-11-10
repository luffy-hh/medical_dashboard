import React from "react";
import withRouter from "../../components/hoc/withRouter.jsx";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import PropTypes from "prop-types";
import { patientInputs } from "../../constants/FormInputs.jsx";
import {
  updatePatient,
  updatePatientStatus,
} from "../../app/Patients/patientSlice.jsx";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";

const EditPatient = ({ router, onFinish }) => {
  const { id } = useParams();
  console.log(router.location.state);
  const initialValues = {
    ...router.location.state,
    phone_no:
      router.location.state.phone_no === "undefined" ||
      router.location.state.phone_no === null
        ? ""
        : router.location.state.phone_no,
  };
  // for notification and loader add fromprops in withNotiAndLoader hoc
  return (
    <>
      <PageTitleWithRouter title={"Edit Patient"} />
      <CustomFormWithRouter
        data={patientInputs()}
        initialValues={initialValues}
        onFinish={(values) => {
          const finalValues = {
            ...values,
            dob: dayjs(values.dob).format("DD-MM-YYYY"),
          };
          onFinish(finalValues, { id: id });
        }}
      />
    </>
  );
};
EditPatient.propTypes = {
  router: PropTypes.object,
  form: PropTypes.object,
  onFinish: PropTypes.func,
};

const formProps = {
  method: updatePatient,
  api: "/family_member_update",
  // apiHasExtra: "id",
  status: updatePatientStatus,
  message: updatePatientStatus,
  extraData: {
    uby: JSON.parse(localStorage.getItem("user")).name,
    "Device-Type": "web",
  },
};
const EditPatientWithRouter = withNotiAndLoader(EditPatient, formProps);
export default EditPatientWithRouter;
