import React from "react";
import withRouter from "../../components/hoc/withRouter.jsx";
import PropTypes from "prop-types";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import {
  dailyBloodOxygenInputs,
  dailyBloodPressureInputs,
  dailyBloodSugarInputs,
  dailyPulseRateInputs,
  dailyTemperatureInputs,
} from "../../constants/FormInputs.jsx";
import dayjs from "dayjs";
import { transformObject } from "../../utilities/utilsFunctions.js";
import {
  getUpdateDailyCheckMessage,
  getUpdateDailyCheckStatus,
  updateDailyCheck,
} from "../../app/dailyCheck/dailyCheckSlice.jsx";

const UpdateDailyRecord = ({ router, onFinish }) => {
  const { location } = router;
  console.log(location);
  let initialValues = {
    ...location.state.dailyCheck,
    record_date: dayjs(location.state.dailyCheck.record_date).format(
      "DD-MM-YYYY HH:mm:ss",
    ),
  };
  if (location.state.category.slug === "blood_pressure") {
    initialValues.Systolic = location.state.dailyCheck.categories[0]?.value;
    initialValues.Diastolic = location.state.dailyCheck.categories[1]?.value;
  }
  if (location.state.category.slug === "blood_sugar") {
    initialValues["(After Meal)"] =
      location.state.dailyCheck.categories[0]?.value;
    initialValues["(Before Meal)"] =
      location.state.dailyCheck.categories[1]?.value;
  }
  if (location.state.category.slug === "blood_oxygen") {
    initialValues["%"] = location.state.dailyCheck.categories[0]?.value;
  }
  if (location.state.category.slug === "pulse_rate") {
    initialValues["bpm"] = location.state.dailyCheck.categories[0]?.value;
  }
  if (location.state.category.slug === "temperature") {
    initialValues["°F"] = location.state.dailyCheck.categories[0]?.value;
  }

  let inputs = () => {
    switch (location.state.category.slug) {
      case "blood_pressure":
        return dailyBloodPressureInputs();
      case "blood_sugar":
        return dailyBloodSugarInputs();
      case "blood_oxygen":
        return dailyBloodOxygenInputs();
      case "pulse_rate":
        return dailyPulseRateInputs();
      case "temperature":
        return dailyTemperatureInputs();
      default:
        return [];
    }
  };
  return (
    <>
      <PageTitleWithRouter title={"Update Daily Record"} />
      <CustomFormWithRouter
        data={inputs()}
        initialValues={initialValues}
        onFinish={(values) => {
          const finalValues = transformObject(values);
          finalValues.record_date = dayjs(finalValues.record_date).format(
            "DD-MM-YYYY HH:mm:ss",
          );
          finalValues.param = JSON.stringify(
            location.state.dailyCheck.categories.map((c) => {
              const obj = finalValues.param.find((p) => c.key === p.key);
              console.log(obj);

              return { ...obj, id: c.id };
            }),
          );
          finalValues.family_member_id =
            location.state.dailyCheck.family_member_id;
          finalValues.check_cat_id = location.state.category.id;
          finalValues.record_id = location.state.dailyCheck.id;
          console.log(finalValues);

          onFinish(finalValues);
        }}
      />
    </>
  );
};
UpdateDailyRecord.propTypes = {
  router: PropTypes.object,
  onFinish: PropTypes.func,
};

const formProps = {
  method: updateDailyCheck,
  api: "/daily_record_update",
  status: getUpdateDailyCheckStatus,
  message: getUpdateDailyCheckMessage,
  extraData: {
    uby: JSON.parse(localStorage.getItem("user")).name,
  },
};

const UpdateDailyRecordWithNotiAndLoader = withNotiAndLoader(
  UpdateDailyRecord,
  formProps,
);
export default UpdateDailyRecordWithNotiAndLoader;
