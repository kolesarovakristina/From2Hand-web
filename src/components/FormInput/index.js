import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./styles";

const FormInput = props => (
  <StyledInput
    type={props.type}
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.changeState}
  />
);
export default FormInput;
