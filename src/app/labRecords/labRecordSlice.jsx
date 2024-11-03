import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  labRecords: [],
};

const labRecordSlice = createSlice({
  name: "labRecords",
  initialState,
  reducers: {},
});

export const labRecords = (state) => state.labRecords.labRecords;
export default labRecordSlice.reducer;
