import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDataWithToken } from "../../services/ApiCalls.jsx";

const initialState = {
  months: [],
  masterDataStatus: "idle",
  masterDataMessage: "",
};

export const getMasterData = createAsyncThunk(
  "masterData/getMasterData",
  async ({ api }, thunkAPI) => {
    const response = await getDataWithToken(api);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

const masterDataSlice = createSlice({
  name: "masterData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMasterData.fulfilled, (state, action) => {
        state.masterDataStatus = "succeeded";
        state.months = action.payload.data.months;
      })
      .addCase(getMasterData.pending, (state) => {
        state.masterDataStatus = "loading";
      })
      .addCase(getMasterData.rejected, (state, action) => {
        state.masterDataStatus = "failed";
        state.masterDataMessage = action.payload.responseMessage;
      });
  },
});
export const monthsSelector = (state) => state.masterData.months;
export const masterDataStatusSelector = (state) =>
  state.masterData.masterDataStatus;
export const masterDataMessageSelector = (state) =>
  state.masterData.masterDataMessage;
export default masterDataSlice.reducer;
