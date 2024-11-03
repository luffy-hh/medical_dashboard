import { patientsTableColumns } from "../../constants/TableColumns";
import withTableAndTitle from "../../components/hoc/withTableAndTitle";
import { deletePatient, patients } from "../../app/Patients/patientSlice.jsx";
import { useDispatch } from "react-redux";
const Patients = () => {
  const dispatch = useDispatch();
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
};
const modalProps = {
  title: "Delete Patient",
  text: "Are you sure you want to delete this patient?",
  method: deletePatient,
  api: "/family_member_delete",
  postData: {
    uby: JSON.parse(localStorage.getItem("user")).name,
  },
};
const PatientsWithTableAndTitle = withTableAndTitle(
  Patients,
  pageTitleProps,
  buttonProps,
  tableProps,
  modalProps,
);

export default PatientsWithTableAndTitle;
