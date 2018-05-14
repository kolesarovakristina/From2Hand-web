import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const StyledWrapper = styled.div`
    width:100%;
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
    height: 65px;
    line-height: 70px;
    text-transform: uppercase;
    font-size: 19px;
    letter-spacing: 1px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    cursor: pointer;
    position: relative;
    background-color: rgb(230,230,230);
    color: #828282;
    transition: all .2s ease-in-out;
`;