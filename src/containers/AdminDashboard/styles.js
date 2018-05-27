import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;
  padding: 60px;
`;

export const StyledRightMenu = styled.div`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
width: 27%;
margin-right: 5%;
min-height: 100%;
text-align: center;
margin-bottom: 71px;
`;
export const StyledContent = styled.div`
  width: 65%;
`;
export const StyledLink = styled(NavLink)`
min-height: 33%;
line-height: 33vh;
background: rgb(255,255,255);
color: rgb(80,80,80);
text-decoration: none;
text-transform: uppercase;
font-size: 23px;
transition: all .2s ease-in-out;
`;

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
