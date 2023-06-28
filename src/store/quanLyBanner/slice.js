import { createSlice } from "@reduxjs/toolkit";
import { getbannerList } from "./thunkAction";
import { getmovieList } from "../quanLyPhim/thunkAction";

const initialState = {
  bannerList: [],
  isLoading: false,
  error: undefined,
};
export const quanLyBannerSlice = createSlice({
  name: "quanLyBanner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getbannerList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getbannerList.fulfilled, (state, action) => {
        state.bannerList = action.payload;
        state.isLoading = false;
      })
      .addCase(getmovieList.rejected, (state, action) => {
        state.isLoading = false;
        state.bannerList = action.payload;
      });
  },
});
export const quanLyBannerReducer = quanLyBannerSlice.reducer;
export const quanLayBannerActions = quanLyBannerSlice.actions;
