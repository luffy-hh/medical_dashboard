import React from "react";
import PropTypes from "prop-types";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import { medicalCheckupCreateInputs } from "../../constants/FormInputs.jsx";
import dayjs from "dayjs";
import {
  updateLabRecord,
  updateLabRecordMessageSelector,
  updateLabRecordStatusSelector,
} from "../../app/labRecords/labRecordSlice.jsx";

const UpdateMonthlyRecord = ({ router, onFinish }) => {
  const initialValues = {
    ...router.location.state,
    lab_date: dayjs(router.location.state.lab_date).format("DD-MM-YYYY"),
  };
  console.log(initialValues);

  return (
    <>
      <PageTitleWithRouter title={"Update Monthly Record"} />
      <CustomFormWithRouter
        data={medicalCheckupCreateInputs()}
        initialValues={initialValues}
        onFinish={(values) => {
          const finalValues = {
            ...values,
            lab_date: dayjs(values.lab_date).format("YYYY-MM-DD"),
            family_member_id: router.location.state.family_member_id,
            id: router.location.state.id,
          };
          onFinish(finalValues);
        }}
      />
    </>
  );
};

UpdateMonthlyRecord.propTypes = {
  router: PropTypes.object,
  onFinish: PropTypes.func,
};

const formProps = {
  method: updateLabRecord,
  api: "/lab_record_update",
  status: updateLabRecordStatusSelector,
  message: updateLabRecordMessageSelector,
  extraData: {
    uby: JSON.parse(localStorage.getItem("user")).name,
  },
};
const UpdateMonthlyRecordWithNotiAndLoader = withNotiAndLoader(
  UpdateMonthlyRecord,
  formProps,
);
export default UpdateMonthlyRecordWithNotiAndLoader;
