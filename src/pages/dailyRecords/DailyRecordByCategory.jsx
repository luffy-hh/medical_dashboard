import React, { useEffect } from "react";
import InnerContainer from "../../components/common/InnerContainer.jsx";
import withRouter from "../../components/hoc/withRouter.jsx";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import Chart from "react-apexcharts";
import { Tabs } from "antd";
import CustomTable from "../../components/common/CustomTable.jsx";
import { dummyBloodPressure } from "../../constants/DummyData.jsx";
import { bloodPressureTableColumns } from "../../constants/TableColumns.jsx";

const DailyRecordByCategory = ({ router }) => {
  const { location } = router;

  useEffect(() => {
    !location.state && router.nav(-1);
  }, [location]);
  const { category } = useParams();
  console.log(
    category
      .split("-")
      .map((c) => c.charAt(0).toUpperCase() + c.slice(1))
      .join(" "),
    location,
  );
  const getRowClassName = (record) => {
    if (record.systolic < 90 || record.diastolic < 60) {
      return "bg-cyan-700";
    } else if (
      (record.systolic > 120 && record.systolic <= 140) ||
      (record.diastolic > 80 && record.diastolic <= 90)
    ) {
      return "bg-yellow-100";
    } else if (record.systolic > 140 || record.diastolic > 90) {
      return "bg-red-100";
    } else {
      return "";
    }
  };
  const tabItems = [
    {
      key: "table",
      label: "Table",
      children: (
        <>
          <CustomTable
            columns={
              location?.state?.table?.columns === "pressure" &&
              bloodPressureTableColumns()
            }
            data={location.state.table.data}
            rowClassName={getRowClassName}
          />
        </>
      ),
    },
    {
      key: "chart",
      label: "Chart",
      children: <div>Chart</div>,
    },
  ];

  return (
    <InnerContainer>
      <PageTitleWithRouter
        title={`Daily ${category
          .split("-")
          .map((c) => c.charAt(0).toUpperCase() + c.slice(1))
          .join(" ")} Records For ${location.state?.patient?.name}`}
        hasButton={true}
        buttonText="Back"
        buttonLink="/daily-records"
      />
      <Tabs
        tabBarGutter={3}
        defaultActiveKey="table"
        tabPosition="top"
        type="card"
        items={tabItems}
      />
      {/*<Chart />*/}
    </InnerContainer>
  );
};

DailyRecordByCategory.propTypes = {
  router: PropTypes.object,
};
const DailyRecordByCategoryWithRouter = withRouter(DailyRecordByCategory);
export default DailyRecordByCategoryWithRouter;
