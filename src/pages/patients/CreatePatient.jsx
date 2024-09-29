import React from "react";
import PageTitleWithRouter from "../../components/common/PageTitle";
import InnerContainer from "../../components/common/InnerContainer";
import CustomFormWithRouter from "../../components/common/CustomForm";

const CreatePatient = () => {
  return (
    <>
      <InnerContainer>
        <PageTitleWithRouter
          title={"Create Patient"}
          buttonText={"Back"}
          buttonLink={-1}
          hasButton={false}
        />
        <CustomFormWithRouter inputs={[]} initialValues={{}} />
      </InnerContainer>
    </>
  );
};

export default CreatePatient;
