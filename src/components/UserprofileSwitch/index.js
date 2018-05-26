import React from "react";
import PropTypes from "prop-types";
import Cookies from "universal-cookie";
import { StyledWrapper, StyledLink, StyledButton } from "./style";

const UserProfile =(props) => (

        <StyledWrapper>

            <StyledLink to="/dashboard/user/info" 
                activeStyle={{background:"rgb(22,131,147)", color:"rgb(255,255,255)", fontSize: 21, fontWeight:"bold"}}>
            {props.username}</StyledLink>
            <StyledLink to="/dashboard/user/changeinfo" 
                activeStyle={{background:"rgb(22,131,147)", color:"rgb(255,255,255)", fontSize: 21, fontWeight:"bold"}}>
            Change Info</StyledLink>
            <StyledLink to="/dashboard/user/myadverts" 
                activeStyle={{background:"rgb(22,131,147)", color:"rgb(255,255,255)", fontSize: 21, fontWeight:"bold"}}>
            My Adverts</StyledLink>

        </StyledWrapper>
    );

export default UserProfile;
