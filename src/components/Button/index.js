import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./styles";

const Button = props => <StyledButton {...props}>{props.children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
};
Button.defaultProps = {
  children: "default",
  primary: false,
  danger: false,
};
export default Button;
