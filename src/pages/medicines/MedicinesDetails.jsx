import React from "react";
import InnerContainer from "../../components/common/InnerContainer.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import { useSelector } from "react-redux";
import {
  getMedicineDetails,
  getMedicineDetailsStatus,
} from "../../app/medicines/medicineSlice.jsx";
import withRouter from "../../components/hoc/withRouter.jsx";
import PropTypes from "prop-types";
import { Card, Tabs } from "antd";
import dayjs from "dayjs";
import ImgViewer from "../../components/common/ImgViewer.jsx";
import CustomTable from "../../components/common/CustomTable.jsx";
import { patientMedicinesTableColumns } from "../../constants/TableColumns.jsx";

const MedicinesDetails = ({ router, patient }) => {
  const medicinesDetails = useSelector(getMedicineDetails);
  const medicinesDetailsStatus = useSelector(getMedicineDetailsStatus);
  console.log(medicinesDetails);

  return (
    <InnerContainer>
      {/*<PageTitleWithRouter*/}
      {/*  title={"Medicines Details"}*/}
      {/*  hasButton={false}*/}
      {/*  buttonLink={-1}*/}
      {/*  buttonText={"Back"}*/}
      {/*/>*/}
      <Tabs
        items={medicinesDetails.detail.map((m) => ({
          label: m.day_type,
          key: m.day_type,
          children: (
            <Card>
              <p className={"text-center"}>{patient.name}</p>
              {/*<div className={"flex justify-between"}>*/}
              {/*  <p className={"text-xl"}>*/}
              {/*    Start Taking Date:*/}
              {/*    <span className={"ml-4 text-gray-400"}>*/}
              {/*      {medicinesDetails.start_date}*/}
              {/*    </span>*/}
              {/*  </p>*/}
              {/*  <p className={"text-xl"}>*/}
              {/*    End Taking Date:*/}
              {/*    <span className={"ml-4 text-gray-400"}>*/}
              {/*      {medicinesDetails.end_date}*/}
              {/*    </span>*/}
              {/*  </p>*/}
              {/*</div>*/}
              <div className={"flex justify-center mt-4"}>
                <Tabs
                  type={"card"}
                  items={m.medicine_arr.map((meal) => ({
                    label: meal.meal_type,
                    key: meal.meal_type,
                    children: (
                      <>
                        <p className={"mb-2 text-center"}>
                          Remainder Time:
                          <span className={"ml-4 text-gary-400"}>
                            {dayjs(meal.reminder_time, "HH:mm:ss").format(
                              "hh:mm A",
                            )}
                          </span>
                        </p>
                        <div className={"flex gap-x-12"}>
                          <CustomTable
                            columns={patientMedicinesTableColumns(
                              router.nav,
                              patient,
                            )}
                            data={meal.list}
                            loading={medicinesDetailsStatus === "loading"}
                          />
                          {/*{meal.list.map((medicine, i) => (*/}
                          {/*  <div className={"flex flex-col gap-y-4"} key={i}>*/}
                          {/*    <p className={"text-xl"}>*/}
                          {/*      Medicine Name:*/}
                          {/*      <span className={"ml-4 text-gray-400"}>*/}
                          {/*        {medicine.medicine_name}*/}
                          {/*      </span>*/}
                          {/*    </p>*/}
                          {/*    <ImgViewer*/}
                          {/*      width={200}*/}
                          {/*      img={medicine.medicine_photo}*/}
                          {/*    />*/}
                          {/*  </div>*/}
                          {/*))}*/}
                        </div>
                      </>
                    ),
                  }))}
                />
              </div>
            </Card>
          ),
        }))}
      />
    </InnerContainer>
  );
};

MedicinesDetails.propTypes = {
  router: PropTypes.object,
  patient: PropTypes.object,
};
const MedicinesDetailsWithRouter = withRouter(MedicinesDetails);
export default MedicinesDetailsWithRouter;
