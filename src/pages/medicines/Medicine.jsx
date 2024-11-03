import React from "react";
import withTableAndTitle from "../../components/hoc/withTableAndTitle.jsx";
import { medicines } from "../../app/medicines/medicineSlice.jsx";
import { medicineTableColumns } from "../../constants/TableColumns.jsx";

const Medicine = () => {
  return <></>;
};
const pageTitleProps = {
  title: "Medicines",
  hasButton: false,
};
const buttonProps = {
  hasButton: true,
  text: "Add Medicine",
  link: "/medicine/create",
};
const tableProps = {
  columns: medicineTableColumns,
  data: medicines,
};
const MedicineWithTableAndTitle = withTableAndTitle(
  Medicine,
  pageTitleProps,
  buttonProps,
  tableProps,
);

export default MedicineWithTableAndTitle;
