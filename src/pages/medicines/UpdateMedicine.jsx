import React, { useEffect, useState } from "react";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import PatientsSegmented from "../../components/common/PatientsSegmented.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import PropsTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  getMedicineDetails,
  getUpdateMedicinesMessage,
  getUpdateMedicinesStatus,
  updateMedicine,
} from "../../app/medicines/medicineSlice.jsx";
import { medicineCreateInputs } from "../../constants/FormInputs.jsx";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";

const UpdateMedicine = ({ router, onFinish }) => {
  const { id } = useParams();
  const { location } = router;
  const [patient, setPatient] = useState(location.state.patient.id);
  const [initialValues, setInitialValues] = useState({});
  const [arr, setArr] = useState([]);
  const medicinesDetails = useSelector(getMedicineDetails);
  useEffect(() => {
    Object.keys(medicinesDetails).length === 0 && router.nav(-1);
  }, []);
  useEffect(() => {
    const array =
      Object.keys(medicinesDetails).length > 0 &&
      medicinesDetails.detail.map((d) => {
        const { day_type } = d;
        const medicine = d.medicine_arr.map((m) => {
          const list = m.list.find(
            (l) => l.record_id === location.state.record_id,
          );
          console.log(list);
          return list && { ...list, meal_type: m.meal_type };
        });
        // console.log(medicine);

        return { day_type, ...medicine[0] };
      });
    setArr(array);
  }, [medicinesDetails]);
  // const initialValues = {};
  useEffect(() => {
    const obj = {};
    if (arr.length > 0) {
      obj.start_date = dayjs(
        arr.find((a) => a.day_type_id && a.start_date).start_date,
      ).format("DD-MM-YYYY");
      obj.end_date = dayjs(
        arr.find((a) => a.day_type_id && a.end_date).end_date,
      ).format("DD-MM-YYYY");
      obj.title = arr.find((a) => a.day_type_id && a.title).title;
      obj.medicine_name = arr.find(
        (a) => a.day_type_id && a.medicine_name,
      ).medicine_name;
      obj.medicine_photo = arr.find(
        (a) => a.day_type_id && a.medicine_photo,
      ).medicine_photo;
      obj.morning = arr.some((a) => a.day_type_id && a.day_type === "Morning");

      obj.afternoon = arr.some(
        (a) => a.day_type_id && a.day_type === "Afternoon",
      );

      obj.night = arr.some((a) => a.day_type_id && a.day_type === "Night");
      obj.morning_meal_type = arr.find(
        (a) => a.day_type_id && a.day_type === "Morning",
      )
        ? arr.find((a) => a.day_type_id && a.day_type === "Morning").meal_type
        : "";
      obj.afternoon_meal_type = arr.find(
        (a) => a.day_type_id && a.day_type === "Afternoon",
      )
        ? arr.find((a) => a.day_type_id && a.day_type === "Afternoon").meal_type
        : "";
      obj.night_meal_type = arr.find(
        (a) => a.day_type_id && a.day_type === "Night",
      )
        ? arr.find((a) => a.day_type_id && a.day_type === "Night").meal_type
        : "";
      obj.night_reminder_time = arr.find(
        (a) => a.day_type_id && a.day_type === "Night",
      )
        ? arr.find((a) => a.day_type_id && a.day_type === "Night").reminder_time
        : undefined;
      obj.afternoon_reminder_time = arr.find(
        (a) => a.day_type_id && a.day_type === "Afternoon",
      )
        ? arr.find((a) => a.day_type_id && a.day_type === "Afternoon")
            .reminder_time
        : undefined;
      obj.morning_reminder_time = arr.find(
        (a) => a.day_type_id && a.day_type === "Morning",
      )
        ? arr.find((a) => a.day_type_id && a.day_type === "Morning")
            .reminder_time
        : undefined;
      console.log(obj);
      const filteredObj = Object.fromEntries(
        Object.entries(obj).filter(
          ([key, value]) =>
            value !== null && value !== "" && value !== undefined,
        ),
      );

      setInitialValues(filteredObj);
    }
  }, [arr]);

  // console.log(arr);
  //
  // console.log(location, medicinesDetails);

  return (
    <>
      <PageTitleWithRouter title="Update Medicine" />
      <PatientsSegmented setPatient={setPatient} patient={patient} />
      {Object.keys(initialValues).length > 0 && (
        <CustomFormWithRouter
          data={medicineCreateInputs()}
          initialValues={initialValues}
          onFinish={(values) => {
            const finalValues = {
              start_date: dayjs(values.start_date).format("DD-MM-YYYY"),
              end_date: dayjs(values.end_date).format("DD-MM-YYYY"),
              title: values.title,
              medicine_name: values.medicine_name,
              medicine_photo: values.medicine_photo,
              family_member_id: patient,
              param: [],
            };
            if (values.morning || values.afternoon || values.night) {
              if (values.morning) {
                finalValues.param.push({
                  day_type: "Morning",
                  meal_type: values.morning_meal_type,
                  reminder_time: dayjs(values.morning_reminder_time).format(
                    "HH:mm:ss",
                  ),
                });
              }
              if (values.afternoon) {
                finalValues.param.push({
                  day_type: "Afternoon",
                  meal_type: values.afternoon_meal_type,
                  reminder_time: dayjs(values.afternoon_reminder_time).format(
                    "HH:mm:ss",
                  ),
                });
              }
              if (values.night) {
                finalValues.param.push({
                  day_type: "Night",
                  meal_type: values.night_meal_type,
                  reminder_time: dayjs(values.night_reminder_time).format(
                    "HH:mm:ss",
                  ),
                });
              }
              finalValues.param = JSON.stringify(finalValues.param);
              finalValues.record_id = id;
              console.log(finalValues);
              onFinish(finalValues);
            }
          }}
        />
      )}
    </>
  );
};

UpdateMedicine.propTypes = {
  router: PropsTypes.object,
  onFinish: PropsTypes.func,
};
const formProps = {
  method: updateMedicine,
  api: "/medicine_record_update",
  status: getUpdateMedicinesStatus,
  message: getUpdateMedicinesMessage,
  extraData: {
    uby: JSON.parse(localStorage.getItem("user")).name,
  },
};

const UpdateMedicineWithNotiAndLoader = withNotiAndLoader(
  UpdateMedicine,
  formProps,
);
export default UpdateMedicineWithNotiAndLoader;
