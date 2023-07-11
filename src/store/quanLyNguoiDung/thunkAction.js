import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyNguoiDungServices } from "../../services/quanLyNguoiDung.services";

export const login = createAsyncThunk(
  "quanLyNguoiDung/login",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await quanLyNguoiDungServices.login(payload);
      return res.data?.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
