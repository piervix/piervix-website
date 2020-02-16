// Add sitemeta and SEO stuff here
import React from "react";
import { Helmet } from "react-helmet";

// import { graphql, useStaticQuery } from "gatsby";

// import gatsbyIcon from "../assets/gatsby-icon.png";

// const SiteMetadata = ({ pathname, locale }) => {
//   const {
//     site: {
//       siteMetadata: { siteUrl, title, twitter },
//     },
//   } = useStaticQuery(graphql`
//     query SiteMetadata {
//       site {
//         siteMetadata {
//           siteUrl
//           title
//           twitter
//         }
//       }
//     }
//   `);

export default function SiteMetadata({ bodyClassName }) {
  return (
    <Helmet defer={false} defaultTitle={"title"} titleTemplate={"%s | {title}"}>
      {/* <html lang={locale} />
      <link rel="canonical" href={`${siteUrl}${pathname}`} /> */}
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700|Titillium+Web:300,400,400i,600,700&display=swap"
        rel="stylesheet"
      />
      {/* <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={`${siteUrl}${gatsbyIcon}`} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} /> */}
      <body className={bodyClassName} />
    </Helmet>
  );
}
