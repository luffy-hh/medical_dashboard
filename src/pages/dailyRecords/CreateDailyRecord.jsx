import React, { useEffect } from "react";
import PageTitleWithRouter from "../../components/common/PageTitle";
import InnerContainer from "../../components/common/InnerContainer";
import CustomFormWithRouter from "../../components/common/CustomForm";
import {
  dailyBloodOxygenInputs,
  dailyBloodPressureInputs,
  dailyBloodSugarInputs,
  dailyPulseRateInputs,
  dailyTemperatureInputs,
} from "../../constants/FormInputs.jsx";
import { useParams } from "react-router-dom";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import PropTypes from "prop-types";
import {
  createDailyCheck,
  getCreateDailyCheckMessage,
  getCreateDailyCheckStatus,
  resetCreateDailyCheckStatus,
} from "../../app/dailyCheck/dailyCheckSlice.jsx";
import { transformObject } from "../../utilities/utilsFunctions.js";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";

const CreateDailyRecord = ({ router, onFinish }) => {
  const { name } = useParams();
  const { location } = router;
  const dispatch = useDispatch();
  const dailyCheckCreateStatus = useSelector(getCreateDailyCheckStatus);

  let inputs = () => {
    switch (name) {
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
  useEffect(() => {
    if (
      dailyCheckCreateStatus === "succeeded" ||
      dailyCheckCreateStatus === "failed"
    ) {
      dispatch(resetCreateDailyCheckStatus());
    }
  }, [dailyCheckCreateStatus, dispatch]);

  return (
    <>
      <PageTitleWithRouter
        title="Create Daily Record"
        buttonText="Back"
        buttonLink={-1}
        hasButton={false}
      />
      <CustomFormWithRouter
        data={inputs()}
        initialValues={{}}
        onFinish={(values) => {
          const finalValues = transformObject(values);
          finalValues.check_cat_id = location.state.category;
          finalValues.record_date = dayjs(values.record_date).format(
            "DD-MM-YYYY HH:mm:ss"
          );
          finalValues.param = JSON.stringify(finalValues.param);
          finalValues.family_member_id = location.state.id;
          // console.log(finalValues);
          onFinish(finalValues);
        }}
      />
      {/*<CustomFormWithRouter {...props} />*/}
    </>
  );
};

CreateDailyRecord.propTypes = {
  router: PropTypes.object,
  onFinish: PropTypes.func,
};

const formProps = {
  method: createDailyCheck,
  api: "/daily_record_store",
  status: getCreateDailyCheckStatus,
  message: getCreateDailyCheckMessage,
  extraData: {
    cby: JSON.parse(localStorage.getItem("user")).name,
  },
};

const CreateDailyRecordWithNotiAndLoader = withNotiAndLoader(
  CreateDailyRecord,
  formProps
);

export default CreateDailyRecordWithNotiAndLoader;
