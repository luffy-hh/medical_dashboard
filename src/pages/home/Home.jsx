import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageTitle } from "../../app/ThemeConfig/themeConfigSlice";
import withRouter from "../../components/hoc/withRouter.jsx";
import InnerContainer from "../../components/common/InnerContainer.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import { Calendar, Card } from "antd";
import { BsPeople } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import CustomTable from "../../components/common/CustomTable.jsx";
import { patients } from "../../app/Patients/patientSlice.jsx";
import PatientsSegmented from "../../components/common/PatientsSegmented.jsx";
import {
  dailyChecksChartSelector,
  getDailyChecksChart,
  getDailyChecksChartStatus,
} from "../../app/dailyCheck/dailyCheckSlice.jsx";
import {
  dailyRecordsTableColumns,
  dashboardAppointmentTableColumns,
} from "../../constants/TableColumns.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import {
  appointments,
  getAppointments,
} from "../../app/appointment/appointmentSlice.jsx";

const Home = ({ router }) => {
  const dispatch = useDispatch();
  const patientList = useSelector(patients);
  const appointmentList = useSelector(appointments);
  const dailyChecksChart = useSelector(dailyChecksChartSelector);
  const dailyChecksChartStatus = useSelector(getDailyChecksChartStatus);
  const [patient, setPatient] = useState(null);
  const selectedPatient = patientList.find((p) => p.id === patient);

  useEffect(() => {
    dispatch(
      getAppointments({
        api: "/appointment_list",
        postData: {
          // family_member_id: patient,
          // from_date: searchParams.from_date,
          // to_date: searchParams.to_date,
        },
      }),
    );
  }, [dispatch]);
  useEffect(() => {
    dispatch(setPageTitle("Dashboard"));
  }, []);
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
  console.log(appointmentList);

  return (
    <InnerContainer className={"flex gap-4"}>
      <div className={"w-[65%] bg-gray-300 h-full rounded-xl p-2"}>
        <PageTitleWithRouter title={"Dashboard"} />

        <div
          className={
            "w-[90%] mx-auto bg-white flex flex-wrap rounded-lg gap-4 justify-center"
          }
        >
          <Card>
            <div className={"flex flex-1 gap-4 items-center"}>
              <BsPeople className={"text-5xl inline-block"} />
              <div className={"flex flex-col"}>
                <p className={"text-3xl text-center"}>6</p>
                <p className={"text-gray-400"}>Patients</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className={"flex flex-1 gap-4 items-center"}>
              <BiCategory className={"text-5xl inline-block"} />
              <div className={"flex flex-col"}>
                <p className={"text-3xl text-center"}>5</p>
                <p className={"text-gray-400"}>Categories</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className={"flex flex-1 gap-4 items-center"}>
              <FaUsers className={"text-5xl inline-block"} />
              <div className={"flex flex-col"}>
                <p className={"text-3xl text-center"}>5</p>
                <p className={"text-gray-400"}>Users</p>
              </div>
            </div>
          </Card>
        </div>
        <PageTitleWithRouter title={"Daily Checkup Records"} />
        <PatientsSegmented setPatient={setPatient} patient={patient} />
        <CustomTable
          columns={dailyRecordsTableColumns()}
          data={dailyChecksChart}
          loading={dailyChecksChartStatus === "loading"}
        />
      </div>
      <div className={"w-[35%]"}>
        {/*<Calendar*/}
        {/*  fullscreen={false}*/}
        {/*  headerRender={() => {*/}
        {/*    return <></>;*/}
        {/*  }}*/}
        {/*/>*/}
        <PageTitleWithRouter title={"Upcoming Appointments"} />
        <CustomTable
          columns={dashboardAppointmentTableColumns()}
          data={appointmentList}
        />
      </div>
    </InnerContainer>
  );
};

const HomeWithRouter = withRouter(Home);
export default HomeWithRouter;
