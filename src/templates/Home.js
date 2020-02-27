import React from "react";

import Head from "../components/Head";
import Layout from "../components/Layout";

export default ({ animate, children }) => {
  return (
    <>
      <Head bodyClassName="overflow-hidden" />
      <div className="ios-block-scroll">
        <div className={`main-container h-screen ${animate ? "animate" : ""}`}>
          <Layout>
            <div>{children}</div>
          </Layout>
        </div>
      </div>
    </>
  );
};
