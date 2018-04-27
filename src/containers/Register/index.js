import React from "react";
import FormInput from "../../components/FormInput";

import {
  StyledWrapper,
  StyledInputWrapper,
  StyledH1
} from "../../components/FormInput/styles";

class RegisterForm extends React.Component {
  state ={
    username: "" ,
    email:"",
    phonenumber:"",
    city:"",
    password:"",
    confirmpassword:""

  }  
handleUserName = (e) =>{
  console.log(e.target.value);
    this.setState({username:e.target.value})
} 
handleEmail = (e) =>{
  this.setState({email:e.target.value})
} //to do
handleSubmit = (e) =>{
  e.preventDefault();
  console.log("odosielam",this.state.username);
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        <StyledWrapper>
          <StyledInputWrapper>
            <StyledH1>Sign Up</StyledH1>
            <FormInput type="text" label="" placeholder="Username" value={this.state.username} changeState={this.handleUserName} />
            <FormInput type="text" label="" placeholder="Email" />
            <FormInput type="text" label="" placeholder="Phone number" />
            <FormInput type="text" label="" placeholder="City" />
            <FormInput type="text" label="" placeholder="Password" />
            <FormInput type="text" label="" placeholder="Confirm password" />
            <button type="submit">submit</button>
          </StyledInputWrapper>
        </StyledWrapper>
      </form>
    );
  }
}

export default RegisterForm;
