import styled from "styled-components";

export const StyledWrapper = styled.div`
    width:20%;
    background-color: rgba(230, 230, 230, 1);
    border-radius: 3px;
    padding-bottom: 12px;
    height: calc(100%);
    position: relative;
    float: left;
`;

export const NavCategory = styled.div `
    color: rgb(75,75,75);
    font-weight: bold;
    padding-left: 30px;
    height: 35px;
    line-height:35px;
    font-size: 15px;
    leter-spacing: .5px;
    display: inline-block;
    cursor: pointer;
    text-align: left;
    width: calc(100%);
    transition: all .1s ease-in-out;
        &:hover{
            background-color: rgb(130,130,130);
            color: #fff;
        }

`;

export const NavHeader = styled.div `
    text-transform: uppercase;
    font-weight: bold;
    background-color: rgb(130,130,130);
    color: #fff;
    letter-spacing: .5px;
    width: calc(100%);
    padding: 20px 0 20px 30px;
    margin-bottom: 12px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
`;
