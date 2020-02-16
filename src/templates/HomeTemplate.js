import React from "react";

import SiteMetadata from "../components/SiteMetadata";
import Header from "../components/Header";

export default ({ children }) => (
  <>
    <SiteMetadata bodyClassName="overflow-hidden" />
    <div className="ios-block-scroll">
      <div className="main-container h-screen">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  </>
);
