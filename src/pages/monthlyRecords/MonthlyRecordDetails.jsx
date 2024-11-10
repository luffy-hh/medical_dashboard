import React, { useEffect } from "react";
import withRouter from "../../components/hoc/withRouter.jsx";
import PropTypes from "prop-types";
import InnerContainer from "../../components/common/InnerContainer.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import { Image } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getLabRecordsData,
  labRecordDetailsSelector,
} from "../../app/labRecords/labRecordSlice.jsx";

const MonthlyRecordDetails = ({ router }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { location } = router;
  const labRecordDetails = useSelector(labRecordDetailsSelector);
  console.log(location, labRecordDetails);

  useEffect(() => {
    dispatch(getLabRecordsData({ api: `/lab_record_data?id=${id}` }));
  }, [dispatch, id]);

  return (
    <InnerContainer>
      <PageTitleWithRouter title="Lab Record Details" />
      <div
        className={
          "w-max mx-auto px-8 py-4 shadow transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
        }
      >
        <div className={"w-max rounded-full overflow-hidden mx-auto"}>
          <Image
            width={200}
            height={200}
            src={location.state.patient.member_photo}
            fallback={location.state.patient.selected_photo}
          />
        </div>
        <p className={"my-2 text-center text-2xl"}>
          {labRecordDetails.family_member_name}
        </p>
        <p className={"my-2 text-center text-xl"}>
          {labRecordDetails.lab_name}
        </p>
        <p className={"my-2 text-2xl"}>{labRecordDetails.title}</p>
        <p className={"my-2 text-gray-400 text-lg"}>
          {labRecordDetails.description}
        </p>
        <p className={"my-2"}>Date</p>
        <p className={"my-2 text-lg text-gray-400"}>
          {labRecordDetails.lab_date}
        </p>
      </div>
    </InnerContainer>
  );
};

MonthlyRecordDetails.propTypes = {
  router: PropTypes.object,
};

const MonthlyRecordDetailsWithRouter = withRouter(MonthlyRecordDetails);
export default MonthlyRecordDetailsWithRouter;
