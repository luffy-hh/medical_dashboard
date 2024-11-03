import React from "react";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import PropTypes from "prop-types";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import { dailyPulseRateInputs } from "../../constants/FormInputs.jsx";

const CreateDailyPulseRate = ({ router }) => {
  // for notification and loader add fromprops in withNotiAndLoader hoc
  // import status and message selector and pass it to withNotiAndLoader hoc
  const title = (
    <>
      Create Daily Pulse Rate Record For
      <span className={"font-bold text-xl"}>
        ({router.location.state.name})
      </span>
    </>
  );
  return (
    <>
      <PageTitleWithRouter title={title} hasButton={false} />
      <CustomFormWithRouter data={dailyPulseRateInputs()} initialValues={{}} />
    </>
  );
};

CreateDailyPulseRate.propTypes = {
  router: PropTypes.object,
};
const CreateDailyPulseRateWithNotiAndLoader =
  withNotiAndLoader(CreateDailyPulseRate);
export default CreateDailyPulseRateWithNotiAndLoader;
