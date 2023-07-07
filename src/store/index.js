import { configureStore } from "@reduxjs/toolkit";
import { quanLyPhimReducer } from "./quanLyPhim/slice";
import { quanLyBannerReducer } from "./quanLyBanner/slice";
import { layThongTinMovieReducer } from "./layThongTinFlim/slice";

export const store = configureStore({
  reducer: {
    quanLyPhim: quanLyPhimReducer,
    quanLyBanner: quanLyBannerReducer,
    layThongTinPhim: layThongTinMovieReducer,
  },
});
