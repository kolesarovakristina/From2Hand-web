import React from 'react';
import { StyledWrapper, StyledHeader, StyledInput, StyledButton } from './styles';

const ChangeInfoComponent = props =>(
    <StyledWrapper>
        <StyledHeader>E-mail address:</StyledHeader>
        <StyledInput type='text' placeholder='Enter your new e-mail address'/>
        <StyledHeader>Telephone Number:</StyledHeader>
        <StyledInput type='text' placeholder='Enter your new telephone number'/>
        <StyledHeader>Password:</StyledHeader>
        <StyledInput type='password' placeholder='Enter your new password'/>
        <StyledHeader>Confirm Password:</StyledHeader>
        <StyledInput type='password' placeholder='Confirm your new password'/>
        <StyledButton type='submit'>Confirm</StyledButton>
    </StyledWrapper>
);

export default ChangeInfoComponent;