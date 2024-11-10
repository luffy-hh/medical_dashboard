import React, { useEffect, useState } from "react";
import InnerContainer from "../../components/common/InnerContainer.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import { Button, Flex } from "antd";
import WeeklyBloodPressureChart from "../../components/weeklyCharts/WeeklyBloodPressureChart.jsx";
import WeeklyBloodSugarChart from "../../components/weeklyCharts/WeeklyBloodSugarChart.jsx";
import WeeklyBloodOxygenChart from "../../components/weeklyCharts/WeeklyBloodOxygenChart.jsx";
import WeeklyPulseRateChart from "../../components/weeklyCharts/WeeklyPulseRateChart.jsx";
import WeeklyTemperatureChart from "../../components/weeklyCharts/WeeklyTemperatureChart.jsx";
import { FaAngleDoubleRight } from "react-icons/fa";
import withRouter from "../../components/hoc/withRouter.jsx";
import PropTypes from "prop-types";
import PatientsSegmented from "../../components/common/PatientsSegmented.jsx";
// import { bloodPressureTableColumns } from "../../constants/TableColumns.jsx";
import { useDispatch, useSelector } from "react-redux";
import { patients } from "../../app/Patients/patientSlice.jsx";
import {
  dailyChecksChartSelector,
  getDailyChecksChart,
  getDailyChecksChartStatus,
} from "../../app/dailyCheck/dailyCheckSlice.jsx";
import Loader from "../../components/common/Loader.jsx";
import CustomTable from "../../components/common/CustomTable.jsx";
import { dailyRecordsTableColumns } from "../../constants/TableColumns.jsx";

const ViewDailyRecords = ({ router }) => {
  const dispatch = useDispatch();
  const patientList = useSelector(patients);
  const dailyChecksChart = useSelector(dailyChecksChartSelector);
  const dailyChecksChartStatus = useSelector(getDailyChecksChartStatus);
  console.log(dailyChecksChart);

  const [patient, setPatient] = useState(null);
  const selectedPatient = patientList.find((p) => p.id === patient);
  useEffect(() => {
    if (patientList.length > 0) {
      setPatient(patientList[0]?.id);
    }
  }, [patientList]);
  useEffect(() => {
    if (selectedPatient) {
      dispatch(
        getDailyChecksChart({
          api: `/web_daily_record_chart?family_member_id=${patient}`,
        }),
      );
    }
  }, [dispatch, selectedPatient]);

  return (
    <InnerContainer>
      <PageTitleWithRouter title="Daily Checkup Records" />
      <PatientsSegmented patient={patient} setPatient={setPatient} />
      <CustomTable
        columns={dailyRecordsTableColumns()}
        data={dailyChecksChart}
        loading={dailyChecksChartStatus === "loading"}
      />
    </InnerContainer>
  );
};
ViewDailyRecords.propTypes = {
  router: PropTypes.object,
};
const ViewDailyRecordsWithRouter = withRouter(ViewDailyRecords);
export default ViewDailyRecordsWithRouter;

// {dailyChecksChartStatus === "loading" ? (
//     <Loader />
// ) : (
//     <>

//       {dailyChecksChart.some((d) => {
//         return d.cat_name === "Blood Pressure";
//       }) && (
//           <div className={"my-4"}>
//             <Flex justify={"space-between"} align={"center"}>
//               <p className={"text-2xl font-semibold"}>
//                 Blood Pressure For {selectedPatient?.name}
//               </p>
//               <Button
//                   color={"primary"}
//                   type={"link"}
//                   onClick={() =>
//                       router.nav("blood-pressure", {
//                         state: {
//                           patient: { ...selectedPatient },
//                           category: dailyChecksChart.find(
//                               (d) => d.cat_name === "Blood Pressure",
//                           ),
//                         },
//                       })
//                   }
//               >
//                 See All
//                 <FaAngleDoubleRight />
//               </Button>
//             </Flex>
//             <WeeklyBloodPressureChart />
//           </div>
//       )}
//       {dailyChecksChart.some((d) => {
//         return d.cat_name === "Blood Sugar";
//       }) && (
//           <div className={"my-4"}>
//             <Flex justify={"space-between"} align={"center"}>
//               <p className={"text-2xl font-semibold"}>
//                 Blood Sugar For {selectedPatient?.name}
//               </p>
//               <Button
//                   color={"primary"}
//                   type={"link"}
//                   onClick={() =>
//                       router.nav("blood-sugar", {
//                         state: {
//                           patient: { ...selectedPatient },
//                           category: dailyChecksChart.find(
//                               (d) => d.cat_name === "Blood Sugar",
//                           ),
//                         },
//                       })
//                   }
//               >
//                 See All
//                 <FaAngleDoubleRight />
//               </Button>
//             </Flex>
//             <WeeklyBloodSugarChart />
//           </div>
//       )}
//       {dailyChecksChart.some((d) => {
//         return d.cat_name === "Blood Oxygen";
//       }) && (
//           <div className={"my-4"}>
//             <Flex justify={"space-between"} align={"center"}>
//               <p className={"text-2xl font-semibold"}>
//                 Blood Oxygen For {selectedPatient?.name}
//               </p>
//               <Button
//                   color={"primary"}
//                   type={"link"}
//                   onClick={() =>
//                       router.nav("blood-oxygen", {
//                         state: {
//                           patient: { ...selectedPatient },
//                           category: dailyChecksChart.find(
//                               (d) => d.cat_name === "Blood Oxygen",
//                           ),
//                         },
//                       })
//                   }
//               >
//                 See All
//                 <FaAngleDoubleRight />
//               </Button>
//             </Flex>
//             <WeeklyBloodOxygenChart />
//           </div>
//       )}
//       {dailyChecksChart.some((d) => {
//         return d.cat_name === "Pulse Rate";
//       }) && (
//           <div className={"my-4"}>
//             <Flex justify={"space-between"} align={"center"}>
//               <p className={"text-2xl font-semibold"}>
//                 Pulse Rate For {selectedPatient?.name}
//               </p>
//               <Button
//                   color={"primary"}
//                   type={"link"}
//                   onClick={() =>
//                       router.nav("pulse-rate", {
//                         state: {
//                           patient: { ...selectedPatient },
//                           category: dailyChecksChart.find(
//                               (d) => d.cat_name === "Pulse Rate",
//                           ),
//                         },
//                       })
//                   }
//               >
//                 See All
//                 <FaAngleDoubleRight />
//               </Button>
//             </Flex>
//             <WeeklyPulseRateChart />
//           </div>
//       )}
//       {dailyChecksChart.some((d) => {
//         return d.cat_name === "Temperature";
//       }) && (
//           <div className={"my-4"}>
//             <Flex justify={"space-between"} align={"center"}>
//               <p className={"text-2xl font-semibold"}>
//                 Temperature For {selectedPatient?.name}
//               </p>
//               <Button
//                   color={"primary"}
//                   type={"link"}
//                   onClick={() =>
//                       router.nav("temperature", {
//                         state: {
//                           patient: { ...selectedPatient },
//                           category: dailyChecksChart.find(
//                               (d) => d.cat_name === "Temperature",
//                           ),
//                         },
//                       })
//                   }
//               >
//                 See All
//                 <FaAngleDoubleRight />
//               </Button>
//             </Flex>
//             <WeeklyTemperatureChart />
//           </div>
//       )}
//     </>
// )}
