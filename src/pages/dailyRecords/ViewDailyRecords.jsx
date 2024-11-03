import React, { useState } from "react";
import InnerContainer from "../../components/common/InnerContainer.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import Chart from "react-apexcharts";
import {
  dummyBloodPressure,
  dummyPatients,
} from "../../constants/DummyData.jsx";
import { Avatar, Button, Flex, Row, Segmented } from "antd";
import WeeklyBloodPressureChart from "../../components/weeklyCharts/WeeklyBloodPressureChart.jsx";
import WeeklyBloodSugarChart from "../../components/weeklyCharts/WeeklyBloodSugarChart.jsx";
import WeeklyBloodOxygenChart from "../../components/weeklyCharts/WeeklyBloodOxygenChart.jsx";
import WeeklyPulseRateChart from "../../components/weeklyCharts/WeeklyPulseRateChart.jsx";
import WeeklyTemperatureChart from "../../components/weeklyCharts/WeeklyTemperatureChart.jsx";
import { FaAngleDoubleRight } from "react-icons/fa";
import withRouter from "../../components/hoc/withRouter.jsx";
import PropTypes from "prop-types";
import { bloodPressureTableColumns } from "../../constants/TableColumns.jsx";

const ViewDailyRecords = ({ router }) => {
  const [patient, setPatient] = useState(dummyPatients[0].id);
  const selectedPatient = dummyPatients.find((p) => p.id === patient);
  // const bloodPressureColumns = bloodPressureTableColumns();
  // console.log(bloodPressureColumns);

  return (
    <InnerContainer>
      <PageTitleWithRouter title="Daily Checkup Records" />
      <Segmented
        className={" shadow-md gap"}
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
      <div className={"my-4"}>
        <Flex justify={"space-between"} align={"center"}>
          <p className={"text-2xl font-semibold"}>
            Blood Pressure For {selectedPatient.name}
          </p>
          <Button
            color={"primary"}
            type={"link"}
            onClick={() =>
              router.nav("blood-pressure", {
                state: {
                  patient: { ...selectedPatient },
                  table: {
                    columns: "pressure",
                    data: dummyBloodPressure,
                  },
                },
              })
            }
          >
            See All
            <FaAngleDoubleRight />
          </Button>
        </Flex>
        <WeeklyBloodPressureChart />
      </div>
      <div className={"my-4"}>
        <p className={"text-2xl font-semibold"}>
          Blood Sugar Level For {selectedPatient.name}
        </p>
        <WeeklyBloodSugarChart />
      </div>
      <div className={"my-4"}>
        <p className={"text-2xl font-semibold"}>
          Blood Oxygen For {selectedPatient.name}
        </p>
        <WeeklyBloodOxygenChart />
      </div>
      <div className={"my-4"}>
        <p className={"text-2xl font-semibold"}>
          Pulse Rate For {selectedPatient.name}
        </p>
        <WeeklyPulseRateChart />
      </div>
      <div className={"my-4"}>
        <p className={"text-2xl font-semibold"}>
          Temperature For {selectedPatient.name}
        </p>
        <WeeklyTemperatureChart />
      </div>
    </InnerContainer>
  );
};
ViewDailyRecords.propTypes = {
  router: PropTypes.object,
};
const ViewDailyRecordsWithRouter = withRouter(ViewDailyRecords);
export default ViewDailyRecordsWithRouter;
