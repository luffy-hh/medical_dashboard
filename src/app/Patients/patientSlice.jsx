import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getData,
  getDataWithToken,
  postDataWithToken,
} from "../../services/ApiCalls.jsx";

const initialState = {
  patients: [],
  patientsStatus: "idle",
  patientsMessage: "",
  patientsTotal: 0,

  deletePatientStatus: "idle",
  deletePatientMessage: "",
};

export const getPatients = createAsyncThunk(
  "patients/getPatients",
  async ({ api }, thunkAPI) => {
    const response = await getDataWithToken(api);
    const data = await response.json();
    console.log(data);

    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }

    return data;
  },
);

export const deletePatient = createAsyncThunk(
  "patients/deletePatient",
  async ({ api, postData }, thunkAPI) => {
    console.log(api, postData);

    const response = await postDataWithToken(api, postData);
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
    setPatients: (state, action) => {
      state.patients = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPatients.pending, (state) => {
        state.patientsStatus = "loading";
      })
      .addCase(getPatients.fulfilled, (state, action) => {
        state.patientsStatus = "succeeded";
        state.patients = action.payload.data.data;
        state.patientsTotal = action.payload.data.total;
      })
      .addCase(getPatients.rejected, (state, action) => {
        state.patientsStatus = "failed";
        state.patientsMessage = action.payload?.message;
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
  },
});

export const patients = (state) => {
  return state.patients.patients;
};

export const { setPatients } = patientSlice.actions;

export default patientSlice.reducer;
