import React from "react";
import PropTypes from "prop-types";
import {StyledTitle, StyledDesc, StyledPrice, StyledAdvert,StyledImg} from "./styles";

const Recenzia = props => (
  
  <StyledAdvert>
    <StyledTitle>{props.recenziaObjekt.title}</StyledTitle>
    <StyledImg src="car.png"></StyledImg>
    <StyledDesc>{props.recenziaObjekt.description}</StyledDesc>
    <StyledPrice>{props.recenziaObjekt.price}</StyledPrice>
    {/* <p>{props.poziciaVpoli}</p> */}
  </StyledAdvert>
);

// Recenzia.propTypes = {
//   recenziaObjekt: PropTypes.shape({
//     title: PropTypes.string,
//     description: PropTypes.string,
//     price: PropTypes.string,
//   }).isRequired,
// };
export default Recenzia;
