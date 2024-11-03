import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postData } from "../../services/ApiCalls.jsx";

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
  loginStatus: "idle",
  loginMessage: "",
  token: JSON.parse(localStorage.getItem("token")) || "",
  user: JSON.parse(localStorage.getItem("user")) || {},
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ api, reqData }, thunkAPI) => {
    const response = await postData(api, reqData);

    console.log(response);

    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    if (response.status === 200) {
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.token));
    }
    return data;
  },
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loginStatus = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginStatus = "succeeded";
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.loginMessage = action.payload.message;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginStatus = "failed";
        state.loginMessage = action.payload.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
