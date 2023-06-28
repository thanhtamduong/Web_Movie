import React from "react";
import IconIMDB from "../../assets/icon/icon-imdb.svg";
import IconFb from "../../assets/icon/facebook.svg";
import IconPlus from "../../assets/icon/plus-alt-svgrepo-com.svg";
import IconPlay from "../../assets/icon/play-svgrepo-com.svg";
const DetailView = () => {
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
        <div className="grid grid-cols-3">
          <div className="ml-24">
            <img
              className="rounded-lg h-[400px]"
              src="https://movienew.cybersoft.edu.vn/hinhanh/john-wick-chapter-4_gp13.jpg"
              alt="https://movienew.cybersoft.edu.vn/hinhanh/john-wick-chapter-4_gp13.jpg"
            />
            <button class=" w-[267px] bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 mt-7  rounded inline-flex items-center justify-center">
              <img src={IconPlay} alt="" className="mr-3" />
              <span className="text-white text-1 font-normal uppercase">
                Xem phim
              </span>
            </button>
          </div>

          <div className="col-span-2">
            <h1 className="text-white text-4xl font-semibold">JOHN WICK IV</h1>
            <div className="flex justify-start mt-5">
              <img className="w-11 mr-3" src={IconIMDB} alt="" />
              <p className="text-white text-[20px]">8.7</p>
            </div>
            <div className="flex gap-3">
              <button class="bg-blue-400 hover:bg-blue-600 text-black font-bold py-2 px-4 mt-5 rounded inline-flex items-center">
                <img src={IconFb} alt="" className="w-4 h-4 mr-3" />
                <span className="text-white text-1 font-normal">Share</span>
              </button>
              <button class="border-blue-400 border-[1px] hover:bg-blue-600 hover:border-transparent text-black font-bold py-2 px-4 mt-5 rounded inline-flex items-center">
                <img src={IconPlus} alt="" className="mr-3" />
                <span className="text-white text-1 font-normal">
                  Bộ sưu tập
                </span>
              </button>
            </div>
            <div className="mt-8">
              <p className="text-gray-400 uppercase">Khởi chiếu: 22/12/2023</p>
              <p className="text-gray-400 mt-1 pr-8">
                MÔ TẢ: Strange World kể về chuyến phiêu lưu “vượt không gian và
                thời gian” của gia đình Clades, một gia đình tập hợp toàn những
                huyền thoại trong làng phiêu lưu khám phá trong chuyến đi khó
                nhằn nhất của họ. Chuyến đi là cuộc hành trình đến một vùng đất
                kỳ lạ đầy rẫy những điều bí hiểm cùng những sinh vật chưa bao
                giờ xuất hiện. Đây cũng có thể sẽ là chuyến hành trình mang tới
                nhiều điều kỳ lạ nhất của Disney tới khản giả. Nhưng dường như
                thế giới kì bí ấy có thể còn dễ đương đầu hơn cả
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
