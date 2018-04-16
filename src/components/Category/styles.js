import Styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = Styled.div`
display:flex;
flex-wrap: wrap;
flex-direction:row;
justify-content:left;
padding 20px;
`;
export const StyledComponent = Styled.div`
display:flex;
flex-direction:column;
justify-content:center;
padding 20px;
`;
export const StyledTitle = Styled.h1`
color:blue;
font-size:12px;
font-weight:bold;
`;
export const StyledSubCategory = Styled.div`
color:pink;
font-size:10;
font-weight:bold;
margin 20px;
`;
export const StyledLink = Styled(Link)`
width: 20%;
padding 5px;
`;
export const StyledLogo = Styled.img`
  width: 50px;
  height: 50px;
  background: lightgrey;
  padding 5px;
`;
