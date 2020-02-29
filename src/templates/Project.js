import React from "react";

export default function Project({ data }) {
  console.log(data);
  return <div>{JSON.stringify(data)}</div>;
}

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      name
    }
  }
`;
