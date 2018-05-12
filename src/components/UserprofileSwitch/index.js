import React from "react";
import PropTypes from "prop-types";
import Cookies from "universal-cookie";
import { StyledWrapper, StyledLink, StyledButton } from "./style";

const UserProfile =(props) => (

        <StyledWrapper>

            <StyledLink to="/dashboard/userprofile/info" activeStyle={{background:"rgb(22,131,147)", fontSize: 21}}>{props.firstname + ' ' + props.lastname}</StyledLink>
            <StyledLink to="/dashboard/userprofile/changeinfo" activeStyle={{background:"rgb(22,131,147)", fontSize: 21}}>Change Info</StyledLink>
            <StyledLink to="/dashboard/userprofile/myadverts" activeStyle={{background:"rgb(22,131,147)", fontSize: 21}}>My Adverts</StyledLink>

        </StyledWrapper>
    );

export default UserProfile;
