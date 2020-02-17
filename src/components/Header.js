import React, { useLayoutEffect, useState } from "react";

import { Link } from "gatsby";
import { TimelineMax, Power4 } from "gsap/all";
import logo from "../assets/piervix_logo.svg";

export default function Header({ alternate = false }) {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuToggle = () => {
    if (!isMobileMenuOpen) {
      console.log("you have to open");
      setIsMobileMenuOpen(true);
      toggleMobileMenu.animation.play();
      return;
    }
    console.log("you have to close");
    toggleMobileMenu.animation.reverse();
    setIsMobileMenuOpen(false);
  };
  useLayoutEffect(() => {
    const mobileNavbar = document.querySelector(".nav-content-mobile");
    const mobileNavbarItemOne = document.querySelector(
      ".nav-content-mobile ul li:nth-of-type(1)"
    );
    const mobileNavbarItemTwo = document.querySelector(
      ".nav-content-mobile ul li:nth-of-type(2)"
    );
    const mobileNavbarItemThree = document.querySelector(
      ".nav-content-mobile ul li:nth-of-type(3)"
    );
    const tl = new TimelineMax({ paused: true });
    setToggleMobileMenu({
      animation: tl
        .to(mobileNavbar, {
          visibility: "visible",
          duration: 0.3,
          opacity: 1,
          height: "auto",
          ease: Power4.easeIn,
        })
        .fromTo(
          mobileNavbarItemOne,
          {
            y: -5,
            opacity: 0,
          },
          {
            duration: 0.1,
            y: 0,
            opacity: 1,
          }
        )
        .fromTo(
          mobileNavbarItemTwo,
          {
            y: -5,
            opacity: 0,
          },
          {
            duration: 0.1,
            y: 0,
            opacity: 1,
          }
        )
        .fromTo(
          mobileNavbarItemThree,
          {
            y: -5,
            opacity: 0,
          },
          {
            duration: 0.1,
            y: 0,
            opacity: 1,
          }
        ),
    });
  }, []);
  return (
    <div id="header">
      <div
        id="nav-container"
        className="sm:hidden in-top right-0 absolute pt-5 px-4 z-50"
      >
        <div
          className={`button ${isMobileMenuOpen ? "open" : "closed"}`}
          onClick={mobileMenuToggle}
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </div>
      </div>
      <nav
        className="nav-content-mobile w-screen flex-row z-40 bg-white text-2xl"
        role="navigation"
      >
        <div className="bg-white w-screen h-auto z-40" tabIndex="0">
          <ul className="inline-flex justify-center w-full font-mono py-4 text-sm text-right px-8">
            <li className="mr-6 py-4">
              <Link
                className="text-gray-600 hover:text-black underline-link"
                activeClassName="active-link"
                to="/about"
              >
                about
              </Link>
            </li>
            <li className="mr-6 py-4">
              <Link
                className="text-gray-600 hover:text-black underline-link"
                activeClassName="active-link"
                to="/projects"
              >
                projects
              </Link>
            </li>
            <li className="py-4">
              <Link
                className="text-gray-600 hover:text-black underline-link"
                activeClassName="active-link"
                to="/contacts"
              >
                contacts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex justify-center sm:justify-between header-spacing">
        <div className="logo z-50 sm:p-0 in-top">
          <Link to="/">
            <img src={logo} alt="Piervincenzo Madeo - Logo" />
          </Link>
        </div>
        <nav
          id="main-nav"
          className="hidden sm:block navigation-menu font-mono in-top"
          role="navigation"
        >
          <ul className="flex">
            <li className="mr-6">
              <Link
                className="text-gray-600 hover:text-black underline-link"
                activeClassName="active-link"
                to="/about"
              >
                about
              </Link>
            </li>
            <li className="mr-6">
              <Link
                className="text-gray-600 hover:text-black underline-link"
                activeClassName="active-link"
                to="/projects"
              >
                projects
              </Link>
            </li>
            <li className="mr-6">
              <Link
                className="text-gray-600 hover:text-black underline-link"
                activeClassName="active-link"
                to="/contacts"
              >
                contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
