import React from 'react';
import { StyledWrapper, StyledHeader, StyledInput, StyledButton } from './styles';

const ChangeInfoComponent = props =>(
    <StyledWrapper>
        <form onSubmit={props.changeInfo}>
            <StyledHeader>E-mail address:</StyledHeader>
            <StyledInput 
                required
                onChange={props.getEmail}
                type='text' value={props.email}
                maxLength={50} minLength={7}
                placeholder='Enter your new email address'
            />
            <StyledHeader>Telephone Number:</StyledHeader>
            <StyledInput
                required
                onChange={props.getPhoneNumber}
                type='number' value={props.phonenumber}
                placeholder='Enter your new phone number'
            />
            <StyledHeader>Password:</StyledHeader>
            <StyledInput
                required
                onChange={props.getPassword}
                type='password'
                placeholder='Enter your new password'
                maxLength={20}
                minLength={4}
                value={props.password}
            />
            <StyledButton type='submit'>Confirm</StyledButton>
        </form>
    </StyledWrapper>
);

export default ChangeInfoComponent;