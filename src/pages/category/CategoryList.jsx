import React, { useEffect } from "react";
import withTableAndTitle from "../../components/hoc/withTableAndTitle.jsx";
import {
  categories,
  categoriesMessage,
  categoriesStatus,
  createCategoryStatus,
  deleteCategory,
  deleteCategoryMessage,
  deleteCategoryStatus,
  getCategories,
  resetCreateCategoryStatus,
  resetDeleteCategoryStatus,
  resetUpdateCategoryStatus,
  updateCategoryStatus,
} from "../../app/category/categorySlice.jsx";
import { categoryTableColumns } from "../../constants/TableColumns.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  getBanners,
  resetCreateBannerStatus,
  resetDeleteBannerStatus,
  resetUpdateBannerStatus,
} from "../../app/banners/bannerSlice.jsx";

const CategoryList = () => {
  const dispatch = useDispatch();
  const deleteStatus = useSelector(deleteCategoryStatus);
  const createStatus = useSelector(createCategoryStatus);
  const updateStatus = useSelector(updateCategoryStatus);
  const categoryList = useSelector(categories);
  console.log(categoryList);

  // useEffect(() => {
  //   dispatch(getCategories({ api: "/check_category_list" }));
  // }, []);
  useEffect(() => {
    if (
      deleteStatus === "succeeded" ||
      createStatus === "succeeded" ||
      updateStatus === "succeeded"
    ) {
      dispatch(getCategories({ api: "/check_category_list" }));
    }
    (deleteStatus === "succeeded" || deleteStatus === "failed") &&
      dispatch(resetDeleteCategoryStatus());
    (createStatus === "succeeded" || createStatus === "failed") &&
      dispatch(resetCreateCategoryStatus());
    (updateStatus === "succeeded" || updateStatus === "failed") &&
      dispatch(resetUpdateCategoryStatus());
  }, [createStatus, deleteStatus, dispatch, updateStatus]);
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
  status: categoriesStatus,
  message: categoriesMessage,
};
const modalProps = {
  title: "Delete Category",
  text: "Are you sure you want to delete this category?",
  method: deleteCategory,
  api: "/check_category_delete",
  status: deleteCategoryStatus,
  message: deleteCategoryMessage,
  extraData: { uby: JSON.parse(localStorage.getItem("user")).name },
};
const CategoryListWithTable = withTableAndTitle(
  CategoryList,
  pageTitleProps,
  buttonProps,
  tableProps,
  modalProps,
);
export default CategoryListWithTable;
