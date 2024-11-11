import { patientsTableColumns } from "../../constants/TableColumns";
import withTableAndTitle from "../../components/hoc/withTableAndTitle";
import {
  createPatientStatus,
  deletePatient,
  deletePatientMessage,
  deletePatientStatus,
  getPatients,
  patients,
  patientsMessage,
  patientsStatus,
  resetCreatePatientStatus,
  resetDeletePatientStatus,
  resetUpdatePatientStatus,
  updatePatientStatus,
} from "../../app/Patients/patientSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { setPageTitle } from "../../app/ThemeConfig/themeConfigSlice.jsx";
const Patients = ({ router }) => {
  const dispatch = useDispatch();
  const deleteStatus = useSelector(deletePatientStatus);
  const createStatus = useSelector(createPatientStatus);
  const updateStatus = useSelector(updatePatientStatus);
  useEffect(() => {
    dispatch(setPageTitle("Patients"));
  }, []);
  useEffect(() => {
    (deleteStatus === "succeeded" ||
      createStatus === "succeeded" ||
      updateStatus === "succeeded") &&
      dispatch(getPatients({ api: "/family_member_list" }));
    (deleteStatus === "succeeded" || deleteStatus === "failed") &&
      dispatch(resetDeletePatientStatus());
    (createStatus === "succeeded" || createStatus === "failed") &&
      dispatch(resetCreatePatientStatus());
    (updateStatus === "succeeded" || updateStatus === "failed") &&
      dispatch(resetUpdatePatientStatus());
  }, [dispatch, deleteStatus, createStatus, router.location, updateStatus]);

  // const columns = patientsTableColumns(props.router.nav);
  return <></>;
};

const pageTitleProps = {
  title: "Patients",
  buttonText: "Back",
  buttonLink: -1,
  hasButton: false,
};
const buttonProps = {
  hasButton: true,
  text: "Add Patient",
  link: "/patients/create",
};
const tableProps = {
  columns: patientsTableColumns,
  data: patients,
  dateChange: "dob",
  status: patientsStatus,
  message: patientsMessage,
};
const modalProps = {
  title: "Delete Patient",
  text: "Are you sure you want to delete this patient?",
  method: deletePatient,
  api: "/family_member_delete",
  status: deletePatientStatus,
  message: deletePatientMessage,
  extraData: { uby: JSON.parse(localStorage.getItem("user")).name },
};
const PatientsWithTableAndTitle = withTableAndTitle(
  Patients,
  pageTitleProps,
  buttonProps,
  tableProps,
  modalProps
);

Patients.propTypes = {
  router: PropTypes.object,
};

export default PatientsWithTableAndTitle;
