import React from "react";
import Button from "../components/Button";

export default function HeroBanner() {
  return (
    <div className="container spacing">
      <h4 className="font-mono whitespace-no-wrap text-1_5vh text-center sm:text-left sm:text-2vh font-normal text-gray-600 pb-1 fade-in">
        user experience designer | creative technologist
      </h4>
      <h3 className="welcome-message text-3vh text-center sm:text-left sm:text-5vh">
        <span className="row whitespace-no-wrap">
          I spend my time turning{" "}
          <i className="underlined underlined--offset">ideas</i>
        </span>
        <br />
        <span className="row whitespace-no-wrap">
          into desirable{" "}
          <i className="underlined underlined--offset inline">experiences</i>{" "}
          and <i className="underlined underlined--offset ">products</i>
        </span>
        <br />
        <span className="row whitespace-no-wrap">
          for <i className="underlined underlined--offset">startups</i> and{" "}
          <i className="underlined underlined--offset">brands</i>.
        </span>
      </h3>
      <div className="flex justify-center sm:justify-between fade-in">
        <Button
          to="/about"
          text="more about me"
          fontSizeClass="text-1vh xs:text-1_5vh sm:text-1_5vh"
        />
      </div>
    </div>
  );
}
