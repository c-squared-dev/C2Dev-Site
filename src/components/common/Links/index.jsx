import React from "react";
import styled from "styled-components";

import Github_icon from "assets/icons/github.svg";
import Web_icon from "assets/icons/web.svg";
import Ios_icon from "assets/icons/ios.svg";
import Android_icon from "assets/icons/android.svg";

const LinkIcon = styled.img`
  width: 32px;
  height: 32px;
  margin: 0;
  opacity: 0.25;
  filter: grayscale(1);
  :hover {
    opacity: 1;
    filter: grayscale(0);
  }
`;

const icons = {
  github: Github_icon,
  android: Android_icon,
  ios: Ios_icon,
  web: Web_icon,
};

export const ProjectLinks = ({ links }) => {
  const linkArray = Object.entries(links);
  return linkArray.map(([key, value]) => (
    <a
      href={value}
      key={key}
      target="_blank"
      rel="noopener"
      style={{ marginRight: "10px" }}
    >
      <LinkIcon src={icons[key]} />
    </a>
  ));
};
