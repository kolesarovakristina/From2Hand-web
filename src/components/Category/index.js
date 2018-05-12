import React from "react";

import { StyledWrapper, StyledTitle, CategoryImage } from "./styles";

const CategoryComponent = props => (
  <StyledWrapper to={`/dashboard/category/${props.id}`}>
    <StyledTitle>{props.title}</StyledTitle>

    <CategoryImage src={`data:image;base64,${props.imgUrl}`} />
  </StyledWrapper>
);

export default CategoryComponent;
