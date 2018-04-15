import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import PropTypes from "prop-types";
import FormInput from "../../components/FormGroup/FormInput";
import Button from "../../components/Button";

const RegisterForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        label="Username"
        component={FormInput}
        type="text"
      />
      <Field name="email" label="Email" component={FormInput} type="text" />
      <Field
        name="password"
        label="Password"
        component={FormInput}
        type="password"
      />
      <Field
        name="confirmPassword"
        label="Confirm password"
        component={FormInput}
        type="password"
      />
      <Button type="submit">Odoslat</Button>
      <styledDiv>
        <a href={"/register"} class="active">
          Create user
        </a>
      </styledDiv>
    </form>
  );
};

// create new, "configured" function
export default reduxForm({
  // a unique name for the form
  form: "registerForm"
})(RegisterForm);

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
