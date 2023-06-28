import http from "../constants/api";

export const quanLyPhimServices = {
  getMovieList: (query = "") => {
    return http.get(`QuanLyPhim/LayDanhSachPhim${query}`);
  },
  getBannerList: () => {
    return http.get(`/QuanLyPhim/LayDanhSachBanner`);
  },
  getInfoMovie: (query = "") => {
    return http.get(`QuanLyPhim/LayThongTinPhim${query}`);
  },
};
