import PropTypes from "prop-types";
import withRouter from "../../components/hoc/withRouter.jsx";
import InnerContainer from "../../components/common/InnerContainer.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import { Avatar, Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import PatientsSegmented from "../../components/common/PatientsSegmented.jsx";
import { useDispatch, useSelector } from "react-redux";
import { patients } from "../../app/Patients/patientSlice.jsx";
import { categories } from "../../app/category/categorySlice.jsx";
import { setPageTitle } from "../../app/ThemeConfig/themeConfigSlice.jsx";

const DailyRecords = ({ router }) => {
  const dispatch = useDispatch();
  const patientList = useSelector(patients);
  const categoryList = useSelector(categories);
  const [patient, setPatient] = useState(patientList[0]?.id);
  console.log(patient, categoryList);
  const selectedPatient = patientList.find((p) => p.id === patient);
  useEffect(() => {
    dispatch(setPageTitle("Create Checkup"));
  }, []);

  return (
    <InnerContainer>
      <PageTitleWithRouter
        title="Create Daily Checkup Records"
        hasButton={false}
      />
      <p className="ml-6 text-xl font-bold">Patients</p>
      <PatientsSegmented patient={patient} setPatient={setPatient} />
      <Row
        gutter={[
          {
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          },
          16,
        ]}
        className="h-auto mx-auto my-6"
      >
        {categoryList.length > 0 &&
          categoryList.map((c) => (
            <Col lg={6} md={8} sm={12} xs={24} key={c.id}>
              <Card
                actions={[
                  <CiCirclePlus
                    key="Add"
                    className={"mx-auto text-4xl"}
                    onClick={() =>
                      router.nav(`${c.slug}/create`, {
                        state: { ...selectedPatient, category: c.id },
                      })
                    }
                  />,
                ]}
                hoverable={true}
              >
                <Card.Meta
                  avatar={
                    <Avatar
                      src={
                        selectedPatient?.member_photo
                          ? selectedPatient?.member_photo
                          : "/img/avatar.png"
                      }
                    />
                  }
                  title={`Add ${selectedPatient?.name}'s ${c.cat_name} Level`}
                />
              </Card>
            </Col>
          ))}
      </Row>
    </InnerContainer>
  );
};
DailyRecords.propTypes = {
  router: PropTypes.object,
};

const DailyRecordsWithRouterAndTable = withRouter(DailyRecords);
export default DailyRecordsWithRouterAndTable;
