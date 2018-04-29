import React from "react";
import FormInput from "../../components/FormInput";

import {
  StyledWrapper,
  StyledInputWrapper,
  StyledH1
} from "../../components/FormInput/styles";

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
      <form onSubmit={this.handleSubmit}>
        <StyledWrapper>
          <StyledInputWrapper>
            <StyledH1>Sign Up</StyledH1>
            <FormInput
              type="text"
              label=""
              placeholder="Username"
              value={this.state.username}
              changeState={this.handleUserName}
            />
            <FormInput
              type="text"
              label=""
              placeholder="Email"
              value={this.state.email}
              changeState={this.handleEmail}
            />
            <FormInput
              type="text"
              label=""
              placeholder="Phone number"
              value={this.state.phonenumber}
              changeState={this.handlePhoneNumber}
            />
            <FormInput
              type="text"
              label=""
              placeholder="City"
              value={this.state.city}
              changeState={this.handleCity}
            />
            <FormInput
              type="password"
              label=""
              placeholder="Password"
              value={this.state.password}
              changeState={this.handlePassword}
            />
            <FormInput
              type="password"
              label=""
              placeholder="Confirm password"
              value={this.state.confirmpassword}
              changeState={this.handleConfirmPassword}
            />
            <button type="submit">submit</button>
          </StyledInputWrapper>
        </StyledWrapper>
      </form>
    );
  }
}

export default RegisterForm;
