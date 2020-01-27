import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import Chris_1 from "assets/illustrations/chris-1.svg";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h2>I’m Chris and I'm a full stack developer</h2>
        <Button as={AnchorLink} href="#contact">
          Get in touch
        </Button>
      </Details>
      <Thumbnail>
        <img src={Chris_1} alt="C2Dev Developer Chris" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
