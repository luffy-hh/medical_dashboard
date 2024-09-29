import PropTypes from "prop-types";
import { dailyRecordsTableColumns } from "../../constants/TableColumns";
import withCommonLayout from "../../components/hoc/withTableAndTitle";

const DailyRecords = (props) => {
  return <></>;
};
DailyRecords.propTypes = {
  router: PropTypes.object,
};

const pageTitleProps = {
  title: "Daily Records",
  buttonText: "Back",
  buttonLink: -1,
  hasButton: false,
};
const buttonProps = {
  text: "Add Daily Record",
  link: "/daily/create",
};
const tableProps = {
  columns: dailyRecordsTableColumns,
  data: [],
};

const DailyRecordsWithCommonLayout = withCommonLayout(
  DailyRecords,
  pageTitleProps,
  buttonProps,
  tableProps
);
export default DailyRecordsWithCommonLayout;
