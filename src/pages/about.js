import React from "react";
import { Link } from "gatsby";

import MainLayout from "../components/MainLayout";
import SEO from "../components/SEO";

const AboutPage = () => {
  return (
    <MainLayout>
      <SEO title="About" />
      <h1>About Me</h1>
      <p>I currently work as Head of UX at Foodracers.</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </MainLayout>
  );
};

export default AboutPage;
