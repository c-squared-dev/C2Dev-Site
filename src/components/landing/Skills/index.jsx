import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Container, Button } from "components/common";
import GlobalDev from "assets/illustrations/globalDev.svg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img
          src={GlobalDev}
          alt="I’m John and I’m a Backend & Devops engineer!"
        />
      </Thumbnail>
      <Details>
        <h1>Global Development</h1>
        <p>
          I work with projects that seek to make the world better for those who
          need it most.
        </p>
        <p>
          I'm strongly interested in education, the environment, food security
          and global health issues
        </p>
        {/* <Button as={AnchorLink} href="#contact">
          Hire me
        </Button> */}
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
