import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};
const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const categories = (state) => state.categories.categories;
export default categorySlice.reducer;
