import React from "react";
import PropTypes from "prop-types";

import {
    StyledMainHeader,
    StyledLink,
    StyledHeaderLogo,
    NewHeader,
    NewHeaderContent,
    StyledWrapper,
    StyledTitle,
    StyledSubCategory,
    CategoryImage,
} from "./styles";

const CategoryComponent = props => (
        <StyledWrapper>
            <StyledTitle>{props.title}</StyledTitle>
            <CategoryImage src={props.imgUrl} />
        </StyledWrapper>
);


export default CategoryComponent;
