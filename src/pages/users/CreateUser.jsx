import React from "react";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import PropTypes from "prop-types";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import { userCreateInputs } from "../../constants/FormInputs.jsx";

const CreateUser = ({ router }) => {
  return (
    <>
      <PageTitleWithRouter title={"Create User"} />
      <CustomFormWithRouter data={userCreateInputs()} initialValues={{}} />
    </>
  );
};
CreateUser.propTypes = {
  router: PropTypes.object,
};

const CreateUserWithNotiAndLoader = withNotiAndLoader(CreateUser);

export default CreateUserWithNotiAndLoader;
