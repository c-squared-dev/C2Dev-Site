import React from "react";
import { Link } from "gatsby";
import { Container } from "components/common";
import Logo from "assets/c2dev/horizontal.svg";
import NavbarLinks from "../NavbarLinks";
import { Wrapper } from "./styles";

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">
      <img src={Logo} style={{ height: 30 }} />
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
