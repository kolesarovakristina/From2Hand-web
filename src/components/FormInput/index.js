import React from "react";
import PropTypes from "prop-types";
import { StyledInputLink } from "./styles";

const FormInput = props => (
  <div>
    <StyledInputLink
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.changeState}
    />
  </div>
);
export default FormInput;
