import React from "react";
import HomeTemplate from "../templates/HomeTemplate";
import HeroBanner from "../components/HeroBanner";
import BottomProjectBanner from "../components/BottomProjectBanner";

export default () => {
  return (
    <HomeTemplate>
      <HeroBanner className="mt-48" />
      <BottomProjectBanner />
    </HomeTemplate>
  );
};
