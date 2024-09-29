import React from "react";
import InnerContainer from "../../components/common/InnerContainer";
import PageTitleWithRouter from "../../components/common/PageTitle";
import CustomFormWithRouter from "../../components/common/CustomForm";

const CreateMonthlyRecord = () => {
  return (
    <>
      <InnerContainer>
        <PageTitleWithRouter
          title="Create Monthly Record"
          buttonText="Back"
          buttonLink={-1}
          hasButton={false}
        />
        <CustomFormWithRouter inputs={[]} initialValues={{}} />
      </InnerContainer>
    </>
  );
};

export default CreateMonthlyRecord;
