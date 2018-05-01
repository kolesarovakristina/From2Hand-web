import Styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = Styled.div`
  width 100%;
  margin-bottom: 10px;
  transition: all .15s ease-in-out;
  border-radius: 5px;
  &:hover{
    box-shadow: 0 0 9px 2px rgb(175,175,175);
    transform: scale(1.01);
  }
  `;
export const StyledLink = Styled(Link)`
  text-decoration: none;
`;
export const StyledTitle = Styled.div`
  font-size: 18px;
  width: calc(100% - 30px);
  display: inline-block;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 10px 15px;
  background-color: rgb(22,131,147);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  `;
  
export const ImageWrapper = Styled.div`
  height: 150px;
  display: inline-block;
  float: left;
  width: 14%;
  overflow: hidden;
  float: left;
  // border-bottom: 1px solid rgb(22,131,147);
  border-bottom-left-radius: 5px;
`;
export const StyledImg = Styled.img`
  background-color: rgb(220,220,220);
  display: inline-block;
  width:100%;
`;
export const StyledDesc = Styled.div`
  font-size: 15px;
  padding: 15px;
  color: black;
  width: calc(54% - 30px);
  height: calc(150px - 30px);
  display: inline-block;
  float: left;
  background-color: rgb(240,240,240);
  color: rgb(75,75,75);
  // border-bottom: 1px solid rgb(22,131,147);
`;
  export const StyledPrice = Styled.div`
  width: 16%;
  display: inline-block;
  height:calc(150px);
  line-height: 150px;
  float: left;
  text-align: center;
  background-color: rgb(220,220,220);
  color: rgb(75,75,75);
  font-weight: bold;
  // border-bottom: 1px solid rgb(22,131,147);
`;

export const StyledLocation = Styled.div`
  background-color: rgb(200,200,200);
  color: rgb(75,75,75);
  font-weight: bold;
  text-transform: uppercase;
  width: 16%;
  display: inline-block;
  height:calc(150px);
  line-height: 150px;  float: left;
  text-align: center;
  // border-bottom: 1px solid rgb(22,131,147);
  border-bottom-right-radius: 5px;
`;

export const DescWrapper = Styled.div`
  width:100%;
  height:150px;
`;