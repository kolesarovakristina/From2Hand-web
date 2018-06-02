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
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {}
    };
  }
  
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
    console.log(form);

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
      this.props.history.push("/registration");
    }
  };

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    } else if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    } else if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  handleCheckinput = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value);
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
              maxLength={2}
              ref="name"
              type="text"
              label=""
              onSubmit={this.onSubmit}
              placeholder="Username"
              value={this.state.username}
              changeState={this.handleUserName}
              onChange={this.handleChange.bind(this, "name")}
              value={this.state.fields["name"]}
              />
            <span style={{ color: "red" }}>{this.state.errors["name"]}</span>

            <FormInput
              refs="email"
              type="text"
              label=""
              placeholder="Email"
              onSubmit={this.onSubmit}
              value={this.state.email}
              changeState={this.handleEmail}
              onChange={this.handleChange.bind(this, "email")}
              value={this.state.fields["email"]}
              />
            <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
            <FormInput
              type="number"
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
              type="password"
              label=""
              placeholder="password"
              onSubmit={this.onSubmit}
              value={this.state.password}
              changeState={this.handlePassword}
              />
            <CheckboxWrapper>
                <CheckInput type="checkbox" onClick={this.handleCheckinput}/>
                <CheckSpan>I agree to the <Link to='#' style={{color: 'rgb(22, 131, 147)', fontWeight:'bold'}}>terms of service</Link></CheckSpan>
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
      <fieldset>
        <FormInput
          maxLength={2}
          ref="name"
          type="text"
          label=""
          onSubmit={this.onSubmit}
          placeholder="Username"
          value={this.state.username}
          changeState={this.handleUserName}
          onChange={this.handleChange.bind(this, "name")}
          value={this.state.fields["name"]}
          />
        <span style={{ color: "red" }}>{this.state.errors["name"]}</span>

        <FormInput
          refs="email"
          type="text"
          label=""
          placeholder="Email"
          onSubmit={this.onSubmit}
          value={this.state.email}
          changeState={this.handleEmail}
          onChange={this.handleChange.bind(this, "email")}
          value={this.state.fields["email"]}
          />
        <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
        <FormInput
          type="number"
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
          type="password"
          label=""
          placeholder="password"
          onSubmit={this.onSubmit}
          value={this.state.password}
          changeState={this.handlePassword}
          />
        <CheckboxWrapper>
            <CheckInput type="checkbox" onClick={this.handleCheckinput}/>
            <CheckSpan>I agree to the <Link to='#' style={{color: 'rgb(22, 131, 147)', fontWeight:'bold'}}>terms of service</Link></CheckSpan>
        </CheckboxWrapper>
      </fieldset>
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
