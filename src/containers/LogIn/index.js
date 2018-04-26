import React from "react";
import FormInput from "../../components/FormInput";

import {
  StyledWrapper,
  StyledInputWrapper,
  StyledH1
} from "../../components/FormInput/styles";

const LogIn = () => (
  <form>
    <StyledWrapper>
      <StyledInputWrapper>
        <StyledH1>Log In</StyledH1>
        <FormInput type="text" label="" placeholder="Username" />
        <FormInput type="text" label="" placeholder="Password" />
      </StyledInputWrapper>
    </StyledWrapper>
  </form>
);

export default LogIn;
