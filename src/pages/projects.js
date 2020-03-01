import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import MainLayout from "../components/MainLayout";
import SEO from "../components/SEO";

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allContentfulProject(sort: { fields: updatedAt, order: DESC }) {
        edges {
          node {
            name
            slug
            images {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);

  console.log(data);

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
