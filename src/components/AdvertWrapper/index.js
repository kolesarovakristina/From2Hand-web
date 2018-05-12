import React from "react";
// import PropTypes from "prop-types";
import advertImage from "../../assets/categoryImage/animals.png";

import {
  StyledWrapper,
  StyledTitle,
  StyledDesc,
  StyledPrice,
  StyledImg,
  StyledLink,
  StyledLocation,
  ImageWrapper,
  DescWrapper
} from "./styles";

const AdvertItem = props => (
  <StyledWrapper>
    <StyledLink to={`/dashboard/bigadvert/${props.id}`}>
      <StyledTitle>{props.title}</StyledTitle>
    </StyledLink>
    <DescWrapper>
      <ImageWrapper>
        <StyledImg src={advertImage} />
      </ImageWrapper>
      <StyledDesc>{props.description}</StyledDesc>
      <StyledPrice>{props.price}</StyledPrice>
      <StyledLocation>{props.location}</StyledLocation>
    </DescWrapper>
  </StyledWrapper>
);
export default AdvertItem;
