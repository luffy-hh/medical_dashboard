import React from "react";
import withRouter from "../../components/hoc/withRouter.jsx";
import InnerContainer from "../../components/common/InnerContainer.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import PropTypes from "prop-types";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";

const CreateDailyBloodSugar = ({ router }) => {
  const { location } = router;
  console.log(location);
  const title = (
    <>
      Create Daily Blood Sugar Record For{" "}
      <span className={"font-bold text-xl"}>({location.state.name})</span>
    </>
  );
  return (
    <InnerContainer>
      <PageTitleWithRouter title={title} hasButton={false} />
      <CustomFormWithRouter data={[]} initialValues={{}} />
    </InnerContainer>
  );
};

CreateDailyBloodSugar.propTypes = {
  router: PropTypes.object,
};
const CreateDailyBloodSugarWithRouter = withRouter(CreateDailyBloodSugar);
export default CreateDailyBloodSugarWithRouter;
