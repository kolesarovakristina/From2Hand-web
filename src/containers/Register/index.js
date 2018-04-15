import PropTypes from "prop-types";
import { SubmissionError } from "redux-form/immutable";
import React from "react";
import RegisterForm from "./form";
import { StyledH1, StyledWrapper } from "./styles";
import register from "../../services/Registerservice";
import { isRequired, isEmail, isLength, validatePassword } from "../../services/validation";

class Register extends React.Component {
  handleSubmit = async (values) => {
    const {
      username, email, password, confirmPassword,
    } = values.toJS();
    const errors = {};

    if (isRequired(username)) {
      errors.username = "Username is required";
    } else if (isLength(username, 2)) {
      errors.username = "Username must be at least 3 characters long";
    }
    if (isRequired(email)) {
      errors.email = "Email is required";
    } else if (isEmail(email)) {
      errors.email = "Wrong email format";
    }
    if (isRequired(password)) {
      errors.password = "Password is required";
    } else if (isLength(password, 3)) {
      errors.password = "Password must be at least 4 characters long";
    }
    if (isRequired(confirmPassword)) {
      errors.confirmPassword = "Password is required";
    } else if (isLength(confirmPassword, 3)) {
      errors.confirmPassword = "Confirm Password must be at least 4 characters long";
    } else if (!validatePassword(password, confirmPassword)) {
      errors.confirmPassword = "Password and Confirm Password must match";
    }

    if (Object.keys(errors).length > 0) {
      throw new SubmissionError(errors);
    } else {
      try {
        const response = await register(username, email, password);
        console.log(response);
      } catch (error) {
        console.log(errors);
      }
    }
  };
  render() {
    return (
      <StyledWrapper>
        <StyledH1>Register</StyledH1>
        <RegisterForm onSubmit={this.handleSubmit} />
      </StyledWrapper>
    );
  }
}

Register.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Register;
