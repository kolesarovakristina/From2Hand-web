import React from "react";
import PropTypes from "prop-types";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";

import { ImageWrapper, StyledImage, InfoDetailsInput, StyledHeader, InputHeader, UserInfoWrapper, UserDetails, StyledButton, BorderWrapper, ChangePassword } from "./styles";

const UserInfo = props => (
    <UserInfoWrapper>
        {/* <Link to="#" activeStyle={{ color: 'red' }}>Change Password</Link>
        <Link to="#" activeStyle={{ color: 'red' }}>My Adverts</Link> */}
        <StyledButton >{props.firstName + " " + props.lastName}</StyledButton>
        <StyledButton>Change Password</StyledButton>
        <StyledButton >My Adverts</StyledButton>
        <BorderWrapper>
            <StyledHeader></StyledHeader>
            <ImageWrapper>
                <StyledImage src={avatar} />
            </ImageWrapper>

            <UserDetails>
                <InputHeader>E-mail address: </InputHeader>
                <InfoDetailsInput value={props.email} />
                <InputHeader>Telepone Number: </InputHeader>
                <InfoDetailsInput value={props.phoneNumber} />
            </UserDetails>
        </BorderWrapper>
    </UserInfoWrapper>
)

export default UserInfo;
