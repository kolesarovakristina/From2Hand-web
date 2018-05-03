import React from "react";
import FormInput from "../../components/FormInput";
import {
  StyledWrapper,
  StyledInputWrapper,
  StyledButton,
  StyledImage,
  Or,
  RegisterWrapper
} from "../../components/FormInput/styles";
import logo from "../../assets/from2handLogin.png";

class RegisterForm extends React.Component {
  state = {
    username: "",
    email: "",
    phonenumber: "",
    city: "",
    password: "",
    confirmpassword: ""
  };
  handleUserName = e => {
    console.log(e.target.value);
    this.setState({ username: e.target.value });
  };
  handleEmail = e => {
    console.log(e.target.value);
    this.setState({ email: e.target.value });
  };
  handlePhoneNumber = e => {
    console.log(e.target.value);
    this.setState({ phonenumber: e.target.value });
  };
  handleCity = e => {
    console.log(e.target.value);
    this.setState({ city: e.target.value });
  };
  handlePassword = e => {
    console.log(e.target.value);
    this.setState({ password: e.target.value });
  };
  handleConfirmPassword = e => {
    console.log(e.target.value);
    this.setState({ confirmpassword: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("sending", this.state.username);
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("sending", this.state.confirmpassword);
  };

  render() {
    return (
      <RegisterWrapper>
        <StyledImage src={logo}/>
        <FormInput type="text" label="" placeholder="Username" value={this.state.username} changeState={this.handleUserName} />
        <FormInput type="text" label="" placeholder="Email" />
        <FormInput type="text" label="" placeholder="Phone number" />
        <FormInput type="text" label="" placeholder="City" />
        <FormInput type="text" label="" placeholder="Password" />
        <FormInput type="text" label="" placeholder="Confirm password" />
        <StyledButton>Sent</StyledButton>
        <Or>or</Or>
        <StyledButton>Reset</StyledButton>
      </RegisterWrapper>
    );
  }
}

export default RegisterForm;
