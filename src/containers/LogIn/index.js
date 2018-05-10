import React from "react";
import FormInput from "../../components/FormInput";
import Logo from "../../assets/from2handLogin.png";
import "./style.css";
import {
  StyledWrapper,
  StyledInputWrapper,
  StyledImage,
  StyledButton,
  Or
} from "../../components/FormInput/styles";

const LogIn = () => (
    <StyledWrapper>
      <StyledImage src = {Logo} />
      <StyledInputWrapper>
        <FormInput type="text" label="" placeholder="Enter username" />
        <FormInput type="password" label="" placeholder="Enter password" />
        <StyledButton className="login">Login</StyledButton>
        <Or>or</Or>
        <StyledButton>SIGN UP</StyledButton>
      </StyledInputWrapper>
    </StyledWrapper>
);


export default LogIn;
