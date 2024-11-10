import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getDataWithToken,
  postDataWithToken,
  postMultipartDataWithToken,
} from "../../services/ApiCalls.jsx";

const initialState = {
  banners: [],
  bannersStatus: "idle",
  bannersMessage: "",

  createBannerStatus: "idle",
  createBannerMessage: "",

  updateBannerStatus: "idle",
  updateBannerMessage: "",

  deleteBannerStatus: "idle",
  deleteBannerMessage: "",
};

export const getBanners = createAsyncThunk(
  "banners/getBanners",
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

export const createBanner = createAsyncThunk(
  "banners/createBanner",
  async ({ api, postData = {}, header = {} }, thunkAPI) => {
    const response = await postMultipartDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const updateBanner = createAsyncThunk(
  "banners/updateBanner",
  async ({ api, postData = {}, header = {} }, thunkAPI) => {
    const response = await postMultipartDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const deleteBanner = createAsyncThunk(
  "banners/deleteBanner",
  async ({ api, postData = {}, header = {} }, thunkAPI) => {
    const response = await postDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

const bannerSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {
    resetDeleteBannerStatus: (state) => {
      state.deleteBannerStatus = "idle";
      state.deleteBannerMessage = "";
    },
    resetCreateBannerStatus: (state) => {
      state.createBannerStatus = "idle";
      state.createBannerMessage = "";
    },
    resetUpdateBannerStatus: (state) => {
      state.updateBannerStatus = "idle";
      state.updateBannerMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBanners.pending, (state) => {
        state.bannersStatus = "loading";
      })
      .addCase(getBanners.fulfilled, (state, action) => {
        state.bannersStatus = "succeeded";
        state.banners = action.payload.data.list;
      })
      .addCase(getBanners.rejected, (state, action) => {
        state.bannersStatus = "failed";
        state.bannersMessage = action.payload?.responseMessage;
      })
      .addCase(createBanner.pending, (state) => {
        state.createBannerStatus = "loading";
      })
      .addCase(createBanner.fulfilled, (state, action) => {
        state.createBannerStatus = "succeeded";
        state.createBannerMessage = action.payload.responseMessage;
      })
      .addCase(createBanner.rejected, (state, action) => {
        state.createBannerStatus = "failed";
        state.createBannerMessage = action.payload?.responseMessage;
      })
      .addCase(updateBanner.pending, (state) => {
        state.updateBannerStatus = "loading";
      })
      .addCase(updateBanner.fulfilled, (state, action) => {
        state.updateBannerStatus = "succeeded";
        state.updateBannerMessage = action.payload.responseMessage;
      })
      .addCase(updateBanner.rejected, (state, action) => {
        state.updateBannerStatus = "failed";
        state.updateBannerMessage = action.payload?.responseMessage;
      })
      .addCase(deleteBanner.pending, (state) => {
        state.deleteBannerStatus = "loading";
      })
      .addCase(deleteBanner.fulfilled, (state, action) => {
        state.deleteBannerStatus = "succeeded";
        state.deleteBannerMessage = action.payload.responseMessage;
      })
      .addCase(deleteBanner.rejected, (state, action) => {
        state.deleteBannerStatus = "failed";
        state.deleteBannerMessage = action.payload?.responseMessage;
      });
  },
});

export const banners = (state) => state.banners.banners;
export const bannersStatus = (state) => state.banners.bannersStatus;
export const bannersMessage = (state) => state.banners.bannersMessage;

export const createBannerStatus = (state) => state.banners.createBannerStatus;
export const createBannerMessage = (state) => state.banners.createBannerMessage;

export const updateBannerStatus = (state) => state.banners.updateBannerStatus;
export const updateBannerMessage = (state) => state.banners.updateBannerMessage;

export const deleteBannerStatus = (state) => state.banners.deleteBannerStatus;
export const deleteBannerMessage = (state) => state.banners.deleteBannerMessage;

export const {
  resetDeleteBannerStatus,
  resetUpdateBannerStatus,
  resetCreateBannerStatus,
} = bannerSlice.actions;
export default bannerSlice.reducer;
