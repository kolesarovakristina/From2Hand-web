import styled from "styled-components";
import { style } from "react-toastify";

export const UserInfoWrapper = styled.div`
width: calc(100% - 10px);
    display: inline-block;
    border: 5px solid rgba(22,131,147, 1);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #fff;
`;
    
    export const StyledImage = styled.img`
    width: 100%;
    margin-bottom: -4.5px;
    border-bottom-left-radius: 5px;
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
    padding: 35px 0 5px 25px;
`;

export const InfoDetails = styled.div`
    display: inline-block;
    width: calc(100% - 50px);
    padding: 6px 0 6px;
    margin: 0 25px;
    font-size: 17px;
    border-bottom: 1.5px solid lightgrey;
`;
    
export const UserDetails = styled.div`
    width: 70%;
    float: left;
    padding: 0px 0 30px;
`;