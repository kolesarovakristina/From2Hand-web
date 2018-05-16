import React from "react";
import { withRouter } from "react-router";
import { StyledWrapper, StyledTitle, StyledButton, StyledInput } from "./styles";

const FirstPage = props => (

    <StyledWrapper>
        <StyledTitle>Tell us what you're selling</StyledTitle>
        <StyledInput placeholder='Enter a title of your advert' />
        <StyledButton onClick={props.toPage2}>Get Started</StyledButton>
    </StyledWrapper>
)

export default withRouter(FirstPage);
