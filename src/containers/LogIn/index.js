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
import axios from "axios";
import base64 from "base-64";

class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
    token: ""
  };

  handleUserNameInput = e => {
    console.log(e.target.value);
    this.setState({ username: e.target.value });
  };

  handleUserPasswordInput = e => {
    console.log(e.target.value);
    this.setState({ password: e.target.value });
  };

  parseTokenAndRedirectUser = () => {
    const token = JSON.parse(window.sessionStorage.getItem("token"));
    const parsedToken = token.data.split(".");
    const role = JSON.parse(base64.decode(parsedToken[1]));
    if (role.sub === "admin") {
      this.props.history.push("/dashboard/admin");
    } else if (role.sub === "user") {
      this.props.history.push("/dashboard/user");
    }
  };

  onSubmit = async event => {
    event.preventDefault();
    const form = new FormData();
    form.append("username", `${this.state.username}`);
    form.append("password", `${this.state.password}`);
    try {
      const response = await axios({
        method: "post",
        url: "/user/login",
        data: form,
        config: { headers: { "Content-Type": "aplication/json" } }
      });
      window.sessionStorage.setItem("token", JSON.stringify(response));
      // this.props.history.push("/dashboard/userprofile/info");
      this.parseTokenAndRedirectUser();
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <StyledWrapper>
        <StyledImage src={Logo} />
        <StyledInputWrapper>
          <form onSubmit={this.onSubmit}>
            <FormInput
              onSubmit={this.onSubmit}
              changeState={this.handleUserNameInput}
              type="text"
              label=""
              placeholder="Enter username"
              value={this.state.username}
            />
            <FormInput
              onSubmit={this.onSubmit}
              changeState={this.handleUserPasswordInput}
              type="password"
              label=""
              placeholder="Enter password"
              value={this.state.password}
            />
            <StyledButton className="login" type="submit">
              Login
            </StyledButton>
            <Or>or</Or>
            <StyledLink to="/user/registration">
              <StyledButton>SIGN UP</StyledButton>
            </StyledLink>
          </form>
        </StyledInputWrapper>
      </StyledWrapper>
    );
  }
}

export default LoginPage;
