import React, { useState } from "react";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import { medicineCreateInputs } from "../../constants/FormInputs.jsx";
import { dummyPatients } from "../../constants/DummyData.jsx";
import { Avatar, Segmented } from "antd";
import PropTypes from "prop-types";

const CreateMedicine = ({ onFinish }) => {
  const [patient, setPatient] = useState(dummyPatients[0].id);
  console.log(patient);
  const selectedPatient = dummyPatients.find((p) => p.id === patient);
  const [dayTypeValues, setDayTypeValues] = useState([]);
  const [mealTypeValues, setMealTypeValues] = useState([]);

  const data = medicineCreateInputs(
    dayTypeValues,
    setDayTypeValues,
    mealTypeValues,
    setMealTypeValues,
  );
  return (
    <>
      <PageTitleWithRouter title="Create Medicine" />
      <Segmented
        className={" shadow-md gap my-4"}
        onChange={(val) => setPatient(val)}
        defaultValue={dummyPatients[0].id}
        value={patient}
        options={dummyPatients.map((p) => ({
          label: (
            <>
              <Avatar src={p.image} alt={`${p.name}'s avatar`} size={"large"} />
              <div>{p.name}</div>
            </>
          ),
          value: p.id,
        }))}
      />
      <CustomFormWithRouter
        data={data}
        initialValues={{}}
        onFinish={(values) => {
          onFinish(values);
        }}
      />
      {/*<Form></Form>*/}
    </>
  );
};

CreateMedicine.propTypes = {
  onFinish: PropTypes.func,
};

const formProps = {
  method: () => {},
  api: "",
  status: () => {},
  message: () => {},
  extraData: {},
};

const CreateMedicineWithNotiAndLoader = withNotiAndLoader(
  CreateMedicine,
  formProps,
);
export default CreateMedicineWithNotiAndLoader;
