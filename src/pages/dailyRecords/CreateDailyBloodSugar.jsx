import React from "react";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import PropTypes from "prop-types";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import { dailyBloodSugarInputs } from "../../constants/FormInputs.jsx";

const CreateDailyBloodSugar = ({ router }) => {
  // for notification and loader add fromprops in withNotiAndLoader hoc
  // import status and message selector and pass it to withNotiAndLoader hoc

  const { location } = router;
  console.log(location);
  const title = (
    <>
      Create Daily Blood Sugar Record For
      <span className={"font-bold text-xl"}>({location.state.name})</span>
    </>
  );
  return (
    <>
      <PageTitleWithRouter title={title} hasButton={false} />
      <CustomFormWithRouter data={dailyBloodSugarInputs()} initialValues={{}} />
    </>
  );
};

CreateDailyBloodSugar.propTypes = {
  router: PropTypes.object,
};

const CreateDailyBloodSugarWithPageComponents = withNotiAndLoader(
  CreateDailyBloodSugar,
);
export default CreateDailyBloodSugarWithPageComponents;
