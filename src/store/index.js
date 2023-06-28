import { configureStore } from "@reduxjs/toolkit";
import { quanLyPhimReducer } from "./quanLyPhim/slice";
import { quanLyBannerReducer } from "./quanLyBanner/slice";

export const store = configureStore({
  reducer: {
    quanLyPhim: quanLyPhimReducer,
    quanLyBanner: quanLyBannerReducer,
  },
});
