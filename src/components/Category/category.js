import React from "react";
import PropTypes from "prop-types";
import { StyledWrapper,StyledLink, StyledTitle, StyledSubCategory,StyledComponent,StyledLogo } from "./styles";

const CategoryComponent = props => (
  <StyledWrapper>
    <StyledComponent>
    <StyledLink >{props.recenziaObjekt.title}</StyledLink>
    <StyledLink >{props.recenziaObjekt.description}</StyledLink>
    </StyledComponent>
  </StyledWrapper>
  
);
export default CategoryComponent;
