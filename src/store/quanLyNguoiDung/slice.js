import { createSlice } from "@reduxjs/toolkit";
import { login } from "./thunkAction";

const initialState = {
  user: null,
};
export const quanLyNguoiDungSlice = createSlice({
  name: "quanLyNguoiDung",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
  },
});
export const quanLyNguoiDungReducer = quanLyNguoiDungSlice.reducer;
export const quanLyNguoiDungActions = quanLyNguoiDungSlice.actions;
