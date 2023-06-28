import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getbannerList } from "../../store/quanLyBanner/thunkAction";
import "./style.css";

const CarouselMovie = () => {
  const dispatch = useDispatch();
  const { bannerList } = useSelector((state) => state.quanLyBanner);
  useEffect(() => {
    dispatch(getbannerList());
  }, [dispatch]);

  const [currentSlide, setCurrentSlide] = useState(0);

  console.log(bannerList?.length);
  const numberOfSlides = bannerList?.length === 0 ? 3 : bannerList?.length;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % numberOfSlides);
    }, 3000);

    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <div
        id="default-carousel"
        className="relative z-1 w-full"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden md:h-screen ">
          {/* Item 1 */}

          <div className="slider">
            {bannerList.map((slide, index) => (
              <div
                key={slide.maBanner}
                className={`slide ${index === currentSlide ? "active" : ""}`}
              >
                <img className="w-full" src={slide.hinhAnh} alt="" />
              </div>
            ))}
          </div>
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="hover:bg-white inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white hover:text-black sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="hover:bg-white inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white hover:text-black sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default CarouselMovie;
