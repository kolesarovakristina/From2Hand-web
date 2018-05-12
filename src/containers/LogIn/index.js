import React from "react";
import LogInForm from "./form";
import axios from "axios";
// import { withCookies, Cookies } from 'react-cookie';
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
        config: { headers: { "Content-Type": "multipart/form-data" } }
      });
      const cookies = new Cookies();

      cookies.set("token", response, { path: "/" });
      // console.log(cookies.get('token'));
      console.log("response", response);
      this.props.history.push("/dashboard/userprofile/info");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <LogInForm
        onSubmit={this.onSubmit}
        changeName={this.handleUserNameInput}
        changePassword={this.handleUserPasswordInput}
        userNameValue={this.state.username}
        userPasswordValue={this.state.password}
      />
    );
  }
}

export default LoginPage;
