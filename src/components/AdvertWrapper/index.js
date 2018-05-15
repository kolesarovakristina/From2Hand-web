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

const AdvertItem = props => (
  <StyledLink to={props.user === true ? `/dashboard/userBigadvert/${props.id}` : `/dashboard/bigadvert/${props.id}`}>
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
export default AdvertItem;
