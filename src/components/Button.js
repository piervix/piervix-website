import React from "react";

import arrow from "../assets/arrow.svg";

export default function Button({ text, fontSizeClass }) {
  return (
    <button
      className={`flex items-stretch btn btn-primary mt-4`}
      disabled={false}
    >
      <span className={fontSizeClass}>{text}</span>
      <img
        src={arrow}
        className="pl-4"
        alt="click to know more about Piervincenzo"
      />
    </button>
  );
}
