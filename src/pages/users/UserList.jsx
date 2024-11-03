import React from "react";
import { users } from "../../app/User/userSlice.jsx";
import withTableAndTitle from "../../components/hoc/withTableAndTitle.jsx";
import { userTableColumns } from "../../constants/TableColumns.jsx";

const UserList = () => {
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
const UserListWithTable = withTableAndTitle(
  UserList,
  pageTitleProps,
  buttonProps,
  tableProps,
);
export default UserListWithTable;
