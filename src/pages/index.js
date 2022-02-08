import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="A pic of 2 dogs smiling at the camera"
        src="../images/labby.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
