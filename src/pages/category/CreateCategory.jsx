import React from "react";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import PropTypes from "prop-types";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import { categoryCreateInputs } from "../../constants/FormInputs.jsx";

const CreateCategory = ({ router }) => {
  return (
    <>
      <PageTitleWithRouter title="Create Category" />
      <CustomFormWithRouter data={categoryCreateInputs()} initialValues={{}} />
    </>
  );
};

CreateCategory.propTypes = {
  router: PropTypes.object,
};

const CreateCategoryWithNotiAndLoader = withNotiAndLoader(CreateCategory);

export default CreateCategoryWithNotiAndLoader;
