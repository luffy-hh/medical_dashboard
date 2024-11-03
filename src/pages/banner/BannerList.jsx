import React from "react";
import withTableAndTitle from "../../components/hoc/withTableAndTitle.jsx";
import { bannerTableColumns } from "../../constants/TableColumns.jsx";
import { banners } from "../../app/banners/bannerSlice.jsx";

const BannerList = () => {
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
};

const BannerListWithTable = withTableAndTitle(
  BannerList,
  pageTitleProps,
  buttonProps,
  tableProps,
);

export default BannerListWithTable;
