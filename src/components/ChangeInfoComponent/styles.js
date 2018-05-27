import styled from "styled-components";

export const StyledWrapper = styled.div`
    width: calc(100%);
    // margin: 0 20%;
    padding: 20px 0 45px;
    display: inline-block;
    border: 5px solid rgba(22,131,147, 1);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    transition: all .2s ease-in-out;
    background-color: #fff;
    `;
    
    export const StyledHeader = styled.div`
    color: rgb(22,131,147);
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    min-width: calc(40%);
    margin: 0 30%;
    padding: 25px 0 3px;
    `;
    
    export const StyledInput = styled.input`
min-width: calc(40%);
margin: 0 30%;
border: 1px solid rgb(22,131,147);
padding: 10px 15px;
font-size: 15px;
outline: 0;
&:focus{
    border-bottom: 2px solid #168393;
}
    
`;

export const StyledButton = styled.button`
min-width: calc(40% + 2px);
display: inline-block;
margin: 0 30%;
height: 45px;
font-size: 17px;
border: 1px solid rgb(22, 131, 147);
background-color: rgb(22, 131, 147);
color: #fff;
text-transform: uppercase;
font-weight: bold;
letter-spacing: 1px;
margin-top: 25px;
cursor: pointer;
transition: all .15s ease-in-out;
  &:hover {
    background-color: #fff;
    color: rgb(22, 131, 147);
  }
`;