import { createSlice } from "@reduxjs/toolkit";
import { getmovieList } from "./thunkAction";

const initialState = {
  movieList: [],
  isLoading: false,
  error: undefined,
};
export const quanLyPhimSlice = createSlice({
  name: "quanLyPhim",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getmovieList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getmovieList.fulfilled, (state, action) => {
        state.movieList = action.payload;
        state.isLoading = false;
      })
      .addCase(getmovieList.rejected, (state, action) => {
        state.isLoading = false;
        state.movieList = action.payload;
      });
  },
});
export const quanLyPhimReducer = quanLyPhimSlice.reducer;
export const quanLyPhimActions = quanLyPhimSlice.actions;
