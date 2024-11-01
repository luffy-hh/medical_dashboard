import PropTypes from "prop-types";
import withRouter from "../../components/hoc/withRouter.jsx";
import InnerContainer from "../../components/common/InnerContainer.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import { Avatar, Card, Col, Row, Segmented } from "antd";
import { dummyPatients } from "../../constants/DummyData.jsx";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const DailyRecords = ({ router }) => {
  const [patient, setPatient] = useState(dummyPatients[0].id);
  console.log(patient);
  const selectedPatient = dummyPatients.find((p) => p.id === patient);

  return (
    <>
      <InnerContainer>
        <PageTitleWithRouter title="Daily Records" hasButton={false} />
        <p className="ml-6 text-xl font-bold">Patients</p>
        <Segmented
          className={" shadow-md gap"}
          onChange={(val) => setPatient(val)}
          defaultValue={dummyPatients[0].id}
          value={patient}
          options={dummyPatients.map((p) => ({
            label: (
              <>
                <Avatar
                  src={p.image}
                  alt={`${p.name}'s avatar`}
                  size={"large"}
                />
                <div>{p.name}</div>
              </>
            ),
            value: p.id,
          }))}
        />
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
          className="h-auto mx-auto mt-6"
        >
          <Col lg={6} md={8} sm={12} xs={24}>
            <Card
              actions={[
                <CiCirclePlus
                  key="Add"
                  className={"mx-auto text-4xl"}
                  onClick={() =>
                    router.nav("blood-sugar/create", {
                      state: { ...selectedPatient },
                    })
                  }
                />,
              ]}
              hoverable={true}
            >
              <Card.Meta
                avatar={<Avatar src={selectedPatient.image} />}
                title={`Add ${selectedPatient.name}'s Blood Sugar Level`}
              />
            </Card>
          </Col>
          <Col lg={6} md={8} sm={12} xs={24}>
            <Card
              actions={[
                <CiCirclePlus
                  key="Add"
                  className={"mx-auto text-4xl"}
                  onClick={() =>
                    router.nav("blood-pressure/create", {
                      state: { ...selectedPatient },
                    })
                  }
                />,
              ]}
              hoverable={true}
            >
              <Card.Meta
                avatar={<Avatar src={selectedPatient.image} />}
                title={`Add ${selectedPatient.name}'s Blood Pressure`}
              />
            </Card>
          </Col>
          <Col lg={6} md={8} sm={12} xs={24}>
            <Card
              actions={[
                <CiCirclePlus
                  key="Add"
                  className={"mx-auto text-4xl"}
                  onClick={() =>
                    router.nav("temperature/create", {
                      state: { ...selectedPatient },
                    })
                  }
                />,
              ]}
              hoverable={true}
            >
              <Card.Meta
                avatar={<Avatar src={selectedPatient.image} />}
                title={`Add ${selectedPatient.name}'s Temperature`}
              />
            </Card>
          </Col>
          <Col lg={6} md={8} sm={12} xs={24}>
            <Card
              actions={[
                <CiCirclePlus
                  key="Add"
                  className={"mx-auto text-4xl"}
                  onClick={() =>
                    router.nav("pulse-rate/create", {
                      state: { ...selectedPatient },
                    })
                  }
                />,
              ]}
              hoverable={true}
            >
              <Card.Meta
                avatar={<Avatar src={selectedPatient.image} />}
                title={`Add ${selectedPatient.name}'s Pulse Rate`}
              />
            </Card>
          </Col>
          <Col lg={6} md={8} sm={12} xs={24}>
            <Card
              actions={[
                <CiCirclePlus
                  key="Add"
                  className={"mx-auto text-4xl"}
                  onClick={() =>
                    router.nav("blood-oxygen/create", {
                      state: { ...selectedPatient },
                    })
                  }
                />,
              ]}
              hoverable={true}
            >
              <Card.Meta
                avatar={<Avatar src={selectedPatient.image} />}
                title={`Add ${selectedPatient.name}'s Blood Oxygen Level`}
              />
            </Card>
          </Col>
        </Row>
      </InnerContainer>
    </>
  );
};
DailyRecords.propTypes = {
  router: PropTypes.object,
};

// const pageTitleProps = {
//   title: "Daily Records",
//   buttonText: "Back",
//   buttonLink: -1,
//   hasButton: false,
// };
// const buttonProps = {
//   text: "Add Daily Record",
//   link: "/daily/create",
// };
// const tableProps = {
//   columns: dailyRecordsTableColumns,
//   data: [],
// };
//
// const DailyRecordsWithCommonLayout = withCommonLayout(
//   DailyRecords,
//   pageTitleProps,
//   buttonProps,
//   tableProps
// );
const DailyRecordsWithRouter = withRouter(DailyRecords);
export default DailyRecordsWithRouter;
