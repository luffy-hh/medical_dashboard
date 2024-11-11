import React, { useEffect } from "react";
import withTableAndTitle from "../../components/hoc/withTableAndTitle.jsx";
import { bannerTableColumns } from "../../constants/TableColumns.jsx";
import {
  banners,
  bannersMessage,
  bannersStatus,
  createBannerStatus,
  deleteBanner,
  deleteBannerMessage,
  deleteBannerStatus,
  getBanners,
  resetCreateBannerStatus,
  resetDeleteBannerStatus,
  resetUpdateBannerStatus,
  updateBannerStatus,
} from "../../app/banners/bannerSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setPageTitle } from "../../app/ThemeConfig/themeConfigSlice.jsx";

const BannerList = () => {
  const dispatch = useDispatch();
  const deleteStatus = useSelector(deleteBannerStatus);
  const createStatus = useSelector(createBannerStatus);
  const updateStatus = useSelector(updateBannerStatus);

  useEffect(() => {
    dispatch(getBanners({ api: "/banner_list" }));
    dispatch(setPageTitle("Banners"));
  }, []);

  useEffect(() => {
    if (
      deleteStatus === "succeeded" ||
      createStatus === "succeeded" ||
      updateStatus === "succeeded"
    ) {
      dispatch(getBanners({ api: "/banner_list" }));
    }
    (deleteStatus === "succeeded" || deleteStatus === "failed") &&
      dispatch(resetDeleteBannerStatus());
    (createStatus === "succeeded" || createStatus === "failed") &&
      dispatch(resetCreateBannerStatus());
    (updateStatus === "succeeded" || updateStatus === "failed") &&
      dispatch(resetUpdateBannerStatus());
  }, [createStatus, deleteStatus, dispatch, updateStatus]);
  return <></>;
};
const pageTitleProps = {
  title: "Banner List",
  hasButton: false,
};
const buttonProps = {
  hasButton: true,
  text: "Add Banner",
  link: "/banner/create",
};
const tableProps = {
  columns: bannerTableColumns,
  data: banners,
  status: bannersStatus,
  message: bannersMessage,
};

const modalProps = {
  title: "Delete Banner",
  text: "Are you sure you want to delete this banner?",
  method: deleteBanner,
  api: "/banner_delete",
  status: deleteBannerStatus,
  message: deleteBannerMessage,
  extraData: {
    uby: JSON.parse(localStorage.getItem("user")).name,
  },
};

const BannerListWithTable = withTableAndTitle(
  BannerList,
  pageTitleProps,
  buttonProps,
  tableProps,
  modalProps
);

export default BannerListWithTable;
