import PropTypes from "prop-types";
import { monthlyRecordsTableColumns } from "../../constants/TableColumns";
import withCommonLayout from "../../components/hoc/withTableAndTitle";
import {
  getLabRecords,
  labRecordsSelector,
} from "../../app/labRecords/labRecordSlice.jsx";
import InnerContainer from "../../components/common/InnerContainer.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PatientsSegmented from "../../components/common/PatientsSegmented.jsx";
import { patients } from "../../app/Patients/patientSlice.jsx";
import { Avatar, Card, List, Segmented } from "antd";
import { monthsSelector } from "../../app/masterData/masterDataSlice.jsx";
import dayjs from "dayjs";
import withRouter from "../../components/hoc/withRouter.jsx";
import { FaPlusCircle } from "react-icons/fa";
import { setPageTitle } from "../../app/ThemeConfig/themeConfigSlice.jsx";

const MonthlyRecords = ({ router }) => {
  const { location } = router;
  console.log(location);

  const [patient, setPatient] = useState();
  const [month, setMonth] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const dispatch = useDispatch();
  const patientsList = useSelector(patients);
  const labRecordsList = useSelector(labRecordsSelector);
  console.log(labRecordsList);

  const monthsList = useSelector(monthsSelector);
  const selectedMonth = monthsList.find((m) => m.id === month);
  useEffect(() => {
    dispatch(setPageTitle("Lab Records"));
  }, []);
  useEffect(() => {
    if (patientsList.length > 0) {
      setPatient(patientsList[0]?.id);
    }
    if (monthsList.length > 0) {
      setMonth(monthsList[0].id);
    }
  }, [patientsList, monthsList]);
  useEffect(() => {
    if (selectedMonth?.id) {
      dispatch(
        getLabRecords({
          api: "/lab_record_list",
          postData: {
            family_member_id: patient,
            month: selectedMonth.id,
            year: selectedMonth.year,
          },
        })
      );
    }
    setSelectedPatient(patientsList.find((p) => p.id === patient));
  }, [dispatch, patient, selectedMonth, patientsList]);
  return (
    <InnerContainer className={"pt-2"}>
      <PageTitleWithRouter
        title="Lab Records"
        hasButton={true}
        buttonText="Add New Lab Record"
        buttonLink="create"
        icon={<FaPlusCircle />}
      />
      <div className={"flex flex-col items-start"}>
        <PatientsSegmented patient={patient} setPatient={setPatient} />
        <Segmented
          className={" shadow-md gap my-4"}
          options={monthsList.map((m) => ({
            label: m.month,
            value: m.id,
          }))}
          defaultValue={month}
          onChange={(val) => setMonth(val)}
          value={month}
        />
      </div>
      <List
        dataSource={labRecordsList}
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
          <List.Item>
            <div
              onClick={() =>
                router.nav(`${item.id}`, {
                  state: { ...item, patient: selectedPatient },
                })
              }
            >
              <Card title={item.title} hoverable={true}>
                <p>{item.description}</p>
                <p className={"text-gray-400"}>
                  {dayjs(item.lab_date).format("DD-MM-YYYY")}
                </p>
              </Card>
            </div>
          </List.Item>
        )}
      />
    </InnerContainer>
  );
};
MonthlyRecords.propTypes = {
  router: PropTypes.object,
};

const MonthlyRecordsWithRouter = withRouter(MonthlyRecords);
export default MonthlyRecordsWithRouter;
