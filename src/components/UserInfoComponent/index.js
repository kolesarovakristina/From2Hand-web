import React from "react";
import PropTypes from "prop-types";
import avatar from "../../assets/avatar.png";

import { ImageWrapper, 
        StyledImage, 
        InfoDetails, 
        InputHeader, 
        UserInfoWrapper, 
        UserDetails, 
        ChangePassword } from "./styles";

const UserInfo = (props) => (
    <UserInfoWrapper>
        <ImageWrapper>
            <StyledImage src={avatar} />
        </ImageWrapper>

        <UserDetails>
            <InputHeader>E-mail address: </InputHeader>
            <InfoDetails>{props.email}</InfoDetails>
            <InputHeader>Telephone Number: </InputHeader>
            <InfoDetails>{props.phoneNumber}</InfoDetails>
        </UserDetails>
    </UserInfoWrapper>
)

export default UserInfo;
