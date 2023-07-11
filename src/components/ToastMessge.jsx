import { message } from "antd";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ToastMessge = () => {
  const toastClone = {
    error: (messege) => toast(messege, { type: "error" }),
    success: (messege) => toast(messege, { type: "success" }),
    warning: (message) => toast(message, { type: "warning" }),
  };
  Object.assign(message, toastClone);
  return (
    <div>
      <ToastContainer position="top-center" />
    </div>
  );
};
