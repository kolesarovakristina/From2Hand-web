import React from "react";
import PropTypes from "prop-types";

import {
    StyledWrapper,
    StyledTitle,
    CategoryImage,
} from "./styles";

const CategoryComponent = props => (
    <StyledWrapper>
        <StyledTitle>{props.title}</StyledTitle>
        <CategoryImage src={`data:image;base64,${props.imgUrl}`} />
    </StyledWrapper>
);

export default CategoryComponent;
