import React from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash/uniqueId";
import { StyledFormLabel, StyledFormGroupWrapper, StyledInput } from "./styles";
import Text from "../Text/styles";

const FormInput = ({
  placeholder, readOnly, input, label, type, meta: { error },
}) => (
  <StyledFormGroupWrapper controlId={uniqueId(`${input.name}`)}>
    <StyledFormLabel>{label}</StyledFormLabel>
    <StyledInput {...input} type={type} placeholder={placeholder} readOnly={readOnly} />
    {error && <Text error>{error}</Text>}
  </StyledFormGroupWrapper>
);

FormInput.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired, // eslint-disable-line
  type: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
};
FormInput.defaultProps = {
  readOnly: false,
  placeholder: "",
};

export default FormInput;
