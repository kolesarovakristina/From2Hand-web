import Styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = Styled(Link)`
text-decoration: none;
padding: 60px;
width: calc(33.33%);
position: relative;
display: inline-block;
transition: transform .2s;
&:hover{
    transform: scale(1.05);
    text-decoration: none;
}
`;

export const StyledTitle = Styled.h1`
color: rgb(22,131,147);
letter-spacing: .5px;
font-size: 17px;
leter-spacing: 1px;
font-weight: bold;
text-align: center;
width: 100%;
display: block;
text-transform: uppercase;
padding-bottom: 10px;
`;
export const StyledSubCategory = Styled.div`
color:pink;
font-size: 15px;
font-weight:bold;
`;

export const CategoryImage = Styled.img`
width: 100%;
`;

export const StyleLink = Styled(Link)`
`;
