import React from "react";
import { useForm } from "react-hook-form";
import { quanLyNguoiDungServices } from "../../services/quanLyNguoiDung.services";

const RegisterView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  console.log("errors:", errors);
  return (
    <div className="">
      <section className="py-10 dark:bg-gray-900">
        <div className="py-8 flex flex-col items-center justify-center px-6  mx-auto lg:py-0">
          <a
            href="#"
            className="mt-10 flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            RẠP PHIM
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md md:max-w-[36rem] xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Đăng ký tài khoản
              </h1>
              <form
                onSubmit={handleSubmit(async (value) => {
                  try {
                    const res = await quanLyNguoiDungServices.register(value);
                  } catch (error) {}
                })}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="hoTen"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Họ tên
                  </label>
                  <input
                    {...register("hoTen", {
                      required: "Vui lòng nhập họ tên",
                      pattern: {
                        value:
                          /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u,
                        message: "Vui lòng nhập đúng định dạng",
                      },
                    })}
                    id="hoTen"
                    type="text"
                    placeholder="My Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <p className="text-[14px] mt-1 text-red-500">
                    {errors?.hoTen?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="soDt"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Số điện thoại
                  </label>
                  <input
                    {...register("soDt", {
                      required: "Vui lòng nhập số điện thoại",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Vui lòng nhập đúng định dạng",
                      },
                    })}
                    id="soDt"
                    type="text"
                    placeholder="098xxxxx"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <p className="text-[14px] mt-1 text-red-500">
                    {errors?.soDt?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Vui lòng nhập địa chỉ email",
                      pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message:
                          "Mật khẩu phải có 1 ký tự đặc biệt, 1 chữ in hoa",
                      },
                    })}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                  />
                  <p className="text-[14px] mt-1 text-red-500">
                    {errors?.email?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="taiKhoan"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tài khoản
                  </label>
                  <input
                    {...register("taiKhoan", {
                      required: "Vui lòng nhập tên tài khoản",
                      maxLength: {
                        value: 10,
                        message: "Tài khoản đã quá 10 ký tự",
                      },
                    })}
                    id="taiKhoan"
                    type="text"
                    placeholder="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <p className="text-[14px] mt-1 text-red-500">
                    {errors?.taiKhoan?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="maNhom"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mã nhóm
                  </label>
                  <input
                    {...register("maNhom", {
                      required: "Vui lòng nhập mã nhóm",
                    })}
                    id="maNhom"
                    type="text"
                    placeholder="KH01"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <p className="text-[14px] mt-1 text-red-500">
                    {errors?.maNhom?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mật khẩu
                  </label>
                  <input
                    {...register("matKhau", {
                      required: "Vui lòng nhập mật khẩu",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
                        message: "Vui lòng nhập đúng định dạng",
                      },
                      minLength: {
                        value: 5,
                        message: "Mật khẩu quá ngắn!",
                      },
                    })}
                    type="text"
                    name="matKhau"
                    id="matKhau"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <p className="text-[14px] mt-1 text-red-500">
                    {errors?.matKhau?.message}
                  </p>
                </div>
                {/* <div>
                                  <label
                                      
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nhập lại mật khẩu
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div> */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      Tôi chấp nhận tất cả{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Điều khoản và Chính sách
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-black bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Đăng Ký
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Đã có tài khoản?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Đăng nhập
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterView;
