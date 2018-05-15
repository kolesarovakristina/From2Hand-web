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
import "./style.css";
import axios from "axios";
// import { withCookies, Cookies } from 'react-cookie';
import Cookies from "universal-cookie";

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

  onSubmit = async event => {
    event.preventDefault();
    const form = {
      username: this.state.username,
      password: this.state.password,
      confirmpassword: this.state.confirmpassword,
      phonenumber: this.state.phonenumber,
      email: this.state.email,
      city: this.state.city
    };

    var myJSON = JSON.stringify(form);
    console.log(form);

    try {
      const response = await axios({
        method: "post",
        url: "/user",

        data: form,
        config: { headers: { "Content-Type": "application/json" } }
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <RegisterWrapper>
        <StyledImage src={logo} />
        <form onSubmit={this.onSubmit}>
          <FormInput
            type="text"
            label=""
            onSubmit={this.onSubmit}
            placeholder="Username"
            value={this.state.username}
            changeState={this.handleUserName}
          />
          <FormInput
            type="text"
            label=""
            placeholder="Email"
            onSubmit={this.onSubmit}
            value={this.state.email}
            changeState={this.handleEmail}
          />
          <FormInput
            type="text"
            label=""
            placeholder="Phone number"
            onSubmit={this.onSubmit}
            value={this.state.phonenumber}
            changeState={this.handlePhoneNumber}
          />
          <FormInput
            type="text"
            label=""
            placeholder="City"
            onSubmit={this.onSubmit}
            value={this.state.city}
            changeState={this.handleCity}
          />
          <FormInput
            type="text"
            label=""
            placeholder="password"
            onSubmit={this.onSubmit}
            value={this.state.password}
            changeState={this.handlePassword}
          />
          <FormInput
            type="password"
            label=""
            placeholder="Confirm password"
            onSubmit={this.onSubmit}
            value={this.state.confirmpassword}
            changeState={this.handleConfirmPassword}
          />
          <StyledButton className="paddingTop" type="submit">
            Send
          </StyledButton>
          <Or>or</Or>
          <StyledButton>Reset</StyledButton>
        </form>
      </RegisterWrapper>
    );
  }
}

export default RegisterForm;
