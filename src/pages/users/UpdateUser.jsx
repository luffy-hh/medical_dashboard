import React from "react";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import {
  userCreateInputs,
  userUpdateInputs,
} from "../../constants/FormInputs.jsx";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import {
  updateUser,
  updateUserMessage,
  updateUserStatus,
} from "../../app/User/userSlice.jsx";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const UpdateUser = ({ router, onFinish }) => {
  const { id } = useParams();
  const initialValues = {
    ...router.location.state,
  };
  return (
    <>
      <PageTitleWithRouter title={"Update User"} />
      <CustomFormWithRouter
        data={userUpdateInputs()}
        initialValues={initialValues}
        onFinish={(values) => {
          onFinish(values, { id: id });
        }}
      />
    </>
  );
};

UpdateUser.propTypes = {
  router: PropTypes.object,
  onFinish: PropTypes.func,
};

const formProps = {
  method: updateUser,
  api: "/user_update",
  // apiHasExtra: "id",
  status: updateUserStatus,
  message: updateUserMessage,
  extraData: { uby: JSON.parse(localStorage.getItem("user")).name },
};
const UpdateUserWithNotiAndLoader = withNotiAndLoader(UpdateUser, formProps);
export default UpdateUserWithNotiAndLoader;
