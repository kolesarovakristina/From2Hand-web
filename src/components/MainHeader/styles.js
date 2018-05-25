import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledMainHeader = styled.div`
  padding: 0 5%;
  width: calc(100% - 10%);
  height: 100px;
  background-color: rgb(22, 131, 147);
  color: rgb(230, 230, 230);
`;
export const StyledCategory = styled(Link)`
  ${props =>
    props.isAdmin === true &&
    css`
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
    `} ${props =>
    props.isAdmin === false &&
    css`
      display: none;
      color: palevioletred;
    `};
`;

export const StyledLogOut = styled(Link)`
  text-decoration: none;
  height: 100px;
  line-height: 100px;
  positon: relative;
  float: right;
  font-weight: bold;
  padding: 0 10px;
  text-transform: uppercase;
  font-size: 19px;
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
`;

export const StyledHeaderLogo = styled.img`
  height: 50px;
  padding: 0 10px;
  padding-top: 25px;
  positon: relative;
  float: left;
`;

export const NewHeader = styled.div``;

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
