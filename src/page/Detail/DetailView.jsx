import React, { useEffect, useState } from "react";
import IconIMDB from "../../assets/icon/icon-imdb.svg";
import IconFb from "../../assets/icon/facebook.svg";
import IconPlus from "../../assets/icon/plus-alt-svgrepo-com.svg";
import IconPlay from "../../assets/icon/play-svgrepo-com.svg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getinfoMovie } from "../../store/layThongTinFlim/thunkAction";
import Moment from "react-moment";
import moment from "moment-timezone";
import ReactPlayer from "react-player";
import Modal from "react-modal";

const DetailView = () => {
  const dispatch = useDispatch();
  const { maPhim } = useParams();

  // const detailMovie =
  const { data, isLoading } = useSelector((state) => state.layThongTinPhim);
  console.log("data:", data);

  useEffect(() => {
    dispatch(getinfoMovie(maPhim));
  }, [dispatch, maPhim]);

  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <img
        alt="one"
        className="blur"
        src="https://img.freepik.com/free-photo/rows-red-seats-theater_53876-64710.jpg?w=1800&t=st=1687501690~exp=1687502290~hmac=706030cfa8b935384b457417cb7e03b1bf72446816a00e9ad6d7c3538521fe53"
      />
      <div className="absolute z-100 top-40">
        <div className="grid grid-cols-3 ">
          <div className="mx-24 w-[267px] h-[400px]">
            <img className="rounded-lg " src={data.hinhAnh} alt={data.maPhim} />
            <button className=" w-[267px] bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 mt-7  rounded inline-flex items-center justify-center">
              <img src={IconPlay} alt="" className="mr-3" />
              <span className="text-white text-1 font-normal uppercase">
                Xem phim
              </span>
            </button>
          </div>

          <div className="col-span-2">
            <h1 className="text-white text-4xl font-semibold">
              {data?.tenPhim}
            </h1>
            <div className="flex justify-start mt-5">
              <img className="w-11 mr-3" src={IconIMDB} alt="" />
              <p className="text-white text-[20px]">{data.danhGia}</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-blue-400 hover:bg-blue-600 text-black font-bold py-2 px-4 mt-5 rounded inline-flex items-center">
                <img src={IconFb} alt="" className="w-4 h-4 mr-3" />
                <span className="text-white text-1 font-normal">Share</span>
              </button>
              <button className="border-blue-400 border-[1px] hover:bg-blue-600 hover:border-transparent text-black font-bold py-2 px-4 mt-5 rounded inline-flex items-center">
                <img src={IconPlus} alt="" className="mr-3" />
                <span className="text-white text-1 font-normal">
                  Bộ sưu tập
                </span>
              </button>
            </div>
            <div className="mt-8">
              <p className="text-gray-400 uppercase">
                KHỞI CHIẾU: {""}
                <Moment format="DD/MM/YYYY">
                  {moment(data.ngayKhoiChieu).tz("Asia/Ho_Chi_Minh")}
                </Moment>
              </p>
              <p className="text-gray-400 mt-1 pr-8">MÔ TẢ: {data.moTa}</p>
            </div>
            <div className="mt-10 text-white uppercase">
              <p>TRAILER</p>
              <div>
                <ReactPlayer
                  className="mt-6"
                  width="244px"
                  height="146px"
                  url={data.trailer}
                  playing={playing}
                  controls={true}
                  onPlay={handlePlay}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
