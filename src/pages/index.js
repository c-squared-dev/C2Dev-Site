import React from "react";
import { Layout, SEO } from "components/common";
import { Intro, Skills, Contact, Projects, About } from "components/landing";

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <About />
    <Projects />
    <Contact />
  </Layout>
);
