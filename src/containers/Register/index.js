import React from "react";
import FormInput from "../../components/FormInput";
import {
  StyledButton,
  StyledImage,
  Or,
  RegisterWrapper
} from "../../components/FormInput/styles";
import logo from "../../assets/from2handLogin.png";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { CheckboxWrapper, CheckInput, CheckSpan } from "./styles";
import ReactTooltip from 'react-tooltip';

class RegisterForm extends React.Component {

  state = {
    username: "",
    email: "",
    phonenumber: "",
    city: "",
    password: "",
    confirmpassword: "",
    checkbox: false
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

    try {
      const response = await axios({
        method: "post",
        url: "/user",

        data: form,
        config: { headers: { "Content-Type": "application/json" } }
      });
      alert("You have successfully registered.");
      this.props.history.push("/login");
    } catch (err) {
      console.log(err);
      alert("Something went wrong. Try again.");
      window.location.reload();
    }
  };

  handleCheckinput = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({checkbox:value});
  }

  render() {
    if(this.state.checkbox === true){
      return (
        <RegisterWrapper>
        <Link to="/">
          <StyledImage src={logo} />
        </Link>
        <form
          onSubmit={this.onSubmit}
          name="contactform"
          className="contactform"
          >
          <fieldset>
            <FormInput
              
              ref="name"
              type="text"
              placeholder="Username"
              value={this.state.username}
              changeState={this.handleUserName}
              />

            <FormInput
             
              refs="email"
              type="text"
              placeholder="Email"
              value={this.state.email}
              changeState={this.handleEmail}
              />
            <FormInput
            
              type="number"
              label=""
              placeholder="Phone number"
              value={this.state.phonenumber}
              changeState={this.handlePhoneNumber}
              />
            <FormInput
              required minLength={3}
              maxLength={20}
              type="text"
              placeholder="City"
              value={this.state.city}
              changeState={this.handleCity}
              />
            <FormInput
            
              type="password"
              placeholder="password"
              value={this.state.password}
              changeState={this.handlePassword}
              />
            <CheckboxWrapper>
                <CheckInput type="checkbox" onClick={this.handleCheckinput}/>
                <CheckSpan>I agree to the <Link to='/dashboard/privacy' style={{color: 'rgb(22, 131, 147)', fontWeight:'bold'}}>terms of service</Link></CheckSpan>
            </CheckboxWrapper>
          </fieldset>
          <StyledButton className="paddingTop" type="submit">
            Send
          </StyledButton>
        </form>
      </RegisterWrapper>
    );
  }
  return (
    <RegisterWrapper>
    <Link to="/">
      <StyledImage src={logo} />
    </Link>
    <form
      onSubmit={this.onSubmit}
      name="contactform"
      className="contactform"
      >
        <FormInput
         required minLength={3}
         maxLength={20}
         type="text"
         onSubmit={this.onSubmit}
         placeholder="Username"
         value={this.state.username}
         changeState={this.handleUserName}
        />

        <FormInput
          required minLength={3}
          maxLength={20}
          type="text"
          placeholder="Email"
          onSubmit={this.onSubmit}
          value={this.state.email}
          changeState={this.handleEmail}
        />
       
        <FormInput
          required minLength={3}
          maxLength={20}
          type="number"
          placeholder="Phone number"
          onSubmit={this.onSubmit}
          value={this.state.phonenumber}
          changeState={this.handlePhoneNumber}
        />

        <FormInput
          required minLength={3}
          maxLength={20}
          type="text"
          placeholder="City"
          onSubmit={this.onSubmit}
          value={this.state.city}
          changeState={this.handleCity}
        />

        <FormInput
          required minLength={3}
          maxLength={20}
          type="password"
          placeholder="password"
          value={this.state.password}
          changeState={this.handlePassword}
        />

        <CheckboxWrapper>
          <CheckInput type="checkbox" onClick={this.handleCheckinput}/>
          <CheckSpan>I agree to the <Link to='/dashboard/privacy' style={{color: 'rgb(22, 131, 147)', fontWeight:'bold'}}>terms of service</Link></CheckSpan>
        </CheckboxWrapper>
        <div data-tip data-for='sendButton' >
          <StyledButton disabled className="paddingTop" type="submit">Send</StyledButton>
        </div>
        <ReactTooltip id='sendButton' effect='solid' place='bottom' type='dark' >
          <span>Please indicate that you have read and agree to the terms of service.</span>
        </ReactTooltip>
    </form>
  </RegisterWrapper>
);
  }
}

export default RegisterForm;
