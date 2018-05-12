import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const StyledWrapper = styled.div`
width:56%;
margin: 50px 22% 0;
display: inline-block;
transition: all .2s ease-in-out;

`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    display: inline-block;
    text-align: center;
    color: #fff;
    width: 33.33%;
    border: 0;
    // padding: 20px 0;
    height: 65px;
    line-height: 65px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 19px;
    letter-spacing: 2px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    cursor: pointer;
    background-color: rgba(22,131,147, .35);
    position: relative;
    top:4px;
    transition: all .2s ease-in-out;
`;