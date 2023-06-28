import React from "react";
import ListMovie from "./ListMovie";
import CarouselMovie from "./CarouselMovie";

const HomeView = () => {
  return (
    <div>
      <CarouselMovie />
      <ListMovie />
    </div>
  );
};

export default HomeView;
