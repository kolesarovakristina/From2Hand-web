import React from "react";
import PropTypes from "prop-types";
import Cookies from "universal-cookie";
import { StyledWrapper, StyledLink, StyledButton } from "./style";

const UserProfile =(props) => (

        <StyledWrapper>

            <StyledLink to="/dashboard/userprofile/info" activeStyle={{ background:'rgb(22,131,147)' }}>{props.firstname + ' ' + props.lastname}</StyledLink>
            <StyledLink to="/dashboard/userprofile/changeinfo" activeStyle={{background:"rgb(22,131,147)"}}>Change Info</StyledLink>
            <StyledLink to="/dashboard/userprofile/myadverts" activeStyle={{background:"rgb(22,131,147)"}}>My Adverts</StyledLink>

        </StyledWrapper>
    );

export default UserProfile;
