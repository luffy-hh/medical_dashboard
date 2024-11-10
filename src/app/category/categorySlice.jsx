import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getDataWithToken,
  postDataWithToken,
  postMultipartDataWithToken,
} from "../../services/ApiCalls.jsx";

const initialState = {
  categories: [],
  categoriesStatus: "idle",
  categoriesMessage: "",

  createCategoryStatus: "idle",
  createCategoryMessage: "",

  updateCategoryStatus: "idle",
  updateCategoryMessage: "",

  deleteCategoryStatus: "idle",
  deleteCategoryMessage: "",
};

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async ({ api }, thunkAPI) => {
    const response = await getDataWithToken(api);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);
export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async ({ api, postData = {}, header }, thunkAPI) => {
    const response = await postDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async ({ api, postData = {}, header }, thunkAPI) => {
    const response = await postMultipartDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);

export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async ({ api, postData = {}, header }, thunkAPI) => {
    const response = await postMultipartDataWithToken(api, postData, header);
    const data = await response.json();
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  },
);
const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    resetCreateCategoryStatus: (state) => {
      state.createCategoryStatus = "idle";
      state.createCategoryMessage = "";
    },
    resetDeleteCategoryStatus: (state) => {
      state.deleteCategoryStatus = "idle";
      state.deleteCategoryMessage = "";
    },
    resetUpdateCategoryStatus: (state) => {
      state.updateCategoryStatus = "idle";
      state.updateCategoryMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.categoriesStatus = "loading";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload.data.list;
        state.categoriesStatus = "succeeded";
      })
      .addCase(getCategories.rejected, (state) => {
        state.categoriesStatus = "failed";
      })
      .addCase(deleteCategory.pending, (state) => {
        state.deleteCategoryStatus = "loading";
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.deleteCategoryStatus = "succeeded";
        state.deleteCategoryMessage = action.payload.responseMessage;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.deleteCategoryStatus = "failed";
        state.deleteCategoryMessage = action.payload?.responseMessage;
      })
      .addCase(createCategory.pending, (state) => {
        state.createCategoryStatus = "loading";
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.createCategoryStatus = "succeeded";
        state.createCategoryMessage = action.payload.responseMessage;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.createCategoryStatus = "failed";
        state.createCategoryMessage = action.payload?.responseMessage;
      })
      .addCase(updateCategory.pending, (state) => {
        state.updateCategoryStatus = "loading";
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.updateCategoryStatus = "succeeded";
        state.updateCategoryMessage = action.payload.responseMessage;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.updateCategoryStatus = "failed";
        state.updateCategoryMessage = action.payload?.responseMessage;
      });
  },
});

export const categories = (state) => state.categories.categories;
export const categoriesStatus = (state) => state.categories.categoriesStatus;
export const categoriesMessage = (state) => state.categories.categoriesMessage;
export const createCategoryStatus = (state) =>
  state.categories.createCategoryStatus;
export const createCategoryMessage = (state) =>
  state.categories.createCategoryMessage;
export const updateCategoryStatus = (state) =>
  state.categories.updateCategoryStatus;
export const updateCategoryMessage = (state) =>
  state.categories.updateCategoryMessage;
export const deleteCategoryStatus = (state) =>
  state.categories.deleteCategoryStatus;
export const deleteCategoryMessage = (state) =>
  state.categories.deleteCategoryMessage;

export const {
  resetCreateCategoryStatus,
  resetDeleteCategoryStatus,
  resetUpdateCategoryStatus,
} = categorySlice.actions;
export default categorySlice.reducer;
