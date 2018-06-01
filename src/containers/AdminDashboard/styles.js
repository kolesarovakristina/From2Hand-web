import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 60px 60px 110px;
  display: inline-block;
`;

export const StyledRightMenu = styled.div`
width: 25%;
text-align: center;
display: inline-block;
float:left;
`;
export const StyledContent = styled.div`
  width: 75%;
  display: inline-block;
`;
export const StyledLink = styled(NavLink)`
background: rgb(230,230,230);
display: block;
width:100%;
color: rgb(80,80,80);
text-decoration: none;
text-transform: uppercase;
font-size: 23px;
transition: all .2s ease-in-out;
padding: 40px 20px;
&:hover{
  text-decoration: none;
  color: rgb(80,80,80);
}
&:focus{
  text-decoration: none;
  color: rgb(80,80,80);
}
`;

export const TableWrapper = styled.div`
  display:inline-block;
  width: 100%;
  padding: 30px;
  background: #fff;
  border: 2px solid rgb(22, 131, 147);
`;
