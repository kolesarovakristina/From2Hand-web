import React from "react";
import { StyledFooter, StyledText } from "./styles";
import PropTypes from "prop-types";

const Footer = props => (
  <StyledFooter className ="footer">
      <StyledText>{props.text}</StyledText>
  </StyledFooter>
);
export default Footer;
