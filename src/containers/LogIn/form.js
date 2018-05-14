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
import { StyledLink } from "../../components/MyAdvert/styles";
  
  const LogInForm =(props) => (
      <StyledWrapper>
        <StyledImage src = {Logo} />
        <StyledInputWrapper>
          <form onSubmit={props.onSubmit}>
            <FormInput changeState = {props.changeName} type="text" label="" placeholder="Enter username" value={props.userNameValue}/>
            <FormInput changeState={props.changePassword} type="password" label="" placeholder="Enter password" value = {props.userPasswordValue}/>
            <StyledButton className="login" type="submit">Login</StyledButton>
            <Or>or</Or>
            <StyledLink to='/register'>
              <StyledButton>SIGN UP</StyledButton>
            </StyledLink>
          </form>
        </StyledInputWrapper>
      </StyledWrapper>
  );

  export default LogInForm;