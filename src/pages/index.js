import React, { useState, useRef, useEffect } from "react";
import Home from "../templates/Home";
import HeroBanner from "../components/HeroBanner";
import BottomProjectBanner from "../components/BottomProjectBanner";

function useEffectOnce(cb) {
  const didRun = useRef(false);

  useEffect(() => {
    if (!didRun.current) {
      cb();
      didRun.current = true;
    }
  });
}

export default () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffectOnce(() => {
    const isFirstVisit = localStorage.getItem("isFirstVisit");
    if (isFirstVisit === null) {
      localStorage.setItem("isFirstVisit", true);
      setShouldAnimate(true);
    } else {
      localStorage.setItem("isFirstVisit", false);
      setShouldAnimate(false);
    }
  });

  return (
    <Home animate={shouldAnimate}>
      <HeroBanner className="mt-48" />
      <BottomProjectBanner />
    </Home>
  );
};
