import React from "react";
import { Container } from "components/common";
import { Wrapper, Flex, Links, Details } from "./styles";
import social from "./social.json";

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{" "}
          <span aria-label="love" role="img">
            💖
          </span>{" "}
          by{" "}
          C2Dev Ltd.
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`follow me on ${name}`}
          >
            <img width="24" src={icon} alt={name} style={{ marginRight: 10 }} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);
