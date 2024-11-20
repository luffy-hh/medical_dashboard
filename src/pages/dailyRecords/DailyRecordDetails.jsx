import React, { useEffect } from "react";
import InnerContainer from "../../components/common/InnerContainer.jsx";
import withRouter from "../../components/hoc/withRouter.jsx";
import PropTypes from "prop-types";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import { useParams } from "react-router-dom";
import { Button, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  dailyCheckDetailsSelector,
  dailyCheckDetailsStatusSelector,
  getDailyCheckDetails,
  getUpdateDailyCheckStatus,
  resetUpdateDailyCheckStatus,
} from "../../app/dailyCheck/dailyCheckSlice.jsx";
import dayjs from "dayjs";
import Loader from "../../components/common/Loader.jsx";

const DailyRecordDetails = ({ router }) => {
  const dispatch = useDispatch();
  const dailyCheckDetails = useSelector(dailyCheckDetailsSelector);
  const dailyCheckDetailsStatus = useSelector(dailyCheckDetailsStatusSelector);
  const updateDailyCheckStatus = useSelector(getUpdateDailyCheckStatus);

  const { location } = router;
  const { id } = useParams();
  // console.log(location, id, dailyCheckDetails);
  useEffect(() => {
    dispatch(
      getDailyCheckDetails({
        api: "/daily_record",
        postData: { record_id: id },
      })
    );
  }, []);
  useEffect(() => {
    if (
      updateDailyCheckStatus === "succeeded" ||
      updateDailyCheckStatus === "failed"
    ) {
      dispatch(resetUpdateDailyCheckStatus());
    }
  }, [updateDailyCheckStatus, dispatch]);

  return (
    <InnerContainer>
      <PageTitleWithRouter
        title="Daily Record"
        hasButton={true}
        buttonText="Back"
        buttonLink={-1}
      />
      {dailyCheckDetailsStatus !== "loading" ? (
        <div className={"w-[50%] mx-auto px-8 py-4 shadow"}>
          <div className={"w-full flex justify-end"}>
            <Button
              className={"w-[10%]"}
              onClick={() =>
                router.nav(`/daily-records/${id}/edit`, {
                  state: {
                    ...location.state,
                    dailyCheck: dailyCheckDetails,
                  },
                })
              }
            >
              Edit
            </Button>
          </div>
          <div className={"w-[25%] mx-auto my-4"}>
            <Image
              width={200}
              height={200}
              src={location.state.patient.member_photo}
              fallback={location.state.patient.selected_photo}
            />
          </div>
          <div className={"flex gap-[10rem] justify-center"}>
            <div>
              {dailyCheckDetailsStatus === "succeeded" &&
                dailyCheckDetails.categories.map((c) => (
                  <div key={c.id}>
                    <p className={"my-2 text-2xl"}>
                      {dailyCheckDetails.check_category?.cat_name}
                    </p>
                    <p className={"my-2 text-lg text-gray-400"}>
                      {c.value} {location.state.category.unit}
                    </p>
                  </div>
                ))}
              <p className={"my-2 text-2xl"}>Record Date</p>
              <p className={"my-2 text-lg text-gray-400"}>
                {dayjs(dailyCheckDetails.record_date).format(
                  "DD-MM-YYYY  hh:mm A"
                )}
              </p>
              <p className={"my-2 text-2xl"}>Note</p>
              <p className={"my-2 text-lg text-gray-400"}>
                {dailyCheckDetails.note}
              </p>
              <p className={"my-2 text-2xl"}>Created By</p>
              <p className={"my-2 text-gray-400"}>{dailyCheckDetails.cby}</p>
            </div>
            <Image
              width={200}
              src={dailyCheckDetails.attaches}
              fallback="data:image/png;base64,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"
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </InnerContainer>
  );
};

DailyRecordDetails.propTypes = {
  router: PropTypes.object,
};

const DailyRecordDetailsWithRouter = withRouter(DailyRecordDetails);
export default DailyRecordDetailsWithRouter;
