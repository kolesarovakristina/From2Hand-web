import React from "react";
import { StyledWrapper,StyledLink, StyledTitle, StyledSubCategory,StyledComponent,StyledLogo } from "./styles";

const CategoryComponent = props => (
  <StyledWrapper>
    <StyledComponent>
    <StyledLink to="/animal">{props.title}</StyledLink>
    <StyledLink to="/addNew">{props.subcategory}</StyledLink>
    <StyledLogo src="" />
    </StyledComponent>
    <StyledComponent>
    <StyledLink to="/category">{props.title2}</StyledLink>
    <StyledLink to="/addNew">{props.subcategory2}</StyledLink>
    <StyledLogo src="" />
    </StyledComponent>
  </StyledWrapper>
  
);
export default CategoryComponent;
