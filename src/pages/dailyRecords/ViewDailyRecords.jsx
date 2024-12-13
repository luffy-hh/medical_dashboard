import React, { useEffect, useMemo, useState } from "react";
import InnerContainer from "../../components/common/InnerContainer.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import { Button, DatePicker, Flex } from "antd";
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
import { categories } from "../../app/category/categorySlice.jsx";
import { FaFileExport } from "react-icons/fa";
import { setPageTitle } from "../../app/ThemeConfig/themeConfigSlice.jsx";
import dayjs from "dayjs";
import { generateQueryString } from "../../utilities/utilsFunctions.js";

const ViewDailyRecords = ({ router }) => {
  const dispatch = useDispatch();
  const patientList = useSelector(patients);
  const dailyChecksChart = useSelector(dailyChecksChartSelector);
  const dailyChecksChartStatus = useSelector(getDailyChecksChartStatus);
  // console.log(dailyChecksChart);
  const categoryList = useSelector(categories);
  const [searchParams, setSearchParams] = useState({});
  // console.log(categoryList);

  const [patient, setPatient] = useState(null);
  const selectedPatient = patientList.find((p) => p.id === patient);
  const memoizedQueryString = useMemo(
    () => generateQueryString(searchParams),
    [searchParams],
  );
  useEffect(() => {
    if (patientList.length > 0) {
      setPatient(patientList[0]?.id);
    }
  }, [patientList]);
  useEffect(() => {
    if (selectedPatient) {
      dispatch(
        getDailyChecksChart({
          api: `/web_daily_record_chart?family_member_id=${patient}&${memoizedQueryString}`,
        }),
      );
    }
  }, [dispatch, selectedPatient, memoizedQueryString]);
  useEffect(() => {
    dispatch(setPageTitle("Daily Checkup Records"));
  }, []);

  return (
    <InnerContainer>
      <PageTitleWithRouter title="Daily Checkup Records" />
      <PatientsSegmented patient={patient} setPatient={setPatient} />
      <div className={"my-4 flex gap-4 flex-wrap"}>
        {categoryList.length > 0 &&
          categoryList.map((c) => (
            <Button
              key={c.id}
              color={"primary"}
              onClick={() =>
                router.nav(c.slug, {
                  state: {
                    patient: { ...selectedPatient },
                    category: c,
                  },
                })
              }
            >
              See More for {selectedPatient?.name} {c.cat_name}
              {/*<FaAngleDoubleRight />*/}
            </Button>
          ))}
      </div>
      <div className={"flex flex-wrap gap-4"}>
        <DatePicker
          picker={"month"}
          placeholder={"Select Month"}
          // allowClear={false}
          // format={"DD-MM-YYYY"}
          onChange={(e) => {
            setSearchParams({
              ...searchParams,
              month: e && dayjs(e).format("M"),
            });
          }}
          className={"w-[90vw] sm:w-[12rem]"}
        />
        <DatePicker
          placeholder={"Select Year"}
          // format={"DD-MM-YYYY"}
          picker={"year"}
          // allowClear={false}
          className={"w-[90vw] sm:w-[12rem]"}
          onChange={(e) =>
            setSearchParams({
              ...searchParams,
              year: e && dayjs(e).format("YYYY"),
            })
          }
        />
      </div>
      <CustomTable
        columns={dailyRecordsTableColumns()}
        data={dailyChecksChart}
        loading={dailyChecksChartStatus === "loading"}
        extraButton={true}
        exportableProps={{
          showColumnPicker: true,
          children: "Export",
          fileName: `Weekly Checkup for ${selectedPatient?.name}`,
          btnProps: {
            className: "flex ml-auto text-white bg-yellow-700",
            icon: <FaFileExport />,
          },
        }}
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
