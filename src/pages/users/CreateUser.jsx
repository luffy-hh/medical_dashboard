import React from "react";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import PropTypes from "prop-types";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import { userCreateInputs } from "../../constants/FormInputs.jsx";
import {
  createUser,
  createUserMessage,
  createUserStatus,
} from "../../app/User/userSlice.jsx";

const CreateUser = ({ router, onFinish }) => {
  return (
    <>
      <PageTitleWithRouter title={"Create User"} />
      <CustomFormWithRouter
        data={userCreateInputs()}
        initialValues={{}}
        onFinish={onFinish}
      />
    </>
  );
};
CreateUser.propTypes = {
  router: PropTypes.object,
  onFinish: PropTypes.func,
};

const formProps = {
  method: createUser,
  api: "/user_create",
  status: createUserStatus,
  message: createUserMessage,
  extraData: { cby: JSON.parse(localStorage.getItem("user")).name },
};

const CreateUserWithNotiAndLoader = withNotiAndLoader(CreateUser, formProps);

export default CreateUserWithNotiAndLoader;
