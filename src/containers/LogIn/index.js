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
import Cookies from "universal-cookie";

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
<<<<<<< HEAD
        config: {
          headers: { "Content-Type": "multipart/form-data" }
        }
      });
      window.sessionStorage.setItem("token", JSON.stringify(response));
=======
        config: { headers: { "Content-Type": "aplication/json" }}
      });

      window.sessionStorage.setItem("token", JSON.stringify(response));
      console.log(response);
>>>>>>> 20e691daf42543d29a532f4253bfcdd7deb94f34

      this.props.history.push("/dashboard/userprofile/info");
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
            <StyledLink to="/register">
              <StyledButton>SIGN UP</StyledButton>
            </StyledLink>
          </form>
        </StyledInputWrapper>
      </StyledWrapper>
    );
  }
}

export default LoginPage;
