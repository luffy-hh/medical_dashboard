import React, { useEffect } from "react";
import {
  createUserStatus,
  deleteUser,
  deleteUserMessage,
  deleteUserStatus,
  getUsers,
  resetCreateUserStatus,
  resetDeleteUserStatus,
  resetUpdateUserStatus,
  updateUserStatus,
  users,
  usersMessage,
  usersStatus,
} from "../../app/User/userSlice.jsx";
import withTableAndTitle from "../../components/hoc/withTableAndTitle.jsx";
import { userTableColumns } from "../../constants/TableColumns.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setPageTitle } from "../../app/ThemeConfig/themeConfigSlice.jsx";

const UserList = () => {
  const dispatch = useDispatch();
  // const userList = useSelector(users);
  const deleteStatus = useSelector(deleteUserStatus);
  const createStatus = useSelector(createUserStatus);
  const updateStatus = useSelector(updateUserStatus);
  useEffect(() => {
    dispatch(getUsers({ api: "/user_list" }));
    dispatch(setPageTitle("Users"));
  }, []);
  useEffect(() => {
    if (
      deleteStatus === "succeeded" ||
      createStatus === "succeeded" ||
      updateStatus === "succeeded"
    ) {
      dispatch(getUsers({ api: "/user_list" }));
    }
    (deleteStatus === "succeeded" || deleteStatus === "failed") &&
      dispatch(resetDeleteUserStatus());
    (createStatus === "succeeded" || createStatus === "failed") &&
      dispatch(resetCreateUserStatus());
    (updateStatus === "succeeded" || updateStatus === "failed") &&
      dispatch(resetUpdateUserStatus());
  }, [createStatus, deleteStatus, dispatch, updateStatus]);
  return <></>;
};
const pageTitleProps = {
  title: "Users List",
  hasButton: false,
};
const buttonProps = {
  hasButton: true,
  text: "Add User",
  link: "/user/create",
};
const tableProps = {
  columns: userTableColumns,
  data: users,
  status: usersStatus,
  message: usersMessage,
};
const modalProps = {
  title: "Delete User",
  text: "Are you sure you want to delete this user?",
  method: deleteUser,
  api: "/user_delete",
  status: deleteUserStatus,
  message: deleteUserMessage,
  extraData: { uby: JSON.parse(localStorage.getItem("user")).name },
};
const UserListWithTableAndTitle = withTableAndTitle(
  UserList,
  pageTitleProps,
  buttonProps,
  tableProps,
  modalProps
);
export default UserListWithTableAndTitle;
