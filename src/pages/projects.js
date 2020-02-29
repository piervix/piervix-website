import React from "react";
import { Link } from "gatsby";

import MainLayout from "../components/MainLayout";
import SEO from "../components/SEO";

const ProjectPage = () => {
  return (
    <MainLayout>
      <SEO title="Projects" />
      <h1>Projects</h1>
      <p>Projects will be here.</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </MainLayout>
  );
};

export default ProjectPage;
