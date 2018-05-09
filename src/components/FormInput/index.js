import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./styles";

const FormInput = props => (
 
    <StyledInput
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={(e)=>{ props.changeState(e) }}
    />
  
);
export default FormInput;
