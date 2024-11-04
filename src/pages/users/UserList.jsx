import React, { useEffect } from "react";
import {
  deleteUser,
  deleteUserMessage,
  deleteUserStatus,
  getUsers,
  users,
} from "../../app/User/userSlice.jsx";
import withTableAndTitle from "../../components/hoc/withTableAndTitle.jsx";
import { userTableColumns } from "../../constants/TableColumns.jsx";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector(users);
  console.log(userList);

  useEffect(() => {
    if (userList.length === 0) {
      dispatch(getUsers({ api: "/user_list" }));
    }
  }, [dispatch, userList.length]);
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
};
const modalProps = {
  title: "Delete User",
  text: "Are you sure you want to delete this user?",
  method: deleteUser,
  api: "/user_delete",
  status: deleteUserStatus,
  message: deleteUserMessage,
};
const UserListWithTable = withTableAndTitle(
  UserList,
  pageTitleProps,
  buttonProps,
  tableProps,
  modalProps,
);
export default UserListWithTable;
