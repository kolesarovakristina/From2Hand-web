import React from "react";
import LogInForm from "./form";

class LoginPage extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleUserNameInput = (e) => {
    console.log(e.target.value);
    this.setState({username: e.target.value});
  }

  handleUserPasswordInput = (e) => {
    console.log(e.target.value);
    this.setState({password: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {username, password} = this.state;
    console.log("Posiela", username, password);
  }

  render(){
    return (
      <LogInForm 
        onSubmit={this.onSubmit} 
        changeName = {this.handleUserNameInput} 
        changePassword = {this.handleUserPasswordInput}
        userNameValue = {this.state.username}
        userPasswordValue = {this.state.password}
        />
    )
  }
}

export default LoginPage;
