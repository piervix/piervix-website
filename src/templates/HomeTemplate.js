import React from "react";

import Layout from "../components/Layout";
import Head from "../components/Head";
import Header from "../components/Header";

export default ({ children }) => (
  <Layout>
    <Head bodyClassName="overflow-hidden" />
    <div className="ios-block-scroll">
      <div className="main-container h-screen">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  </Layout>
);
