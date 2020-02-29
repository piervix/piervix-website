import React, { useState, useRef, useLayoutEffect } from "react";

import { TimelineMax, Power4 } from "gsap/all";
import { useOnMouseWheel, useKeyDown } from "../utils/custom-hooks";
// eslint-disable-next-line import/no-webpack-loader-syntax
import Lethargy from "exports-loader?this.Lethargy!lethargy/lethargy";
import _ from "lodash";

import downArrow from "../assets/down_arrow.svg";

const slides = [
  {
    client: "Ducati",
    role: "Creative technologist",
    support:
      "Service design consulting, Design system owner, Digital transformation consulting",
    img: "img/ducati_img.png",
  },
  {
    client: "TIM",
    role: "Creative technologist",
    support: "Lean UX coach, Agile coach, UX Strategy, Tech consulting",
    img: "img/tim_img.jpg",
  },
  {
    company: "Foodracers",
    role: "Head of User Experience",
    support: "UX Strategy, Lean UX, Team Management, Wireframing, Prototyping",
    img: "img/foodracers_img.jpg",
  },
];

export default function BottomProjectBanner(props) {
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);
  const [changeSlideAnimation, setchangeSlideAnimation] = useState(null);

  let currentSlideIndex = useRef(0);

  const lethargy = new Lethargy();

  let slidesRefs = useRef(slides.map(() => React.createRef()));

  const calculateNextIndex = (currentIndex, slidesLength, direction) => {
    let nextIndex = 0;
    if (direction === "up") {
      nextIndex = currentIndex < 1 ? slidesLength - 1 : currentIndex - 1;
    } else {
      nextIndex = currentIndex >= slidesLength - 1 ? 0 : currentIndex + 1;
    }
    return nextIndex;
  };

  useKeyDown(e => {
    if (isAnimationRunning) return;
    const currentIndex = currentSlideIndex.current;
    let nextIndex = 0;
    if (e.keyCode === 38) {
      console.log("keyup");
      nextIndex = calculateNextIndex(currentIndex, slides.length, "up");
      changeSlideAnimation.animateScrollArrow("up").play();
    }
    if (e.keyCode === 40) {
      console.log("keydown");
      nextIndex = calculateNextIndex(currentIndex, slides.length, "down");
      changeSlideAnimation.animateScrollArrow("down").play();
    }
    changeSlideAnimation.changeSlide(currentIndex, nextIndex).play();
  });

  useOnMouseWheel(e => {
    if (isAnimationRunning) return;
    const currentIndex = currentSlideIndex.current;
    let nextIndex = 0;
    e.stopPropagation();
    if (lethargy.check(e) !== false) {
      const isScrollingDown = Math.sign(e.deltaY);
      if (isScrollingDown < 0) {
        console.log("up", e);
        nextIndex = calculateNextIndex(currentIndex, slides.length, "up");
        changeSlideAnimation.animateScrollArrow("up").play();
      } else {
        console.log("down", e);
        nextIndex = calculateNextIndex(currentIndex, slides.length, "down");
        changeSlideAnimation.animateScrollArrow("down").play();
      }
      changeSlideAnimation.changeSlide(currentIndex, nextIndex).play();
    }
  });

  const scrollArrowClickHandler = e => {
    e.preventDefault();
    if (isAnimationRunning) return;
    const currentTargetId = e.currentTarget.attributes[0].value;
    const currentIndex = currentSlideIndex.current;
    let nextIndex = 0;
    const goUp = currentTargetId.includes("up");

    if (goUp) {
      console.log("up", e);
      nextIndex = calculateNextIndex(currentIndex, slides.length, "up");
      changeSlideAnimation.animateScrollArrow("up").play();
    } else {
      console.log("down", e);
      nextIndex = calculateNextIndex(currentIndex, slides.length, "down");
      changeSlideAnimation.animateScrollArrow("down").play();
    }
    changeSlideAnimation.changeSlide(currentIndex, nextIndex).play();
  };

  useLayoutEffect(() => {
    const slides = slidesRefs.current;
    const tl = new TimelineMax({ paused: true });
    const tlArrow = new TimelineMax({ paused: true });
    setchangeSlideAnimation({
      animateScrollArrow: direction => {
        const selectedArrow =
          direction === "up"
            ? document.querySelector("#scroll-arrow-up")
            : document.querySelector("#scroll-arrow");

        return tlArrow
          .to(selectedArrow, {
            scale: 1.3,
            duration: 0.5,
            opacity: 1,
            ease: Power4.easeIn,
          })
          .to(selectedArrow, {
            scale: 1,
            duration: 0.5,
            opacity: 0.5,
            ease: Power4.easeOut,
          });
      },
      changeSlide: (currIndex, nextIndex) => {
        const currentSlide = slides[currIndex].current;
        const nextSlide = slides[nextIndex].current;
        const currentSlideDetails = currentSlide.querySelectorAll(
          ":scope > .details > div > #info-text"
        );
        const currentSlideDetailLabel = currentSlide.querySelectorAll(
          ":scope > .details > div > #info-label"
        );
        const nextSlideDetails = nextSlide.querySelectorAll(
          ":scope > .details > div > #info-text"
        );
        const nextSlideDetailLabel = nextSlide.querySelectorAll(
          ":scope > .details > div > #info-label"
        );
        const currentCover = currentSlide.querySelector(":scope > img#cover");
        const nextCover = nextSlide.querySelector(":scope > img#cover");
        return tl
          .call(() => {
            setIsAnimationRunning(true);
          })
          .to(currentSlideDetails, {
            y: -5,
            opacity: 0,
            duration: 0.2,
            ease: "linear",
          })
          .to(
            currentSlideDetailLabel,
            {
              y: -5,
              opacity: 0,
              duration: 0.2,
              ease: "linear",
            },
            "-=0.2"
          )
          .fromTo(
            currentCover,
            { opacity: 1 },
            {
              opacity: 0,
              duration: 1,
              ease: Power4.easeOut,
            }
          )
          .fromTo(
            nextSlideDetails,
            { y: -5, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: Power4.easeOut,
            },
            "-=0.9"
          )
          .fromTo(
            nextSlideDetailLabel,
            { y: -5, opacity: 0 },
            {
              y: 0,
              opacity: 0.5,
              duration: 0.2,
              ease: Power4.easeOut,
            },
            "-=0.9"
          )
          .fromTo(
            nextSlide,
            { opacity: 0, pointerEvents: "none" },
            {
              opacity: 1,
              pointerEvents: "all",
              duration: 0.3,
              ease: "linear",
            },
            "-=2"
          )
          .fromTo(
            nextCover,
            { opacity: 0, scale: 1.1 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.8,
              ease: Power4.easeOut,
            },
            "-=1.1"
          )
          .call(() => {
            setIsAnimationRunning(false);
            currentSlideIndex.current = nextIndex;
          });
      },
    });
    return () => (currentSlideIndex.current = 0);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, i) => {
        return (
          <div
            id={`slide-${i + 1}`}
            className={
              i === 0
                ? "slide w-full absolute bottom-0 right-0 in-bottom show-first-slide"
                : "slide w-full absolute bottom-0 right-0"
            }
            style={i === 0 ? { animationDelay: "3s" } : null}
            key={i}
            ref={slidesRefs.current[i]}
          >
            <div className="details absolute spacing text-white text-center sm:text-left max-h-full w-full sm:max-w-xl fade-in">
              <div className="client text-1_5vh sm:text-sm sm:max-w-xs">
                <span id="info-label" className="font-mono opacity-50">
                  {Object.keys(slide)[0]}
                </span>
                <h4
                  id="info-text"
                  className="text-2vh px-8 sm:px-0 sm:text-base"
                >
                  {slide[Object.keys(slide)[0]]}
                </h4>
              </div>
              <div className="role text-1_5vh sm:text-sm sm:max-w-xs">
                <span id="info-label" className="font-mono opacity-50">
                  {Object.keys(slide)[1]}
                </span>
                <h4
                  id="info-text"
                  className="text-2vh px-8 sm:px-0 sm:text-base"
                >
                  {slide[Object.keys(slide)[1]]}
                </h4>
              </div>
              <div className="support text-1_5vh sm:text-sm sm:max-w-xs">
                <span id="info-label" className="font-mono opacity-50">
                  {Object.keys(slide)[2]}
                </span>
                <h4
                  id="info-text"
                  className="text-2vh px-8 sm:px-0 sm:text-base"
                >
                  {slide[Object.keys(slide)[2]]}
                </h4>
              </div>
            </div>
            <img
              id="cover"
              src={slide.img}
              alt="project text"
              className="slide-img h-40vh sm:h-35vh"
            />
          </div>
        );
      })}
      <div className="flex flex-col items-center sm:items-stretch w-full sm:w-auto sm:max-w-md absolute right-0 bottom-0 z-10">
        <div
          id="scroll-arrow-up"
          className="flex align-middle opacity-50 arrow-up mb-4 fade-in-50"
          onClick={scrollArrowClickHandler}
          style={{ animationDelay: "3.2s" }}
        >
          <a href="#up" className="spacing pb-0 pt-0">
            <img src={downArrow} alt="scroll up to discover more projects" />
          </a>
        </div>
        <div
          id="scroll-arrow"
          className="flex align-middle opacity-50 fade-in-50"
          onClick={scrollArrowClickHandler}
          style={{ animationDelay: "3.2s" }}
        >
          <a href="#down" className="spacing pt-0">
            <img src={downArrow} alt="scroll down to discover more projects" />
          </a>
        </div>
      </div>
    </div>
  );
}
