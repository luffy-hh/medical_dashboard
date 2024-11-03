import React from "react";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import PropTypes from "prop-types";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import { dailyBloodOxygenInputs } from "../../constants/FormInputs.jsx";

const CreateDailyBloodOxygen = ({ router }) => {
  // for notification and loader add fromprops in withNotiAndLoader hoc
  // import status and message selector and pass it to withNotiAndLoader hoc
  const title = (
    <>
      Create Daily Blood Oxygen Record For
      <span className={"font-bold text-xl"}>
        ({router.location.state.name})
      </span>
    </>
  );
  return (
    <>
      <PageTitleWithRouter title={title} hasButton={false} />
      <CustomFormWithRouter
        data={dailyBloodOxygenInputs()}
        initialValues={{}}
      />
    </>
  );
};

CreateDailyBloodOxygen.propTypes = {
  router: PropTypes.object,
};
const CreateDailyBloodOxygenWithNotiAndLoader = withNotiAndLoader(
  CreateDailyBloodOxygen,
);
export default CreateDailyBloodOxygenWithNotiAndLoader;
