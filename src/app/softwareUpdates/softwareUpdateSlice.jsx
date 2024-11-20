import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getData,
  getDataWithToken,
  postDataWithToken,
} from "../../services/ApiCalls.jsx";

const initialState = {
  softwareUpdatesList: [],
  softwareUpdatesListStatus: "idle",
  softwareUpdatesListMessage: "",

  updateSoftwareUpdatesStatus: "idle",
  updateSoftwareUpdatesMessage: "",
};

export const fetchSoftwareUpdates = createAsyncThunk(
  "softwareUpdates/fetchSoftwareUpdates",
  async ({ api }, thunkAPI) => {
    const response = await getDataWithToken(api);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const updateSoftwareUpdates = createAsyncThunk(
  "softwareUpdates/updateSoftwareUpdates",
  async ({ api, postData }, thunkAPI) => {
    const response = await postDataWithToken(api, postData);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

const softwareUpdateSlice = createSlice({
  name: "softwareUpdates",
  initialState,
  reducers: {
    resetUpdateSoftwareStatus: (state) => {
      state.updateSoftwareUpdatesStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSoftwareUpdates.pending, (state) => {
        state.softwareUpdatesListStatus = "loading";
      })
      .addCase(fetchSoftwareUpdates.fulfilled, (state, action) => {
        state.softwareUpdatesListStatus = "succeeded";
        state.softwareUpdatesList = [action.payload.data.list];
      })
      .addCase(fetchSoftwareUpdates.rejected, (state, action) => {
        state.softwareUpdatesListStatus = "failed";
        state.softwareUpdatesListMessage = action.payload.responseMessage;
      })
      .addCase(updateSoftwareUpdates.fulfilled, (state, action) => {
        state.updateSoftwareUpdatesStatus = "succeeded";
        state.updateSoftwareUpdatesMessage = action.payload.responseMessage;
      })
      .addCase(updateSoftwareUpdates.pending, (state) => {
        state.updateSoftwareUpdatesStatus = "loading";
      })
      .addCase(updateSoftwareUpdates.rejected, (state, action) => {
        state.updateSoftwareUpdatesStatus = "failed";
        state.updateSoftwareUpdatesMessage = action.payload.responseMessage;
      });
  },
});

export const softwareUpdatesSelector = (state) =>
  state.softwareUpdates.softwareUpdatesList;
export const softwareUpdatesStatusSelector = (state) =>
  state.softwareUpdates.softwareUpdatesListStatus;
export const softwareUpdatesMessageSelector = (state) =>
  state.softwareUpdates.softwareUpdatesListMessage;

export const updateSoftwareUpdatesStatusSelector = (state) =>
  state.softwareUpdates.updateSoftwareUpdatesStatus;
export const updateSoftwareUpdatesMessageSelector = (state) =>
  state.softwareUpdates.updateSoftwareUpdatesMessage;

export const { resetUpdateSoftwareStatus } = softwareUpdateSlice.actions;

export default softwareUpdateSlice.reducer;
