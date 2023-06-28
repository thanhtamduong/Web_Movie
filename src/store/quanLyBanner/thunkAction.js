import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "../../services/quanLyPhim.services";

export const getbannerList = createAsyncThunk(
  "quanLyPhim/getbannerlist",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await quanLyPhimServices.getBannerList();
      console.log("res banner:", res);
      return res.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
