import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledMainHeader = styled.div`
  padding: 0 5%;
  height: 100px;
  background-color: rgb(22, 131, 147);
  color: rgb(230, 230, 230);
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  height: 100px;
  line-height: 100px;
  positon: relative;
  float: right;
  font-weight: bold;
  padding: 0 10px;
  text-transform: uppercase;
  font-size: 19px;
  transition: all .2s ease-in-out;
  &:hover{
    text-decoration: none;
    color: rgba(255,255,255, .5);
  }
`;

export const StyledHeaderLogo = styled.img`
  height: 75px;
  padding-top: 25px;
  positon: relative;
  float: left;
`;

export const StyledButton = styled.div`
      cursor: pointer;
      color: #fff;
      text-decoration: none;
      height: 100px;
      line-height: 100px;
      positon: relative;
      float: right;
      font-weight: bold;
      padding: 0 10px;
      text-transform: uppercase;
      font-size: 19px;
      transition: all .2s ease-in-out;
      &:hover{
        text-decoration: none;
        color: rgba(255,255,255, .5);
      }
`;

export const StyledImage = styled.img`
  cursor: pointer;
  height: 40px;
  positon: relative;
  float: right;
  margin: 30px 10px;
`;

// export const NewHeaderContent = styled.div`
//   ${props =>
//     props.isExpanded === true &&
//     css`
//       display: block;
//       color: palevioletred;
//     `} ${props =>
//     props.isExpanded === false &&
//     css`
//       display: none;
//       color: palevioletred;
//     `};
// `;
