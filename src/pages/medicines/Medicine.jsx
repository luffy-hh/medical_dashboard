import React, { useEffect } from "react";
import withTableAndTitle from "../../components/hoc/withTableAndTitle.jsx";
import { medicineTableColumns } from "../../constants/TableColumns.jsx";
import {
  deleteMedicine,
  getCreateMedicinesStatus,
  getDeleteMedicinesMessage,
  getDeleteMedicinesStatus,
  getMedicines,
  getMedicinesList,
  getMedicinesMessage,
  getMedicinesStatus,
  getUpdateMedicinesStatus,
  resetCreateMedicinesStatus,
  resetDeleteMedicinesStatus,
  resetUpdateMedicinesStatus,
} from "../../app/medicines/medicineSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setPageTitle } from "../../app/ThemeConfig/themeConfigSlice.jsx";

const Medicine = () => {
  const dispatch = useDispatch();
  const deleteStatus = useSelector(getDeleteMedicinesStatus);
  const updateStatus = useSelector(getUpdateMedicinesStatus);
  const createStatus = useSelector(getCreateMedicinesStatus);

  useEffect(() => {
    dispatch(getMedicines({ api: "/medicine_record_list" }));
    dispatch(setPageTitle("Medicines"));
  }, []);
  useEffect(() => {
    if (
      deleteStatus === "succeeded" ||
      createStatus === "succeeded" ||
      updateStatus === "succeeded"
    ) {
      dispatch(getMedicines({ api: "/medicine_record_list" }));
    }
    (deleteStatus === "succeeded" || deleteStatus === "failed") &&
      dispatch(resetDeleteMedicinesStatus());
    (createStatus === "succeeded" || createStatus === "failed") &&
      dispatch(resetCreateMedicinesStatus());
    (updateStatus === "succeeded" || updateStatus === "failed") &&
      dispatch(resetUpdateMedicinesStatus());
  }, [createStatus, deleteStatus, dispatch, updateStatus]);
  return <></>;
};
const pageTitleProps = {
  title: "Medicines",
  hasButton: false,
};
const buttonProps = {
  hasButton: true,
  text: "Add Medicine",
  link: "/medicine/create",
};
const tableProps = {
  columns: medicineTableColumns,
  data: getMedicinesList,
  status: getMedicinesStatus,
  message: getMedicinesMessage,
};

const modalProps = {
  title: "Delete Medicine",
  text: "Are you sure you want to delete this medicine?",
  method: deleteMedicine,
  api: "/medicine_record_delete",
  status: getDeleteMedicinesStatus,
  message: getDeleteMedicinesMessage,
  extraData: {
    uby: JSON.parse(localStorage.getItem("user")).name,
  },
};
const MedicineWithTableAndTitle = withTableAndTitle(
  Medicine,
  pageTitleProps,
  buttonProps,
  tableProps,
  modalProps
);

export default MedicineWithTableAndTitle;
