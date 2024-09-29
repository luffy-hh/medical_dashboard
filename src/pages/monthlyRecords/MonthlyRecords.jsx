import PropTypes from "prop-types";
import { monthlyRecordsTableColumns } from "../../constants/TableColumns";
import withCommonLayout from "../../components/hoc/withTableAndTitle";

const MonthlyRecords = (props) => {
  return <></>;
};
MonthlyRecords.propTypes = {
  router: PropTypes.object,
};
const pageTitleProps = {
  title: "Monthly Records",
  buttonText: "Back",
  buttonLink: -1,
  hasButton: false,
};
const buttonProps = {
  text: "Add Monthly Record",
  link: "/monthly/create",
};
const tableProps = {
  columns: monthlyRecordsTableColumns,
  data: [],
};
const MonthlyRecordsWithCommonLayout = withCommonLayout(
  MonthlyRecords,
  pageTitleProps,
  buttonProps,
  tableProps
);

// const MonthlyRecordsWithRouter = withRouter(MonthlyRecords);
export default MonthlyRecordsWithCommonLayout;
