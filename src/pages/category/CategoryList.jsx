import React from "react";
import withTableAndTitle from "../../components/hoc/withTableAndTitle.jsx";
import { categories } from "../../app/category/categorySlice.jsx";
import { categoryTableColumns } from "../../constants/TableColumns.jsx";

const CategoryList = () => {
  return <></>;
};
const pageTitleProps = {
  title: "Categories List",
  hasButton: false,
};
const buttonProps = {
  hasButton: true,
  text: "Add Category",
  link: "/category/create",
};
const tableProps = {
  columns: categoryTableColumns,
  data: categories,
};
const CategoryListWithTable = withTableAndTitle(
  CategoryList,
  pageTitleProps,
  buttonProps,
  tableProps,
);
export default CategoryListWithTable;
