import React from "react";
import { withRouter } from "react-router";
import { StyledWrapper, StyledTitle, StyledButton, StyledInput } from "./styles";

const FirstPage = props => (

    <StyledWrapper>
        <form onSubmit={props.toPage2}>
            <StyledTitle>Tell us what you're selling</StyledTitle>
            <StyledInput minLength={10} required placeholder='Enter a title of your advert' onChange={props.getValueFromTitle}/>
            <StyledButton type='submit' >Get Started</StyledButton>
        </form>
    </StyledWrapper>
)

export default withRouter(FirstPage);
