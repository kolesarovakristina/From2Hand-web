import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper, StyledTitle, CategoryImage, StyleLink } from "./styles";

const CategoryComponent = props => (
  <StyledWrapper to={`/dashboard/category/${props.id}`}>
    <StyledTitle>{props.title}</StyledTitle>

    <CategoryImage src={`data:image;base64,${props.imgUrl}`} />
  </StyledWrapper>
);

export default CategoryComponent;
