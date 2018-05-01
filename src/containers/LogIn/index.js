import React from "react";
import FormInput from "../../components/FormInput";
import Logo from "../../assets/from2hand.png";
import {
  StyledWrapper,
  StyledInputWrapper,
  StyledImage
} from "../../components/FormInput/styles";

const LogIn = () => (
    <StyledWrapper>
      <StyledInputWrapper>
        <StyledImage src = {Logo} />
        <FormInput type="text" label="" placeholder="Enter username" />
        <FormInput type="text" label="" placeholder="Enter password" />
      </StyledInputWrapper>
    </StyledWrapper>
);

export default LogIn;
