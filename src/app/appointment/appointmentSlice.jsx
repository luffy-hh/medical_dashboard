import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
};

const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const appointments = (state) => state.appointments.appointments;

export default appointmentSlice.reducer;
