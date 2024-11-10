import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postDataWithToken } from "../../services/ApiCalls.jsx";

const initialState = {
  appointments: [],
  appointmentsStatus: "idle",
  appointmentsMessage: "",

  createAppointmentStatus: "idle",
  createAppointmentMessage: "",

  updateAppointmentStatus: "idle",
  updateAppointmentMessage: "",

  deleteAppointmentStatus: "idle",
  deleteAppointmentMessage: "",
};

export const getAppointments = createAsyncThunk(
  "appointments/getAppointments",
  async ({ api }, thunkAPI) => {
    const response = await postDataWithToken(api);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const createAppointment = createAsyncThunk(
  "appointments/createAppointment",
  async ({ api, postData = {}, header }, thunkAPI) => {
    const response = await postDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const updateAppointment = createAsyncThunk(
  "appointments/updateAppointment",
  async ({ api, postData = {}, header }, thunkAPI) => {
    const response = await postDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const deleteAppointment = createAsyncThunk(
  "appointments/deleteAppointment",
  async ({ api, postData = {}, header }, thunkAPI) => {
    const response = await postDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    resetCreateAppointmentStatus: (state) => {
      state.createAppointmentStatus = "idle";
      state.createAppointmentMessage = "";
    },
    resetUpdateAppointmentStatus: (state) => {
      state.updateAppointmentStatus = "idle";
      state.updateAppointmentMessage = "";
    },
    resetDeleteAppointmentStatus: (state) => {
      state.deleteAppointmentStatus = "idle";
      state.deleteAppointmentMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAppointments.pending, (state) => {
        state.appointmentsStatus = "loading";
      })
      .addCase(getAppointments.fulfilled, (state, action) => {
        state.appointmentsStatus = "succeeded";
        state.appointments = action.payload.data.list;
      })
      .addCase(getAppointments.rejected, (state, action) => {
        state.appointmentsStatus = "failed";
        state.appointmentsMessage = action.payload.responseMessage;
      })
      .addCase(createAppointment.pending, (state) => {
        state.createAppointmentStatus = "loading";
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.createAppointmentStatus = "succeeded";
        state.createAppointmentMessage = action.payload.responseMessage;
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.createAppointmentStatus = "failed";
        state.createAppointmentMessage = action.payload?.responseMessage;
      })
      .addCase(updateAppointment.pending, (state) => {
        state.updateAppointmentStatus = "loading";
      })
      .addCase(updateAppointment.fulfilled, (state, action) => {
        state.updateAppointmentStatus = "succeeded";
        state.updateAppointmentMessage = action.payload?.responseMessage;
      })
      .addCase(updateAppointment.rejected, (state, action) => {
        state.updateAppointmentStatus = "failed";
        state.updateAppointmentMessage = action.payload.responseMessage;
      })
      .addCase(deleteAppointment.pending, (state) => {
        state.deleteAppointmentStatus = "loading";
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.deleteAppointmentStatus = "succeeded";
        state.deleteAppointmentMessage = action.payload?.responseMessage;
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.deleteAppointmentStatus = "failed";
        state.deleteAppointmentMessage = action.payload?.responseMessage;
      });
  },
});

export const appointments = (state) => state.appointments.appointments;
export const appointmentsStatus = (state) =>
  state.appointments.appointmentsStatus;
export const appointmentsMessage = (state) =>
  state.appointments.appointmentsMessage;
export const createAppointmentStatus = (state) =>
  state.appointments.createAppointmentStatus;
export const createAppointmentMessage = (state) =>
  state.appointments.createAppointmentMessage;
export const updateAppointmentStatus = (state) =>
  state.appointments.updateAppointmentStatus;
export const updateAppointmentMessage = (state) =>
  state.appointments.updateAppointmentMessage;
export const deleteAppointmentStatus = (state) =>
  state.appointments.deleteAppointmentStatus;
export const deleteAppointmentMessage = (state) =>
  state.appointments.deleteAppointmentMessage;
export const {
  resetCreateAppointmentStatus,
  resetUpdateAppointmentStatus,
  resetDeleteAppointmentStatus,
} = appointmentSlice.actions;

export default appointmentSlice.reducer;
