import React from "react";
import PropTypes from "prop-types";
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

const MyAdvert = props => (

  <StyledLink to={props.user === true ? `/dashboard/bigadvert/${props.id}` : `/dashboard/bigadvert/`}>
    <StyledWrapper>
        <StyledTitle>{props.title}</StyledTitle>
      <DescWrapper>
        <ImageWrapper>
          <StyledImg src={advertImage} />
        </ImageWrapper>
        <StyledDesc>{props.description}</StyledDesc>
        <StyledPrice>{props.price}</StyledPrice>
        <StyledLocation>{props.location}</StyledLocation>
      </DescWrapper>
    </StyledWrapper>
  </StyledLink>
);
export default MyAdvert;
