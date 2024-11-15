import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getDataWithToken,
  postDataWithToken,
  postMultipartDataWithToken,
} from "../../services/ApiCalls.jsx";

const initialState = {
  users: [],
  usersStatus: "idle",
  usersMessage: "",

  createUserStatus: "idle",
  createUserMessage: "",

  updateUserStatus: "idle",
  updateUserMessage: "",

  deleteUserStatus: "idle",
  deleteUserMessage: "",
};
export const getUsers = createAsyncThunk(
  "users/getUsers",
  async ({ api }, thunkAPI) => {
    const response = await getDataWithToken(api);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);
export const createUser = createAsyncThunk(
  "users/createUser",
  async ({ api, postData, header }, thunkAPI) => {
    const response = await postMultipartDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ api, postData, header }, thunkAPI) => {
    const response = await postMultipartDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async ({ api, postData = {}, header }, thunkAPI) => {
    console.log("work");

    const response = await postDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    console.log(data);

    return data;
  },
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    resetUsersStatus: (state) => {
      state.usersStatus = "idle";
      state.usersMessage = "";
    },
    resetCreateUserStatus: (state) => {
      state.createUserStatus = "idle";
      state.createUserMessage = "";
    },
    resetUpdateUserStatus: (state) => {
      state.updateUserStatus = "idle";
      state.updateUserMessage = "";
    },
    resetDeleteUserStatus: (state) => {
      state.deleteUserStatus = "idle";
      state.deleteUserMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.usersStatus = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload.data.list;
        state.usersStatus = "succeeded";
        state.usersMessage = action.payload.responseMessage;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.usersStatus = "failed";
        state.usersMessage = action.payload.responseMessage;
      })
      .addCase(createUser.pending, (state) => {
        state.createUserStatus = "loading";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.createUserStatus = "succeeded";
        state.createUserMessage = action.payload.responseMessage;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.createUserStatus = "failed";
        state.createUserMessage = action.payload.responseMessage;
      })
      .addCase(updateUser.pending, (state) => {
        state.updateUserStatus = "loading";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.updateUserStatus = "succeeded";
        state.updateUserMessage = action.payload.responseMessage;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.updateUserStatus = "failed";
        state.updateUserMessage = action.payload.responseMessage;
      })
      .addCase(deleteUser.pending, (state) => {
        state.deleteUserStatus = "loading";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.deleteUserStatus = "succeeded";
        state.deleteUserMessage = action.payload?.responseMessage;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.deleteUserStatus = "failed";
        state.deleteUserMessage = action.payload?.responseMessage;
      });
  },
});

export const users = (state) => state.users.users;
export const usersStatus = (state) => state.users.usersStatus;
export const usersMessage = (state) => state.users.usersMessage;
export const createUserStatus = (state) => state.users.createUserStatus;
export const createUserMessage = (state) => state.users.createUserMessage;
export const updateUserStatus = (state) => state.users.updateUserStatus;
export const updateUserMessage = (state) => state.users.updateUserMessage;
export const deleteUserStatus = (state) => state.users.deleteUserStatus;
export const deleteUserMessage = (state) => state.users.deleteUserMessage;

export const {
  resetUsersStatus,
  resetCreateUserStatus,
  resetUpdateUserStatus,
  resetDeleteUserStatus,
} = userSlice.actions;
export default userSlice.reducer;
