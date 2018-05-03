import React from "react";
import PropTypes from "prop-types";
import { StyledInputLink } from "./styles";

const FormInput = props => (
    <StyledInputLink
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.changeState}
    />
);
export default FormInput;
