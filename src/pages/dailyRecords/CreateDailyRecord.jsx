import React from "react";
import PageTitleWithRouter from "../../components/common/PageTitle";
import InnerContainer from "../../components/common/InnerContainer";
import CustomFormWithRouter from "../../components/common/CustomForm";
import withFormHandling from "../../components/hoc/withFormHandling";
import {dailyInputs} from "../../constants/FormInputs.jsx";

const CreateDailyRecord = () => {
  return (
    <>
      <InnerContainer>
        <PageTitleWithRouter
          title="Create Daily Record"
          buttonText="Back"
          buttonLink={-1}
          hasButton={false}
        />
        <CustomFormWithRouter data={dailyInputs()} initialValues={{}} />
      </InnerContainer>
      {/*<CustomFormWithRouter {...props} />*/}
    </>
  );
};

export default CreateDailyRecord;