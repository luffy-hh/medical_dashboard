import React, { useState } from "react";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import PropTypes from "prop-types";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import { appointmentCreateInputs } from "../../constants/FormInputs.jsx";
import { dummyPatients } from "../../constants/DummyData.jsx";
import { Avatar, Segmented } from "antd";

const CreateAppointment = ({ router }) => {
  const [patient, setPatient] = useState(dummyPatients[0].id);
  console.log(patient);
  const selectedPatient = dummyPatients.find((p) => p.id === patient);

  return (
    <>
      <PageTitleWithRouter title="Create Appointment" />
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
        data={appointmentCreateInputs()}
        initialValues={{}}
      />
    </>
  );
};
CreateAppointment.propTypes = {
  router: PropTypes.object,
};
const CreateAppointmentWithNotiAndLoader = withNotiAndLoader(CreateAppointment);
export default CreateAppointmentWithNotiAndLoader;
