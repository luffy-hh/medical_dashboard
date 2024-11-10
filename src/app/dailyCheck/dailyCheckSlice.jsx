import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getDataWithToken,
  postDataWithToken,
  postMultipartDataWithToken,
} from "../../services/ApiCalls.jsx";

const initialState = {
  dailyChecksChart: [],
  dailyChecksChartStatus: "idle",
  dailyChecksChartMessage: "",

  dailyChecksMonthlyChartKeys: [],
  dailyChecksMonthlyChartValues: [],
  dailyChecksMonthly: [],
  dailyChecksMonthlyStatus: "idle",
  dailyChecksMonthlyMessage: "",

  createDailyCheckStatus: "idle",
  createDailyCheckMessage: "",

  updateDailyCheckStatus: "idle",
  updateDailyCheckMessage: "",

  deleteDailyCheckStatus: "idle",
  deleteDailyCheckMessage: "",
};

export const getDailyChecksChart = createAsyncThunk(
  "dailyChecks/getDailyChecksChart",
  async ({ api }, thunkAPI) => {
    const response = await getDataWithToken(api);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const getDailyChecksMonthly = createAsyncThunk(
  "dailyChecks/getDailyChecksMonthly",
  async ({ api, postData = {}, header = {} }, thunkAPI) => {
    const response = await postDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const createDailyCheck = createAsyncThunk(
  "dailyChecks/createDailyCheck",
  async ({ api, postData = {}, header }, thunkAPI) => {
    const response = await postMultipartDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);
export const updateDailyCheck = createAsyncThunk(
  "dailyChecks/updateDailyCheck",
  async ({ api, postData = {}, header }, thunkAPI) => {
    const response = await postMultipartDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);
export const deleteDailyCheck = createAsyncThunk(
  "dailyChecks/deleteDailyCheck",
  async ({ api, postData = {}, header }, thunkAPI) => {
    const response = await postDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);
const dailyCheckSlice = createSlice({
  name: "dailyChecks",
  initialState,
  reducers: {
    resetCreateDailyCheckStatus: (state) => {
      state.createDailyCheckStatus = "idle";
      state.createDailyCheckMessage = "";
    },
    resetUpdateDailyCheckStatus: (state) => {
      state.updateDailyCheckStatus = "idle";
      state.updateDailyCheckMessage = "";
    },
    resetDeleteDailyCheckStatus: (state) => {
      state.deleteDailyCheckStatus = "idle";
      state.deleteDailyCheckMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDailyChecksChart.fulfilled, (state, action) => {
        state.dailyChecksChart = action.payload.data.list;
        state.dailyChecksChartStatus = "succeeded";
        state.dailyChecksChartMessage = action.payload.responseMessage;
      })
      .addCase(getDailyChecksChart.rejected, (state, action) => {
        state.dailyChecksChartStatus = "failed";
        state.dailyChecksChartMessage = action.payload.responseMessage;
      })
      .addCase(getDailyChecksChart.pending, (state) => {
        state.dailyChecksChartStatus = "loading";
      });
    builder
      .addCase(createDailyCheck.fulfilled, (state, action) => {
        state.createDailyCheckStatus = "succeeded";
        state.createDailyCheckMessage = action.payload.message;
      })
      .addCase(createDailyCheck.rejected, (state, action) => {
        state.createDailyCheckStatus = "failed";
        state.createDailyCheckMessage = action.payload?.responseMessage;
      })
      .addCase(createDailyCheck.pending, (state) => {
        state.createDailyCheckStatus = "loading";
      });
    builder
      .addCase(updateDailyCheck.fulfilled, (state, action) => {
        state.updateDailyCheckStatus = "succeeded";
        state.updateDailyCheckMessage = action.payload.message;
      })
      .addCase(updateDailyCheck.rejected, (state, action) => {
        state.updateDailyCheckStatus = "failed";
        state.updateDailyCheckMessage = action.payload?.responseMessage;
      })
      .addCase(updateDailyCheck.pending, (state) => {
        state.updateDailyCheckStatus = "loading";
      });
    builder
      .addCase(deleteDailyCheck.fulfilled, (state, action) => {
        state.deleteDailyCheckStatus = "succeeded";
        state.deleteDailyCheckMessage = action.payload.message;
      })
      .addCase(deleteDailyCheck.rejected, (state, action) => {
        state.deleteDailyCheckStatus = "failed";
        state.deleteDailyCheckMessage = action.payload?.responseMessage;
      })
      .addCase(deleteDailyCheck.pending, (state) => {
        state.deleteDailyCheckStatus = "loading";
      });
    builder
      .addCase(getDailyChecksMonthly.fulfilled, (state, action) => {
        state.dailyChecksMonthly = action.payload.data.list;
        state.dailyChecksMonthlyChartKeys = action.payload.data.key_arr;
        state.dailyChecksMonthlyChartValues = action.payload.data.value_arr;
        state.dailyChecksMonthlyStatus = "succeeded";
        state.dailyChecksMonthlyMessage = action.payload.responseMessage;
      })
      .addCase(getDailyChecksMonthly.rejected, (state, action) => {
        state.dailyChecksMonthlyStatus = "failed";
        state.dailyChecksMonthlyMessage = action.payload.responseMessage;
      })
      .addCase(getDailyChecksMonthly.pending, (state) => {
        state.dailyChecksStatus = "loading";
      });
  },
});

export const dailyChecksChartSelector = (state) =>
  state.dailyChecks.dailyChecksChart;
export const getDailyChecksChartStatus = (state) =>
  state.dailyChecks.dailyChecksChartStatus;
export const getDailyChecksChartMessage = (state) =>
  state.dailyChecks.dailyChecksChartMessage;
export const getCreateDailyCheckStatus = (state) =>
  state.dailyChecks.createDailyCheckStatus;
export const getCreateDailyCheckMessage = (state) =>
  state.dailyChecks.createDailyCheckMessage;
export const getUpdateDailyCheckStatus = (state) =>
  state.dailyChecks.updateDailyCheckStatus;
export const getUpdateDailyCheckMessage = (state) =>
  state.dailyChecks.updateDailyCheckMessage;
export const getDeleteDailyCheckStatus = (state) =>
  state.dailyChecks.deleteDailyCheckStatus;
export const getDeleteDailyCheckMessage = (state) =>
  state.dailyChecks.deleteDailyCheckMessage;
export const dailyChecksMonthlySelector = (state) =>
  state.dailyChecks.dailyChecksMonthly;
export const dailyChecksMonthlyChartKeysSelector = (state) =>
  state.dailyChecks.dailyChecksMonthlyChartKeys;
export const dailyChecksMonthlyChartValuesSelector = (state) =>
  state.dailyChecks.dailyChecksMonthlyChartValues;
export const dailyChecksMonthlyStatusSelector = (state) =>
  state.dailyChecks.dailyChecksMonthlyStatus;
export const dailyChecksMonthlyMessageSelector = (state) =>
  state.dailyChecks.dailyChecksMonthlyMessage;

export const {
  resetCreateDailyCheckStatus,
  resetUpdateDailyCheckStatus,
  resetDeleteDailyCheckStatus,
} = dailyCheckSlice.actions;
export default dailyCheckSlice.reducer;
