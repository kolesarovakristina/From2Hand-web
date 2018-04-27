import Styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = Styled.div`
  background: lightgrey;
  height 350px;
  width 1110px;
  // display: flex;
  //justify-content: right;
  text-align :left;
  border-style: solid;
    border-width: 1px;
    margin-left:10px;
    &:hover{

      transform: scale(1.01);
  }
`;
export const StyledLink = Styled(Link)`

`;
export const StyledTitle = Styled.h1`
  font-size: 15px;
  color: white;
  height: 50px;
  margin 5px;
  padding-top: 17px;
  padding-left:15px;
  background-color: rgb(22,131,147);
`;
export const StyledImg = Styled.img`
  margin-left:10px;
  padding-top: 112px;
  padding-left:120px;
  background:lightblue; 
  display: inline-block;
  float: left;
`;
export const StyledDesc = Styled.span`
  font-size: 12px;
  color: black;
  margin-left:5px;
  `;
export const StyledPrice = Styled.div`
  font-size: 20px;
  font : bold;
  float: right;
  padding-right: 10px;
  padding-top: 35px;
`;
