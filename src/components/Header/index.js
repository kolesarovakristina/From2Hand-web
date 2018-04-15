import React from "react";
import { withRouter } from "react-router";
import { StyledHeaderWrapper, StyledMenuWrapper, StyledNavLink } from "./styles";

const activeStyle = { color: "#253993" };
const Header = () => (
  <StyledHeaderWrapper>
    <StyledMenuWrapper>
      <StyledNavLink exact to="/dashboard/charts" activeStyle={activeStyle}>
        tab1
      </StyledNavLink>
      <StyledNavLink to="/dashboard/about" activeStyle={activeStyle}>
        tab2
      </StyledNavLink>
    </StyledMenuWrapper>
  </StyledHeaderWrapper>
);
export default withRouter(Header);
