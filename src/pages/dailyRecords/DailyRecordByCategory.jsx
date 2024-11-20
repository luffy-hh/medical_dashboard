import React, { useEffect, useState } from "react";
import InnerContainer from "../../components/common/InnerContainer.jsx";
import withRouter from "../../components/hoc/withRouter.jsx";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import Chart from "react-apexcharts";
import { Card, List, Segmented, Tabs } from "antd";
import CustomTable from "../../components/common/CustomTable.jsx";
import { dummyBloodPressure } from "../../constants/DummyData.jsx";
import { bloodPressureTableColumns } from "../../constants/TableColumns.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  dailyChecksMonthlyChartKeysSelector,
  dailyChecksMonthlyChartValuesSelector,
  dailyChecksMonthlySelector,
  dailyChecksMonthlyStatusSelector,
  getDailyChecksMonthly,
  getUpdateDailyCheckStatus,
  resetUpdateDailyCheckStatus,
} from "../../app/dailyCheck/dailyCheckSlice.jsx";
// import { months } from "../../constants/MonthData.jsx";
import Loader from "../../components/common/Loader.jsx";
import { monthsSelector } from "../../app/masterData/masterDataSlice.jsx";
import MonthlyBloodPressureChart from "../../components/monthlyChart/MonthlyBloodPressureChart.jsx";
import MonthlyBloodSugarChart from "../../components/monthlyChart/MonthlyBloodSugarChart.jsx";
import MonthlyTemperatureChart from "../../components/monthlyChart/MonthlyTemperatureChart.jsx";
import MonthlyBloodOxygenChart from "../../components/monthlyChart/MonthlyBloodOxygenChart.jsx";
import MonthlyPulseRateChart from "../../components/monthlyChart/MonthlyPulseRateChart.jsx";

const DailyRecordByCategory = ({ router }) => {
  const { location } = router;
  const dispatch = useDispatch();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const { category } = useParams();
  const dailyChecksMonthly = useSelector(dailyChecksMonthlySelector);
  const dailyChecksMonthlyChartKeys = useSelector(
    dailyChecksMonthlyChartKeysSelector
  );

  const dailyChecksMonthlyChartValues = useSelector(
    dailyChecksMonthlyChartValuesSelector
  );

  const dailyChecksMonthlyStatus = useSelector(
    dailyChecksMonthlyStatusSelector
  );
  // console.log({ ...location.state });

  const months = useSelector(monthsSelector);
  const [month, setMonth] = React.useState(null);
  const [systolic, setSystolic] = useState([]);
  const [diastolic, setDiastolic] = useState([]);
  const [afterMeal, setAfterMeal] = useState([]);
  const [beforeMeal, setBeforeMeal] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [oxygen, setOxygen] = useState([]);
  const [pulse, setPulse] = useState([]);
  // const []
  const [monthLabels, setMonthLabels] = useState([]);
  // console.log(dailyChecksMonthly);

  useEffect(() => {
    if (dailyChecksMonthlyChartKeys.length > 0) {
      setMonthLabels(dailyChecksMonthlyChartKeys);
    }
    if (category === "blood_pressure") {
      if (dailyChecksMonthlyChartValues.length > 0) {
        const sys = dailyChecksMonthlyChartValues.map((d) =>
          d.value1 ? d.value1 : 0
        );
        const dia = dailyChecksMonthlyChartValues.map((d) =>
          d.value2 ? d.value2 : 0
        );
        setSystolic(sys);
        setDiastolic(dia);
      }
    } else if (category === "blood_sugar") {
      if (dailyChecksMonthlyChartValues.length > 0) {
        const before = dailyChecksMonthlyChartValues.map((d) =>
          d.value1 ? d.value1 : 0
        );
        const after = dailyChecksMonthlyChartValues.map((d) =>
          d.value2 ? d.value2 : 0
        );
        setBeforeMeal(before);
        setAfterMeal(after);
      }
    } else if (category === "temperature") {
      if (dailyChecksMonthlyChartValues.length > 0) {
        const temp = dailyChecksMonthlyChartValues.map((d) =>
          d.value1 ? d.value1 : 0
        );
        setTemperature(temp);
      }
    } else if (category === "blood_oxygen") {
      if (dailyChecksMonthlyChartValues.length > 0) {
        const oxy = dailyChecksMonthlyChartValues.map((d) =>
          d.value1 ? d.value1 : 0
        );
        setOxygen(oxy);
      }
    } else if (category === "pulse_rate") {
      const rate = dailyChecksMonthlyChartValues.map((d) =>
        d.value1 ? d.value1 : 0
      );
      setPulse(rate);
    }
  }, [dailyChecksMonthlyChartKeys]);
  // console.log(location);
  useEffect(() => {
    setMonth(months[0]?.id);
  }, [months]);
  useEffect(() => {
    dispatch(
      getDailyChecksMonthly({
        api: "/daily_record_by_monthly",
        postData: {
          family_member_id: location?.state?.patient?.id,
          check_category_id: location?.state?.category?.id,
          month: month,
        },
      })
    );
  }, [dispatch, month]);
  useEffect(() => {
    !location.state && router.nav(-1);
  }, [location]);
  // console.log(
  //   category
  //     .split("-")
  //     .map((c) => c.charAt(0).toUpperCase() + c.slice(1))
  //     .join(" "),
  //   location,
  // );
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
          {dailyChecksMonthlyStatus === "loading" ? (
            <Loader />
          ) : (
            <List
              dataSource={dailyChecksMonthly}
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
                xl: 4,
                xxl: 3,
              }}
              renderItem={(item) => (
                <List.Item
                  onClick={() =>
                    item.id !== null &&
                    router.nav(`/daily-records/${item.id}/details`, {
                      state: { ...location.state },
                    })
                  }
                >
                  <Card title={`${item.record_date}`} hoverable={true}>
                    {item.value !== "" ? item.value : "-"}
                  </Card>
                </List.Item>
              )}
            />
          )}
        </>
      ),
    },
    {
      key: "chart",
      label: "Chart",
      children:
        category === "blood_pressure" ? (
          <MonthlyBloodPressureChart
            systolicData={systolic}
            diastolicData={diastolic}
            label={monthLabels}
          />
        ) : category === "blood_sugar" ? (
          <MonthlyBloodSugarChart
            label={monthLabels}
            before={beforeMeal}
            after={afterMeal}
          />
        ) : category === "temperature" ? (
          <MonthlyTemperatureChart
            label={monthLabels}
            temperature={temperature}
          />
        ) : category === "blood_oxygen" ? (
          <MonthlyBloodOxygenChart label={monthLabels} oxygen={oxygen} />
        ) : category === "pulse_rate" ? (
          <MonthlyPulseRateChart label={monthLabels} pulse={pulse} />
        ) : (
          <></>
        ),
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
      <Segmented
        options={months.map((m) => ({ label: m.month, value: m.id }))}
        defaultValue={month}
        value={month}
        onChange={(val) => setMonth(val)}
        size={"small"}
      />
      <Tabs
        tabBarGutter={3}
        defaultActiveKey="table"
        tabPosition="top"
        type="card"
        items={tabItems}
      />
    </InnerContainer>
  );
};

DailyRecordByCategory.propTypes = {
  router: PropTypes.object,
};
const DailyRecordByCategoryWithRouter = withRouter(DailyRecordByCategory);
export default DailyRecordByCategoryWithRouter;
