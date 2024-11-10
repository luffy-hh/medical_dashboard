import React from "react";
import PropTypes from "prop-types";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";

const UpdateMonthlyRecord = ({ router, onFinish }) => {
  const initialValues = {
    ...router.location.state,
  };
  return (
    <>
      <PageTitleWithRouter title={"Update Monthly Record"} />
      <CustomFormWithRouter data={[]} inititalValues={{}} onFinish={() => {}} />
    </>
  );
};

UpdateMonthlyRecord.propTypes = {
  router: PropTypes.object,
  onFinish: PropTypes.func,
};

const formProps = {
  method: () => {},
  api: "/lab_record_update",
  status: () => {},
  message: () => {},
  extraData: {
    uby: JSON.parse(localStorage.getItem("user")).name,
  },
};
const UpdateMonthlyRecordWithNotiAndLoader = withNotiAndLoader(
  UpdateMonthlyRecord,
  formProps,
);
export default UpdateMonthlyRecordWithNotiAndLoader;
