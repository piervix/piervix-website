import React from "react";
import Home from "../templates/Home";
import HeroBanner from "../components/HeroBanner";
import BottomProjectBanner from "../components/BottomProjectBanner";

export default () => {
  return (
    <Home>
      <HeroBanner className="mt-48" />
      <BottomProjectBanner />
    </Home>
  );
};
