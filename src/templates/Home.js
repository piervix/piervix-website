import React from "react";

import SEO from "../components/SEO";
import MainLayout from "../components/MainLayout";

export default ({ animate, children }) => {
  return (
    <>
      <SEO bodyClassName="overflow-hidden" />
      <div className="ios-block-scroll">
        <div className={`main-container h-screen ${animate ? "animate" : ""}`}>
          <MainLayout>
            <div>{children}</div>
          </MainLayout>
        </div>
      </div>
    </>
  );
};
