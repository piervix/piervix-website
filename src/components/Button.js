import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import arrow from "../assets/arrow.svg";

export default function Button({ text, fontSizeClass, to }) {
  return (
    <AniLink
      className={`flex items-stretch btn btn-primary mt-4`}
      disabled={false}
      direction="left"
      duration={0.8}
      paintDrip
      hex="#fff"
      to={to}
    >
      <span className={fontSizeClass}>{text}</span>
      <img
        src={arrow}
        className="pl-4"
        alt="click to know more about Piervincenzo"
      />
    </AniLink>
  );
}
