import styled from "styled-components";

export const StyledWrapper = styled.div`
display:flex;
flex-direction: row;
float: center;
width:50%;
height:50%;
 margin-right:50px;
 margin-left:50px;
padding: 20px 0 45px;

border: 5px solid rgba(22,131,147, 1);


background-color: #fff;
`;
export const StyledSelect = styled.select`
  height: 30px;
  width: 180px;
  border: 0px;
  padding: 0 10px;
  margin: 6px 3px;
  border: 2px solid #168393;
  
`;

export const StyledOption = styled.option`
  &:hover {
    color: #000;
  }
`;
export const StyledInput = styled.input`
padding: 0 15px;
height: 40px;
font-size: 15px;
color: grey;
border: 2px solid #168393;
margin 2px 0;


`;
export const StyledButton= styled.button`
width:80px;
height:50px;
`;

