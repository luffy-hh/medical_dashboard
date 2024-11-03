import React from "react";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import PropTypes from "prop-types";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import { dailyTemperatureInputs } from "../../constants/FormInputs.jsx";

const CreateDailyTemperature = ({ router }) => {
  // for notification and loader add fromprops in withNotiAndLoader hoc
  // import status and message selector and pass it to withNotiAndLoader hoc
  const title = (
    <>
      Create Daily Temperature Record for
      <span className={"font-bold text-xl"}>
        ({router.location.state.name})
      </span>
    </>
  );
  return (
    <>
      <PageTitleWithRouter title={title} hasButton={false} />
      <CustomFormWithRouter
        data={dailyTemperatureInputs()}
        initialValues={{}}
      />
    </>
  );
};

CreateDailyTemperature.propTypes = {
  router: PropTypes.object,
};
const CreateDailyTemperatureWithNotiAndLoader = withNotiAndLoader(
  CreateDailyTemperature,
);
export default CreateDailyTemperatureWithNotiAndLoader;
