import React from "react";
import PropTypes from "prop-types";

const FormInput = props => (
  <div>
    <input
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
    />
  </div>

  // <StyledWrapper>
  //   <StyledInputWrapper>
  //     <StyledH1>Sign Up</StyledH1>

  //     <input type={props.type} value={props.value} placeholder="UserName" />
  //     <input type={props.type} value={props.value} placeholder="Email" />
  //     <input type={props.type} value={props.value} placeholder="Phone Number" />
  //     <input type={props.type} value={props.value} placeholder="City" />
  //     <input type={props.type} value={props.value} placeholder="Password" />
  //     <input
  //       type={props.type}
  //       value={props.value}
  //       placeholder="Confirm Password"
  //     />

  //     <span>{props.errorMessage}</span>
  //     <input type="button" value="Sign Up" />
  //   </StyledInputWrapper>
  // </StyledWrapper>
);
export default FormInput;
