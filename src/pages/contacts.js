import React from "react";

import MainLayout from "../components/MainLayout";
import SEO from "../components/SEO";

const ContactPage = () => {
  return (
    <MainLayout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a href="https://twitter.com/@piervix" target="_blank">
          @piervix
        </a>{" "}
        on Twitter!
      </p>
    </MainLayout>
  );
};

export default ContactPage;
