import React from "react";
import PropTypes from "prop-types";
import motors from "../../assets/categoryImage/car.png";

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
    <StyledLink to={`/dashboard/bigadvert`}>
      <StyledTitle>title</StyledTitle>
    </StyledLink>
    <StyledImg />
    <StyledDesc>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
      fringilla arcu, vel lobortis turpis. Vestibulum scelerisque vulputate
      convallis. Integer quis mauris pretium, faucibus risus sed, egestas purus.
      Curabitur at venenatis enim. Curabitur tempus, nibh vel aliquam
      scelerisque, arcu dolor finibus ex, ut iaculis ex ex nec nunc. Morbi
      consequat massa at ex blandit, eu posuere nisi euismod. Quisque tincidunt,
      enim non auctor dictum, ligula dolor placerat risus, non dignissim quam
      est non eros. Fusce euismod vehicula semper. Aenean eleifend dui nec
      pretium interdum. Duis hendrerit orci ac erat tincidunt gravida
    </StyledDesc>
    <StyledPrice>Price: 100 </StyledPrice>
  </StyledWrapper>
);
export default AdvertItem;
