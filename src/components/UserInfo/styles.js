import styled from "styled-components";
import { style } from "react-toastify";

export const UserInfoWrapper = styled.div`
    width:56%;
    margin: 50px 22 %;
    display: inline-block;
`;
    
    export const StyledImage = styled.img`
    width: 100%;
    margin-bottom: -4.5px;
    border-bottom-left-radius: 5px;
    `;
    
    export const StyledHeader = styled.div`
    width: calc(100%);
    height: 5px;
    display: inline-block;
    background-color: rgb(22,131,147);
    color: #fff;
    font-size: 20px;
    float: left;
    text-transform: uppercase;
    font-weight: bold;
    `;
    
    export const ImageWrapper = styled.div`
    width: 30%;
    float: left;
    `;
    
export const InputHeader = styled.div`
    display: inline-block;
    color: rgb(22,131,147);
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    width: calc(100% - 25px);
    padding: 15px 0 5px 25px;
`;

export const InfoDetailsInput = styled.input`
    display: inline-block;
    width: calc(100% - 50px);
    border-radius: 0;
    padding: 2px 0;
    margin: 0 25px;
    font-size: 17px;
    border-bottom: 2px solid darkgrey;
    margin-bottom: 20px;
`;
    
export const UserDetails = styled.div`
    width: 70%;
    float: left;
    padding: 20px 0;
`;

export const StyledButton = styled.button`
    width: 33.33%;
    border: 0;
    padding: 20px 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 19px;
    letter-spacing: 2px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    cursor: pointer;
    background-color: rgba(22,131,147, .35);
    color: #fff;
    // border-left: 5px solid darkgrey;
    // border-top: 5px solid darkgrey;
    // border-right: 5px solid darkgrey;
    position: relative;
    top:5px;
`;

export const BorderWrapper = styled.div`
    border-bottom: 5px solid rgba(22,131,147, 1);
    border-left: 5px solid rgba(22,131,147, 1);
    border-right: 5px solid rgba(22,131,147, 1);
    display: inline-block;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const ChangePassword = styled.button`

`;