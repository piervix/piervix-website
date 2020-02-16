import React, { useState, useLayoutEffect } from "react";

import _ from "lodash";
import { TimelineMax, TweenLite, Power4 } from "gsap/all";
import { useOnMouseWheel } from "../utils/custom-hooks";

import downArrow from "../assets/down_arrow.svg";

export default function BottomProjectBanner() {
  const [currentIndexSlide, setCurrentIndexSlide] = useState(0);

  // useOnMouseWheel(
  //   _.debounce(e => {
  //     const isScrollingDown = Math.sign(e.deltaY);
  //     if (isScrollingDown < 0) {
  //       setCurrentSlide(currentSlide - 1);
  //       console.log("up");
  //     } else {
  //       setCurrentSlide(currentSlide + 1);
  //       console.log("down");
  //     }
  //   }, 500)
  // );

  useLayoutEffect(() => {
    const slides = document.querySelectorAll(".slide");

    const scrollArrow = document.querySelector("#scroll-arrow");

    const showNextSlide = currIndex => {
      console.log("Current slide: ", setCurrentIndexSlide);
      const nextIndex = currIndex > slides.length - 1 ? 0 : currIndex + 1;
      const currentSlide = slides[currIndex];
      const nextSlide = slides[nextIndex];
      const currentSlideDetails = currentSlide.querySelectorAll(
        ":scope > .details > div > #info-text"
      );
      const nextSlideDetails = nextSlide.querySelectorAll(
        ":scope > .details > div > #info-text"
      );
      const currentCover = currentSlide.querySelector(":scope > img#cover");
      const nextCover = nextSlide.querySelector(":scope > img#cover");

      const tl = new TimelineMax();

      tl.to(currentSlideDetails, {
        y: -5,
        opacity: 0,
        duration: 0.2,
        ease: "linear",
      })
        .to(nextSlide, {
          opacity: 1,
          duration: 0.5,
          ease: "linear",
        })
        .fromTo(
          nextSlideDetails,
          { y: -5, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: Power4.easeOut,
          },
          "-=0.3"
        )
        .to(currentCover, {
          y: -250,
          opacity: 0,
          duration: 1,
          ease: Power4.easeOut,
        })
        .fromTo(
          nextCover,
          { opacity: 0.6, scale: 2 },
          { opacity: 1, scale: 1, duration: 2.5, ease: Power4.easeOut },
          "-=2.5"
        );

      setCurrentIndexSlide(nextIndex);
    };

    scrollArrow.addEventListener("click", () => {
      showNextSlide(currentIndexSlide);
    });

    console.log(slides);
  }, []);

  return (
    <div className="slider">
      <div
        id="slide-1"
        className="slide absolute bottom-0 right-0 in-bottom"
        style={{ animationDelay: "3s" }}
      >
        <div className="details absolute spacing text-white text-center md:text-left max-h-full w-full md:max-w-xl">
          <div className="client text-xs md:max-w-xs">
            <span className="font-mono opacity-50">Client</span>
            <h4 id="info-text" className="text-base">
              Ducati
            </h4>
          </div>
          <div className="role text-xs md:max-w-xs">
            <span className="font-mono opacity-50">Role</span>
            <h4 id="info-text" className="text-base">
              Creative technologist
            </h4>
          </div>
          <div className="support text-xs md:max-w-xs">
            <span className="font-mono opacity-50">Support</span>
            <h4 id="info-text" className="text-base">
              Service design consulting, Design system owner, Digital
              transformation consulting
            </h4>
          </div>
        </div>
        <img
          id="cover"
          src="img/ducati_img.png"
          alt="project text"
          className="object-cover h-32 md:h-64 w-full"
        />
      </div>
      <div id="slide-3" className="slide absolute bottom-0 right-0">
        <div className="details absolute spacing text-white text-center md:text-left max-h-full w-full md:max-w-xl">
          <div className="client text-xs md:max-w-xs">
            <span className="font-mono opacity-50">Client</span>
            <h4 id="info-text" className="text-base">
              TIM
            </h4>
          </div>
          <div className="role text-xs md:max-w-xs">
            <span className="font-mono opacity-50">Role</span>
            <h4 id="info-text" className="text-base">
              Creative technologist
            </h4>
          </div>
          <div className="support text-xs md:max-w-xs">
            <span className="font-mono opacity-50">Support</span>
            <h4 id="info-text" className="text-base">
              Lean UX coach, Agile coach, UX Strategy, Tech consulting
            </h4>
          </div>
        </div>
        <img
          id="cover"
          src="img/tim_img.jpg"
          alt="project text"
          className="object-cover h-64 w-full"
        />
      </div>
      <div id="slide-2" className="slide absolute bottom-0 right-0">
        <div className="details absolute spacing text-white text-center md:text-left max-h-full w-full md:max-w-xl">
          <div className="client text-xs md:max-w-xs">
            <span className="font-mono opacity-50">Company</span>
            <h4 id="info-text" className="text-base">
              Foodracers
            </h4>
          </div>
          <div className="role text-xs md:max-w-xs">
            <span className="font-mono opacity-50">Role</span>
            <h4 id="info-text" className="text-base">
              Head of User Experience
            </h4>
          </div>
          <div className="support text-xs md:max-w-xs">
            <span className="font-mono opacity-50">Support</span>
            <h4 id="info-text" className="text-base">
              UX Strategy, Lean UX, Team Management, Wireframing, Prototyping
            </h4>
          </div>
        </div>
        <img
          id="cover"
          src="img/foodracers_img.jpg"
          alt="project text"
          className="object-cover h-64 w-full"
        />
      </div>
      <div
        id="scroll-arrow"
        className="absolute right-0 bottom-0 spacing flex align-middle opacity-75"
      >
        <img src={downArrow} alt="scroll down to discover more projects" />
      </div>
    </div>
  );
}

tl.call(() => {
  setIsAnimationRunning(true);
})
  .to(currentSlideDetails, {
    y: -5,
    opacity: 0,
    duration: 0.2,
    zIndex: 0,
    ease: "linear",
  })
  .to(nextSlide, {
    opacity: 1,
    duration: 0.5,
    ease: "linear",
  })
  .fromTo(
    nextSlideDetails,
    { y: -5, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.75,
      zIndex: 1,
      ease: Power4.easeOut,
    },
    "-=0.3"
  )
  .to(currentCover, {
    y: -250,
    opacity: 0,
    duration: 1,
    ease: Power4.easeOut,
  })
  .set(currentCover, { y: 0, opacity: 0 })
  .fromTo(
    nextCover,
    { opacity: 0.6, scale: 2 },
    {
      opacity: 1,
      scale: 1,
      duration: 2.1,
      ease: Power4.easeOut,
    },
    "-=2.5"
  );
