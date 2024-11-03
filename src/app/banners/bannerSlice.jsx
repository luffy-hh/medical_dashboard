import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  banners: [],
};

export const getBanners = createAsyncThunk(
  "banners/getBanners",
  async ({ api }, thunkAPI) => {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  },
);

const bannerSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
});

export const banners = (state) => state.banners.banners;

export default bannerSlice.reducer;
