import http from "../constants/api";

export const quanLyNguoiDungServices = {
  register: (payload) => http.post("QuanLyNguoiDung/DangKy", payload),
  login: (payload) => http.post("QuanLyNguoiDung/DangNhap", payload),
};
