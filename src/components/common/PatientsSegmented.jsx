import React, { useEffect, useState } from "react";
import { Avatar, Segmented } from "antd";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { patients, patientsStatus } from "../../app/Patients/patientSlice.jsx";
import Loader from "./Loader.jsx";

const PatientsSegmented = ({ setPatient, patient }) => {
  const patientsList = useSelector(patients);
  const patientsListStatus = useSelector(patientsStatus);

  return (
    <>
      {patientsListStatus === "loading" ? (
        <Loader />
      ) : (
        <Segmented
          className={" shadow-md gap my-4"}
          onChange={(val) => setPatient(val)}
          defaultValue={patient}
          value={patient}
          options={patientsList.map((p) => ({
            label: (
              <>
                <Avatar
                  src={p.member_photo ? p.member_photo : "/img/avatar.png"}
                  alt={`${p.name}'s avatar`}
                  size={"large"}
                />
                <div>{p.name}</div>
              </>
            ),
            value: p.id,
          }))}
        />
      )}
    </>
  );
};

PatientsSegmented.propTypes = {
  setPatient: PropTypes.func,
  patient: PropTypes.any,
};
export default PatientsSegmented;
