import React from "react";
import PropTypes from "prop-types";

import {
  StyledWrapper,
  StyledTitle,
  StyledDesc,
  StyledPrice,
  StyledAdvert,
  StyledImg,
  StyledLink
} from "./styles";

const AdvertItem = props => (
  <StyledWrapper>
    <StyledLink to={`/dashboard/bigadvert/${props.id}`}>
      <StyledTitle>{props.title}</StyledTitle>
    </StyledLink>
    <StyledImg />
    <StyledDesc>{props.desc}</StyledDesc>
    <StyledPrice>{props.price} </StyledPrice>
  </StyledWrapper>
);
export default AdvertItem;
