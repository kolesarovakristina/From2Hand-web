import styled from "styled-components";

export const StyledWrapper = styled.div`
    width: calc(56% - 10.5px);
    margin: 0 22%;
    display: inline-block;
    border: 5px solid rgba(22,131,147, 1);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    transition: all .2s ease-in-out;
`;

export const StyledHeader = styled.div`
display: inline-block;
color: rgb(22,131,147);
text-transform: uppercase;
font-size: 18px;
font-weight: bold;
letter-spacing: 1px;
width: calc(100% - 25px);
padding: 15px 0 5px 25px;
`;

export const StyledInput = styled.input`
width: 100%;
border: 1px solid rgb(22,131,147);
padding: 10px 15px;
font-size: 15px;
    
`;