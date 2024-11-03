import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  medicines: [],
};

const medicineSlice = createSlice({
  name: "medicines",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const medicines = (state) => state.medicines.medicines;

// export const { } = medicineSlice.actions;

export default medicineSlice.reducer;
