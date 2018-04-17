import React from "react";
import PropTypes from "prop-types";
import StyledText from "./styles";

const Text = props => <StyledText {...props}>{props.children}</StyledText>;

Text.propTypes = {
  children: PropTypes.node,
  warning: PropTypes.bool,
  error: PropTypes.bool,
};
Text.defaultProps = {
  children: "default",
  warning: false,
  error: false,
};

export default Text;
