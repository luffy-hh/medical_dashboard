import React from "react";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import PropTypes from "prop-types";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import { categoryCreateInputs } from "../../constants/FormInputs.jsx";
import {
  createCategory,
  createCategoryMessage,
  createCategoryStatus,
} from "../../app/category/categorySlice.jsx";

const CreateCategory = ({ router, onFinish }) => {
  return (
    <>
      <PageTitleWithRouter title="Create Category" />
      <CustomFormWithRouter
        data={categoryCreateInputs()}
        initialValues={{}}
        onFinish={onFinish}
      />
    </>
  );
};

CreateCategory.propTypes = {
  router: PropTypes.object,
  onFinish: PropTypes.func,
};

const formProps = {
  method: createCategory,
  api: "/check_category_store",
  status: createCategoryStatus,
  message: createCategoryMessage,
  extraData: { cby: JSON.parse(localStorage.getItem("user")).name },
};

const CreateCategoryWithNotiAndLoader = withNotiAndLoader(
  CreateCategory,
  formProps,
);

export default CreateCategoryWithNotiAndLoader;
