import React from "react";
import { StyledWrapper, StyledTitle, StyledSubCategory } from "./styles";

const CategoryComponent = props => (
  <StyledWrapper>
    <StyledTitle>{props.title}</StyledTitle>
    <StyledSubCategory>{props.podkategorie}</StyledSubCategory>
  </StyledWrapper>
);
export default CategoryComponent;
