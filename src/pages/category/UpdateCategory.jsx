import React from "react";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import PropTypes from "prop-types";
import PageTitleWithRouter from "../../components/common/PageTitle";
import CustomForm from "../../components/common/CustomForm";
import {
  updateCategory,
  updateCategoryMessage,
  updateCategoryStatus,
} from "../../app/category/categorySlice.jsx";
import { categoryCreateInputs } from "../../constants/FormInputs.jsx";
import { useParams } from "react-router-dom";

const UpdateCategory = ({ router, onFinish }) => {
  console.log(router.location.state);
  const { id } = useParams();
  const initialValues = {
    ...router.location.state,
  };
  console.log(initialValues);

  return (
    <>
      <PageTitleWithRouter title={"Update Category"} />
      <CustomForm
        data={categoryCreateInputs()}
        initialValues={initialValues}
        onFinish={(values) => {
          onFinish(values, { id: id });
        }}
      />
    </>
  );
};
UpdateCategory.propTypes = {
  router: PropTypes.object,
  onFinish: PropTypes.func,
};
const formProps = {
  method: updateCategory,
  api: "/check_category_update",
  // apiHasExtra: "id",
  status: updateCategoryStatus,
  message: updateCategoryMessage,
  extraData: {
    uby: JSON.parse(localStorage.getItem("user")).name,
  },
};
const UpdateCategoryWithNotiAndLoader = withNotiAndLoader(
  UpdateCategory,
  formProps,
);
export default UpdateCategoryWithNotiAndLoader;
