import React from "react";
import { Container } from "components/common";
import GlobalDev from "assets/illustrations/globalDev.svg";
import { Wrapper, AboutWrapper, Details, Thumbnail } from "./styles";

export const About = () => (
  <Wrapper id="about">
    <AboutWrapper as={Container}>
      <Thumbnail>
        <img
          src={GlobalDev}
        />
      </Thumbnail>
      <Details>
        <h1>Interests</h1>
        <p>
          I work with projects that seek to make the world better for those who
          need it most.
        </p>
        <p>
          I'm strongly interested in education, the environment, food security
          and global health issues
        </p>
      </Details>
    </AboutWrapper>
  </Wrapper>
);
