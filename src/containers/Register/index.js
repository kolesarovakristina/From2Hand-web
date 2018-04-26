import React from "react";
import FormInput from "../../components/FormInput";

import {
  StyledWrapper,
  StyledInputWrapper,
  StyledH1
} from "../../components/FormInput/styles";

const RegisterForm = () => (
  <form>
    <StyledWrapper>
      <StyledInputWrapper>
        <StyledH1>Sign Up</StyledH1>
        <FormInput type="text" label="" placeholder="Username" />
        <FormInput type="text" label="" placeholder="Email" />
        <FormInput type="text" label="" placeholder="Phone number" />
        <FormInput type="text" label="" placeholder="City" />
        <FormInput type="text" label="" placeholder="Password" />
        <FormInput type="text" label="" placeholder="Confirm password" />
      </StyledInputWrapper>
    </StyledWrapper>
  </form>
);

export default RegisterForm;
