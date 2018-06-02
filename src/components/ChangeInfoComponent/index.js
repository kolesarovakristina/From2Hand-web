import React from 'react';
import { StyledWrapper, StyledHeader, StyledInput, StyledButton } from './styles';

const ChangeInfoComponent = props =>(
    <StyledWrapper>
        <form onSubmit={props.changeInfo}>
            <StyledHeader>E-mail address:</StyledHeader>
            <StyledInput onChange={props.getEmail} type='text' placeholder='Enter your new e-mail address'/>
            <StyledHeader>Telephone Number:</StyledHeader>
            <StyledInput onChange={props.getPhoneNuber} type='text' placeholder='Enter your new telephone number'/>
            <StyledHeader>Password:</StyledHeader>
            <StyledInput onChange={props.getPassword} type='password' placeholder='Enter your new password'/>
            <StyledButton type='submit'>Confirm</StyledButton>
        </form>
    </StyledWrapper>
);

export default ChangeInfoComponent;