import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import withTableAndTitle from "../../components/hoc/withTableAndTitle.jsx";
import {
  fetchSoftwareUpdates,
  resetUpdateSoftwareStatus,
  softwareUpdatesMessageSelector,
  softwareUpdatesSelector,
  softwareUpdatesStatusSelector,
} from "../../app/softwareUpdates/softwareUpdateSlice";
import { updateTableColumns } from "../../constants/TableColumns.jsx";
import { setPageTitle } from "../../app/ThemeConfig/themeConfigSlice.jsx";

const Updates = () => {
  const dispatch = useDispatch();
  const updateList = useSelector(softwareUpdatesSelector);
  const updateStatus = useSelector(softwareUpdatesStatusSelector);
  // console.log(updateList);

  useEffect(() => {
    dispatch(fetchSoftwareUpdates({ api: "/get_version_data" }));
    dispatch(setPageTitle("Software Updates"));
  }, []);

  useEffect(() => {
    if (updateStatus === "succeeded" || updateStatus === "failed") {
      dispatch(resetUpdateSoftwareStatus());
    }
  }, [updateStatus, dispatch]);

  return <></>;
};
const pageTitleProps = {
  title: "Updates",
  hasButton: false,
};
const buttonProps = {
  hasButton: false,
  text: "",
  link: "",
};
const tableProps = {
  columns: updateTableColumns,
  data: softwareUpdatesSelector,
  status: softwareUpdatesStatusSelector,
  message: softwareUpdatesMessageSelector,
};
const modalProps = {
  title: "",
  text: "",
  method: () => {},
  api: "",
  status: () => {},
  message: () => {},
  extraData: { uby: JSON.parse(localStorage.getItem("user")).name },
};

const UpdatesWithTableAndTitle = withTableAndTitle(
  Updates,
  pageTitleProps,
  buttonProps,
  tableProps
);
export default UpdatesWithTableAndTitle;
