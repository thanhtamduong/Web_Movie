import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "../../services/quanLyPhim.services";

export const getmovieList = createAsyncThunk(
  "quanLyPhim/getmovielist",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await quanLyPhimServices.getMovieList("?maNhom=GP13");
      console.log("res: ", res);
      return res.data.content; //day la payload day len store redux
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
