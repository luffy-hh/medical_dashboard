import React from "react";
import PageTitleWithRouter from "../../components/common/PageTitle";
import InnerContainer from "../../components/common/InnerContainer";
import CustomFormWithRouter from "../../components/common/CustomForm";
import withFormHandling from "../../components/hoc/withFormHandling";

const CreateDailyRecord = (props) => {
  return (
    <>
      {/* <InnerContainer>
        <PageTitleWithRouter
          title="Create Daily Record"
          buttonText="Back"
          buttonLink={-1}
          hasButton={false}
        />
        <CustomFormWithRouter inputs={[]} initialValues={{}} />
      </InnerContainer> */}
      <CustomFormWithRouter {...props} />
    </>
  );
};
const titleProps = {
  title: "Create Daily Record",
};
const formConfig = {
  successTitle: "Daily Record Created Successfully.",
  failTitle: "Creating Daily Record Failed.",
  apiEndpoint: "dailyCreate",
  // createAction: createDailyUnit,
  // createYupSchema: createYupSchema,
  inputs: {
    meter_id: { type: "string", required: true },
    previous_day_unit: { type: "number", required: true },
    current_day_unit: { type: "number", required: true },
    read_time: { type: "date", required: true },
    attach_photo: { type: "file", required: true },
  },
  getInitialValues: (location) => ({
    meter_id: location?.state?.meter_id || "",
    previous_day_unit: location?.state?.previous_day_unit || "",
    current_day_unit: location?.state?.current_day_unit || "",
    read_time: location?.state?.read_time || "",
    attach_photo: location?.state?.attach_photo || "",
  }),
};
const CreateDailyRecordWithForm = withFormHandling(
  CreateDailyRecord,
  titleProps
);
export default CreateDailyRecordWithForm;

// import React from "react";
// import CustomForm from "../../components/CustomForm";
// import withFormHandling from "./path/to/withFormHandling";
// import { createUnitInput } from "../../constants/FormInputs";
// import { createYupSchema } from "../../helpers/helpers";
// import { createDailyUnit } from "../../app/unitSlice";

// const formConfig = {
//   pageTitle: "Create Meter Unit Record",
//   successTitle: "Unit Created Successfully.",
//   failTitle: "Creating Unit Failed.",
//   apiEndpoint: "dailyCreate",
//   createAction: createDailyUnit,
//   createYupSchema: createYupSchema,
//   inputs: {
//     meter_id: { type: "string", required: true },
//     previous_day_unit: { type: "number", required: true },
//     current_day_unit: { type: "number", required: true },
//     read_time: { type: "date", required: true },
//     attach_photo: { type: "file", required: true },
//   },
//   getInitialValues: (location) => ({
//     meter_id: location?.state?.meter_id || "",
//     previous_day_unit: "",
//     current_day_unit: "",
//     read_time: "",
//     attach_photo: null,
//   }),
//   selectBoxDataSelector: (state) => state.meter.meterSelectBoxData,
//   statusSelector: (state) => state.unit.createDailyUnitStatus,
//   msgSelector: (state) => state.unit.createDailyUnitMsg,
//   createInput: createUnitInput,
// };

// const CreateMeterUnitRecord = (props) => {
//   return <CustomForm {...props} />;
// };

// export default withFormHandling(CreateMeterUnitRecord, formConfig);
