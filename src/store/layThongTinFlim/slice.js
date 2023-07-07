import { createSlice } from "@reduxjs/toolkit";
import { getinfoMovie } from "./thunkAction";

const initialState = {
  data: [],
  isLoading: false,
  error: undefined,
};
export const layThongTinMovieSlice = createSlice({
  name: "layThongTinPhim",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getinfoMovie.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getinfoMovie.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getinfoMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});
export const layThongTinMovieReducer = layThongTinMovieSlice.reducer;
export const layThongTinMovieActions = layThongTinMovieSlice.actions;
