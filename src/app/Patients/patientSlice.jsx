import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getData,
  getDataWithToken,
  postDataWithToken,
  postMultipartDataWithToken,
} from "../../services/ApiCalls.jsx";

const initialState = {
  patients: [],
  patientsStatus: "idle",
  patientsMessage: "",

  createPatientStatus: "idle",
  createPatientMessage: "",

  updatePatientStatus: "idle",
  updatePatientMessage: "",

  deletePatientStatus: "idle",
  deletePatientMessage: "",
};

export const getPatients = createAsyncThunk(
  "patients/getPatients",
  async ({ api }, thunkAPI) => {
    const response = await getDataWithToken(api);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }

    return data;
  },
);

export const createPatient = createAsyncThunk(
  "patients/createPatient",
  async ({ api, postData, header }, thunkAPI) => {
    const response = await postMultipartDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const updatePatient = createAsyncThunk(
  "patients/updatePatient",
  async ({ api, postData, header }, thunkAPI) => {
    const response = await postMultipartDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const deletePatient = createAsyncThunk(
  "patients/deletePatient",
  async ({ api, postData = {}, header }, thunkAPI) => {
    const response = await postDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    resetDeletePatientStatus: (state) => {
      state.deletePatientStatus = "idle";
    },
    resetCreatePatientStatus: (state) => {
      state.createPatientStatus = "idle";
    },
    resetUpdatePatientStatus: (state) => {
      state.updatePatientStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPatients.pending, (state) => {
        state.patientsStatus = "loading";
      })
      .addCase(getPatients.fulfilled, (state, action) => {
        state.patientsStatus = "succeeded";
        state.patients = action.payload.data.list;
      })
      .addCase(getPatients.rejected, (state, action) => {
        state.patientsStatus = "failed";
        state.patientsMessage = action.payload?.responseMessage;
      });
    builder
      .addCase(deletePatient.pending, (state) => {
        state.deletePatientStatus = "loading";
      })
      .addCase(deletePatient.fulfilled, (state, action) => {
        state.deletePatientStatus = "succeeded";
        state.deletePatientMessage = action.payload.message;
      })
      .addCase(deletePatient.rejected, (state, action) => {
        state.deletePatientStatus = "failed";
        state.deletePatientMessage = action.payload?.message;
      });
    builder
      .addCase(createPatient.pending, (state) => {
        state.createPatientStatus = "loading";
      })
      .addCase(createPatient.fulfilled, (state, action) => {
        state.createPatientStatus = "succeeded";
        state.createPatientMessage = action.payload.message;
      })
      .addCase(createPatient.rejected, (state, action) => {
        state.createPatientStatus = "failed";
        state.createPatientMessage = action.payload?.message;
      });
    builder
      .addCase(updatePatient.pending, (state) => {
        state.updatePatientStatus = "loading";
      })
      .addCase(updatePatient.fulfilled, (state, action) => {
        state.updatePatientStatus = "succeeded";
        state.updatePatientMessage = action.payload.message;
      })
      .addCase(updatePatient.rejected, (state, action) => {
        state.updatePatientStatus = "failed";
        state.updatePatientMessage = action.payload?.message;
      });
  },
});

export const patients = (state) => {
  return state.patients.patients;
};
export const patientsStatus = (state) => state.patients.patientsStatus;
export const patientsMessage = (state) => state.patients.patientsMessage;
export const deletePatientStatus = (state) =>
  state.patients.deletePatientStatus;
export const deletePatientMessage = (state) =>
  state.patients.deletePatientMessage;
export const createPatientStatus = (state) =>
  state.patients.createPatientStatus;
export const createPatientMessage = (state) =>
  state.patients.createPatientMessage;
export const updatePatientStatus = (state) =>
  state.patients.updatePatientStatus;
export const updatePatientMessage = (state) =>
  state.patients.updatePatientMessage;
export const {
  resetDeletePatientStatus,
  resetUpdatePatientStatus,
  resetCreatePatientStatus,
} = patientSlice.actions;

export default patientSlice.reducer;
