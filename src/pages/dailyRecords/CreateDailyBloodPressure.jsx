import React from "react";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import PropTypes from "prop-types";
import { dailyBloodPressureInputs } from "../../constants/FormInputs.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";

const CreateDailyBloodPressure = ({ router }) => {
  // for notification and loader add fromprops in withNotiAndLoader hoc
  // import status and message selector and pass it to withNotiAndLoader hoc
  const title = (
    <>
      Create Daily Blood Pressure Record For
      <span className={"font-bold text-xl"}>
        ({router.location.state.name})
      </span>
    </>
  );
  return (
    <>
      <PageTitleWithRouter title={title} hasButton={false} />
      <CustomFormWithRouter
        data={dailyBloodPressureInputs()}
        initialValues={{}}
      />
    </>
  );
};

CreateDailyBloodPressure.propTypes = {
  router: PropTypes.object,
};

const CreateDailyBloodPressureWithNotiAndLoader = withNotiAndLoader(
  CreateDailyBloodPressure,
);
export default CreateDailyBloodPressureWithNotiAndLoader;
