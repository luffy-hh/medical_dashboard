import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getDataWithToken,
  postDataWithToken,
  postMultipartDataWithToken,
} from "../../services/ApiCalls.jsx";

const initialState = {
  medicines: [],
  medicinesStatus: "idle",
  medicinesMessage: "",

  createMedicinesStatus: "idle",
  createMedicinesMessage: "",

  updateMedicinesStatus: "idle",
  updateMedicinesMessage: "",

  deleteMedicinesStatus: "idle",
  deleteMedicinesMessage: "",
};

export const getMedicines = createAsyncThunk(
  "medicines/getMedicines",
  async ({ api }, thunkAPI) => {
    const response = await getDataWithToken(api);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const createMedicine = createAsyncThunk(
  "medicines/createMedicine",
  async ({ api, reqData }, thunkAPI) => {
    const response = await postMultipartDataWithToken(api, reqData);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const updateMedicine = createAsyncThunk(
  "medicines/updateMedicine",
  async ({ api, reqData }, thunkAPI) => {
    const response = await postMultipartDataWithToken(api, reqData);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const deleteMedicine = createAsyncThunk(
  "medicines/deleteMedicine",
  async ({ api, reqData }, thunkAPI) => {
    const response = await postDataWithToken(api, reqData);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

const medicineSlice = createSlice({
  name: "medicines",
  initialState,
  reducers: {
    resetDeleteMedicinesStatus: (state) => {
      state.deleteMedicinesStatus = "idle";
      state.deleteMedicinesMessage = "";
    },
    resetCreateMedicinesStatus: (state) => {
      state.createMedicinesStatus = "idle";
      state.createMedicinesMessage = "";
    },
    resetUpdateMedicinesStatus: (state) => {
      state.updateMedicinesStatus = "idle";
      state.updateMedicinesMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMedicines.fulfilled, (state, action) => {
        state.medicinesStatus = "succeeded";
        state.medicines = action.payload.data.list;
        state.medicinesMessage = action.payload.responseMessage;
      })
      .addCase(getMedicines.pending, (state) => {
        state.medicinesStatus = "loading";
      })
      .addCase(getMedicines.rejected, (state, action) => {
        state.medicinesStatus = "failed";
        state.medicinesMessage = action.payload.responseMessage;
      })
      .addCase(createMedicine.fulfilled, (state, action) => {
        state.createMedicinesStatus = "succeeded";
        state.createMedicinesMessage = action.payload.responseMessage;
      })
      .addCase(createMedicine.rejected, (state, action) => {
        state.createMedicinesStatus = "failed";
        state.createMedicinesMessage = action.payload?.responseMessage;
      })
      .addCase(createMedicine.pending, (state) => {
        state.createMedicinesStatus = "loading";
      })
      .addCase(updateMedicine.fulfilled, (state, action) => {
        state.updateMedicinesStatus = "succeeded";
        state.updateMedicinesMessage = action.payload.responseMessage;
      })
      .addCase(updateMedicine.rejected, (state, action) => {
        state.updateMedicinesStatus = "failed";
        state.updateMedicinesMessage = action.payload?.responseMessage;
      })
      .addCase(updateMedicine.pending, (state) => {
        state.updateMedicinesStatus = "loading";
      })
      .addCase(deleteMedicine.fulfilled, (state, action) => {
        state.deleteMedicinesStatus = "succeeded";
        state.deleteMedicinesMessage = action.payload.responseMessage;
      })
      .addCase(deleteMedicine.rejected, (state, action) => {
        state.deleteMedicinesStatus = "failed";
        state.deleteMedicinesMessage = action.payload?.responseMessage;
      })
      .addCase(deleteMedicine.pending, (state) => {
        state.deleteMedicinesStatus = "loading";
      });
  },
});

export const getMedicinesList = (state) => state.medicines.medicines;
export const getMedicinesStatus = (state) => state.medicines.medicinesStatus;
export const getMedicinesMessage = (state) => state.medicines.medicinesMessage;

export const getCreateMedicinesStatus = (state) =>
  state.medicines.createMedicinesStatus;
export const getCreateMedicinesMessage = (state) =>
  state.medicines.createMedicinesMessage;

export const getUpdateMedicinesStatus = (state) =>
  state.medicines.updateMedicinesStatus;
export const getUpdateMedicinesMessage = (state) =>
  state.medicines.updateMedicinesMessage;

export const getDeleteMedicinesStatus = (state) =>
  state.medicines.deleteMedicinesStatus;
export const getDeleteMedicinesMessage = (state) =>
  state.medicines.deleteMedicinesMessage;

export const {
  resetDeleteMedicinesStatus,
  resetCreateMedicinesStatus,
  resetUpdateMedicinesStatus,
} = medicineSlice.actions;

export default medicineSlice.reducer;
