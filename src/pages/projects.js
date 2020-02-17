import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";

const ProjectPage = () => {
  return (
    <Layout>
      <Head title="Projects" />
      <h1>Projects</h1>
      <p>Projects will be her.</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  );
};

export default ProjectPage;
