import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledMainHeader = styled.div`
  background: grey;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: 100px;
  ${props =>
    props.myProps &&
    css`
      background: blue;
    `};
  ${props =>
    props.primary === false &&
    css`
      color: purple;
    `};
`;

export const StyledLink = styled(Link)`
  background: rgb(167, 167, 215);
  width: 20%;
`;

export const StyledHeaderLogo = styled.img`
  width: 50px;
  height: 50px;
  background: red;
`;

export const NewHeader = styled.div``;

export const NewHeaderContent = styled.div`
  ${props =>
    props.isExpanded === true &&
    css`
      display: block;
      color: palevioletred;
    `} ${props =>
    props.isExpanded === false &&
    css`
      display: none;
      color: palevioletred;
    `};
`;
