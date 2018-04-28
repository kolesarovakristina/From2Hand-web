import React from "react";
import FormInput from "../../components/FormInput";

import {
  StyledWrapper,
  StyledInputWrapper,
  StyledH1
} from "../../components/FormInput/styles";

class LogInForm extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleUserName = e => {
    console.log(e.target.value);
    this.setState({ username: e.target.value });
  };
  handlePassword = e => {
    console.log(e.target.value);
    this.setState({ password: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("sending", this.state.username);
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("sending", this.state.password);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <StyledWrapper>
          <StyledInputWrapper>
            <StyledH1>Log In</StyledH1>
            <FormInput
              type="text"
              label=""
              placeholder="Username"
              value={this.state.username}
              changeState={this.handleUserName}
            />
            <FormInput
              type="password"
              label=""
              placeholder="Password"
              value={this.state.password}
              changeState={this.handlePassword}
            />
            <button type="submit">submit</button>
          </StyledInputWrapper>
        </StyledWrapper>
      </form>
    );
  }
}

export default LogInForm;
