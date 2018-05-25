import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledWrapper = styled.div`
  // width: 67%;
  // margin: 0 auto;
  // padding: 50px 0 120px;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

export const StyledRightMenu = styled.div`
  display: flex;
  flex-direction: column;
  width:25%
  margin-right:5%;
`;
export const StyledContent = styled.div`
  width: 65%;
`;
export const StyledLink = styled(NavLink)``;

// export const StyledLink = styled(NavLink)`
//   text-decoration: none;
//   display: inline-block;
//   text-align: center;
//   color: #fff;
//   width: 33.33%;
//   border: 0;
//   height: 65px;
//   line-height: 70px;
//   text-transform: uppercase;
//   font-size: 19px;
//   letter-spacing: 1px;
//   border-top-right-radius: 30px;
//   border-top-left-radius: 30px;
//   cursor: pointer;
//   position: relative;
//   background-color: rgb(230, 230, 230);
//   color: #828282;
//   transition: all 0.2s ease-in-out;
// `;
