import React from "react";
import { graphql, StaticQuery } from "gatsby";
import {
  Container,
  Card,
  CardTitle,
  CardContent,
  ProjectLinks,
} from "components/common";
import { Wrapper, Grid, Item } from "./styles";
import Img from "gatsby-image";
import allProjects from "content/projects.yaml";

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const covers = importAll(
  require.context("assets/covers", false, /\.(png|jpe?g|svg)$/)
);

export const Projects = () => {
  return (
    <Wrapper as={Container} id="projects">
      <h1>Featured Projects</h1>
      <Grid>
        {allProjects.map((p) => (
          <Item key={p.path}>
            <Card>
              <CardTitle>{p.title}</CardTitle>
              <ImageQuery imgId={p.id} />
              <CardContent>{p.short_description}</CardContent>
              <div style={{ textAlign: "right", padding: "5px" }}>
                <ProjectLinks links={p.links}></ProjectLinks>
              </div>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
export default Projects;

export const ImageQuery = ({ imgId }) => (
  <StaticQuery
    query={graphql`
      query ImageQuery {
        plh: file(relativePath: { eq: "assets/covers/plh.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        aimssec: file(relativePath: { eq: "assets/covers/aimssec.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mpp: file(relativePath: { eq: "assets/covers/my-past-papers.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        onearmy: file(relativePath: { eq: "assets/covers/onearmy.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        picsa: file(relativePath: { eq: "assets/covers/picsa.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sami: file(relativePath: { eq: "assets/covers/sami.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        unhcr: file(relativePath: { eq: "assets/covers/unhcr.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => {
      return (
        <Img
          fluid={data[imgId].childImageSharp.fluid}
          objectFit="contain"
          alt={imgId}
          style={{ height: "200px" }}
          imgStyle={{
            height: "200px",
            objectFit: "contain",
            width: "100%",
            marginBottom: "0",
          }}
        />
      );
    }}
  />
);
