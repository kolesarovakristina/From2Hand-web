import React from "react";
import PropTypes from "prop-types";
import StyledTitle from "./styles";

const Title = props => <StyledTitle {...props}>{props.children}</StyledTitle>;

Title.propTypes = {
  children: PropTypes.node,
};
Title.defaultProps = {
  children: "default",
};

export default Title;
