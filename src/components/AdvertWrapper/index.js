import React from "react";
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
  <StyledLink to={props.user === true ? `/dashboard/userBigadvert/${props.item.id}` : `/dashboard/bigadvert/${props.item.id}`}>
    <StyledWrapper>
        <StyledTitle>{props.item.name}</StyledTitle>
      <DescWrapper>
        <ImageWrapper>
          <StyledImg src={`data:image;base64,${props.item.photoAdvert.data}`} />
        </ImageWrapper>
        <StyledDesc>{props.item.descr}</StyledDesc>
        <StyledPrice>{props.item.price+'€'}</StyledPrice>
        <StyledLocation>{props.item.district}</StyledLocation>
      </DescWrapper>
    </StyledWrapper>
  </StyledLink>
);
export default AdvertItem;
