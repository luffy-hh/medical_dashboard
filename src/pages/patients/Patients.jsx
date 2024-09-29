import { patientsTableColumns } from "../../constants/TableColumns";
import withTableAndTitle from "../../components/hoc/withTableAndTitle";

const Patients = () => {
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
  text: "Add Patient",
  link: "/patients/create",
};
const tableProps = {
  columns: patientsTableColumns,
  data: [],
};
const PatientsWithTableAndTitle = withTableAndTitle(
  Patients,
  pageTitleProps,
  buttonProps,
  tableProps
);

export default PatientsWithTableAndTitle;
