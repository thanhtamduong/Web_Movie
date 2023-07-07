import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getmovieList } from "../../store/quanLyPhim/thunkAction";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";
// import { getinfoMovie } from "../../store/layThongTinFlim/thunkAction";

const ListMovie = () => {
  const dispatch = useDispatch();
  const { movieList, isLoading } = useSelector((state) => state.quanLyPhim);
  console.log("quanLyPhim", movieList);
  useEffect(() => {
    dispatch(getmovieList());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-1 justify-center p-4">
        {[...Array(12)].map((e, i) => {
          return (
            <div className="flex flex-col m-1.5" key={i}>
              <Skeleton.Input style={{ width: 300, height: 400 }} />
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="">
      <div className="px-6 py-3">
        <p className="text-orange-500 text-[24px] uppercase">
          Phim mới cập nhật
        </p>
        <hr />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6">
        {movieList.map((movie) => {
          return (
            <Link key={movie.maPhim} to={`/details/${movie.maPhim}`}>
              <div className="">
                <div className="hover: cursor-pointer">
                  <img
                    className="rounded-lg h-[400px]"
                    src={movie.hinhAnh}
                    alt={movie.hinhAnh}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ListMovie;
