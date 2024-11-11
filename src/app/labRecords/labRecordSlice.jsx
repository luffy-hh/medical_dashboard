import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getDataWithToken,
  postDataWithToken,
  postMultipartDataWithToken,
} from "../../services/ApiCalls.jsx";

const initialState = {
  labRecords: [],
  labRecordsStatus: "idle",
  labRecordsMessage: "",

  labRecordDetails: {},
  labRecordDetailsStatus: "idle",
  labRecordDetailsMessage: "",

  createLabRecordStatus: "idle",
  createLabRecordMessage: "",

  updateLabRecordStatus: "idle",
  updateLabRecordMessage: "",

  deleteLabRecordAttachStatus: "idle",
  deleteLabRecordAttachMessage: "",
};
export const getLabRecords = createAsyncThunk(
  "labRecords/getLabRecords",
  async ({ api, postData }, thunkAPI) => {
    const response = await postDataWithToken(api, postData);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const getLabRecordsData = createAsyncThunk(
  "labRecords/getLabRecordsData",
  async ({ api }, thunkAPI) => {
    const response = await getDataWithToken(api);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const createLabRecord = createAsyncThunk(
  "labRecords/createLabRecord",
  async ({ api, postData, header }, thunkAPI) => {
    const response = await postMultipartDataWithToken(api, postData, header);
    const data = await response.json();

    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const updateLabRecord = createAsyncThunk(
  "labRecords/updateLabRecord",
  async ({ api, postData, header }, thunkAPI) => {
    const response = await postMultipartDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);
export const deleteLabRecordAttach = createAsyncThunk(
  "labRecords/deleteLabRecordAttach",
  async ({ api, postData }, thunkAPI) => {
    const response = await postDataWithToken(api, postData);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

const labRecordSlice = createSlice({
  name: "labRecords",
  initialState,
  reducers: {
    resetCreateLabRecordStatus: (state) => {
      state.createLabRecordStatus = "idle";
    },
    resetUpdateLabRecordStatus: (state) => {
      state.updateLabRecordStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLabRecords.fulfilled, (state, action) => {
        state.labRecords = action.payload.data.list;
        state.labRecordsStatus = "succeeded";
        state.labRecordsMessage = action.payload.responseMessage;
      })
      .addCase(getLabRecords.pending, (state) => {
        state.labRecordsStatus = "loading";
      })
      .addCase(getLabRecords.rejected, (state, action) => {
        state.labRecordsStatus = "failed";
        state.labRecordsMessage = action.payload.responseMessage;
      });
    builder
      .addCase(getLabRecordsData.fulfilled, (state, action) => {
        state.labRecordDetails = action.payload.data.detail;
        state.labRecordDetailsStatus = "succeeded";
        state.labRecordDetailsMessage = action.payload.responseMessage;
      })
      .addCase(getLabRecordsData.pending, (state) => {
        state.labRecordDetailsStatus = "loading";
      })
      .addCase(getLabRecordsData.rejected, (state, action) => {
        state.labRecordDetailsStatus = "failed";
        state.labRecordDetailsMessage = action.payload.responseMessage;
      });
    builder
      .addCase(createLabRecord.fulfilled, (state, action) => {
        state.createLabRecordStatus = "succeeded";
        state.createLabRecordMessage = action.payload.responseMessage;
      })
      .addCase(createLabRecord.pending, (state) => {
        state.createLabRecordStatus = "loading";
      })
      .addCase(createLabRecord.rejected, (state, action) => {
        state.createLabRecordStatus = "failed";
        state.createLabRecordMessage = action.payload.responseMessage;
      });
    builder
      .addCase(updateLabRecord.fulfilled, (state, action) => {
        state.updateLabRecordStatus = "succeeded";
        state.updateLabRecordMessage = action.payload.responseMessage;
      })
      .addCase(updateLabRecord.pending, (state) => {
        state.updateLabRecordStatus = "loading";
      })
      .addCase(updateLabRecord.rejected, (state, action) => {
        state.updateLabRecordStatus = "failed";
        state.updateLabRecordMessage = action.payload.responseMessage;
      });
    builder
      .addCase(deleteLabRecordAttach.fulfilled, (state, action) => {
        state.deleteLabRecordAttachStatus = "succeeded";
        state.deleteLabRecordAttachMessage = action.payload.responseMessage;
      })
      .addCase(deleteLabRecordAttach.pending, (state) => {
        state.deleteLabRecordAttachStatus = "loading";
      })
      .addCase(deleteLabRecordAttach.rejected, (state, action) => {
        state.deleteLabRecordAttachStatus = "failed";
        state.deleteLabRecordAttachMessage = action.payload.responseMessage;
      });
  },
});

export const labRecordsSelector = (state) => state.labRecords.labRecords;
export const labRecordsStatusSelector = (state) =>
  state.labRecords.labRecordsStatus;
export const labRecordsMessageSelector = (state) =>
  state.labRecords.labRecordsMessage;
export const labRecordDetailsSelector = (state) =>
  state.labRecords.labRecordDetails;
export const labRecordDetailsStatusSelector = (state) =>
  state.labRecords.labRecordDetailsStatus;
export const labRecordDetailsMessageSelector = (state) =>
  state.labRecords.labRecordDetailsMessage;
export const createLabRecordStatusSelector = (state) =>
  state.labRecords.createLabRecordStatus;
export const createLabRecordMessageSelector = (state) =>
  state.labRecords.createLabRecordMessage;
export const updateLabRecordStatusSelector = (state) =>
  state.labRecords.updateLabRecordStatus;
export const updateLabRecordMessageSelector = (state) =>
  state.labRecords.updateLabRecordMessage;
export const deleteLabRecordAttachStatusSelector = (state) =>
  state.labRecords.deleteLabRecordAttachStatus;
export const deleteLabRecordAttachMessageSelector = (state) =>
  state.labRecords.deleteLabRecordAttachMessage;

export const { resetCreateLabRecordStatus, resetUpdateLabRecordStatus } =
  labRecordSlice.actions;
export default labRecordSlice.reducer;
