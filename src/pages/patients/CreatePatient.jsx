import React from "react";
import PageTitleWithRouter from "../../components/common/PageTitle";
import InnerContainer from "../../components/common/InnerContainer";
import CustomFormWithRouter from "../../components/common/CustomForm";
import { patientInputs } from "../../constants/FormInputs";

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
        <CustomFormWithRouter data={patientInputs()} initialValues={{}} />
      </InnerContainer>
    </>
  );
};

export default CreatePatient;
