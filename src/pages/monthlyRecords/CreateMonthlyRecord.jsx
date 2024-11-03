import React, { useState } from "react";
import InnerContainer from "../../components/common/InnerContainer";
import PageTitleWithRouter from "../../components/common/PageTitle";
import CustomFormWithRouter from "../../components/common/CustomForm";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import { dummyPatients } from "../../constants/DummyData.jsx";
import { Avatar, Segmented } from "antd";
import { medicalCheckupCreateInputs } from "../../constants/FormInputs.jsx";

const CreateMonthlyRecord = () => {
  const [patient, setPatient] = useState(dummyPatients[0].id);
  console.log(patient);
  const selectedPatient = dummyPatients.find((p) => p.id === patient);

  return (
    <>
      <PageTitleWithRouter title="Create Monthly Record" />
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
        data={medicalCheckupCreateInputs()}
        initialValues={{}}
      />
    </>
  );
};

const CreateMonthlyRecordWithNotiAndLoader =
  withNotiAndLoader(CreateMonthlyRecord);
export default CreateMonthlyRecordWithNotiAndLoader;
