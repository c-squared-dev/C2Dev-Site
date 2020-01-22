import React from "react";
import { Container, Card, CardTitle, CardContent } from "components/common";
import { Wrapper, Grid, Item, Content, CoverImg } from "./styles";
import allProjects from 'content/projects.yaml'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const covers = importAll(require.context('assets/covers', false, /\.(png|jpe?g|svg)$/));


export const Projects = () =>
  (
    <Wrapper as={Container} id="projects">
      <h1>Featured Projects</h1>
      <Grid>
        {allProjects.map(p => (
          <Item
            key={p.path}
            as="a"
            href={p.external}
            target="_blank"
            rel="nofollow"
          >
            <Card>
              <CardTitle>{p.title}</CardTitle>
              <CoverImg src={covers[p.cover]} />
              <CardContent>{p.short_description}</CardContent>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );

