import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "../../services/quanLyPhim.services";

export const getinfoMovie = createAsyncThunk(
  "quanLyPhim/getinfoMovie",
  async (maPhim, { rejectWithValue }) => {
    try {
      const res = await quanLyPhimServices.getInfoMovie(maPhim);
      console.log("res infoMoive details:", res.data.content);
      return res.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
