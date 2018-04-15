import React from "react";
import PropTypes from "prop-types";
import StyledTitle from "./styles";

const Recenzia = props => (
  <div>
    <StyledTitle>{props.recenziaObjekt.title}</StyledTitle>
    <div>{props.recenziaObjekt.description}</div>
    <div>{props.recenziaObjekt.price}</div>
    <p>{props.poziciaVpoli}</p>
  </div>
);

// Recenzia.propTypes = {
//   recenziaObjekt: PropTypes.shape({
//     title: PropTypes.string,
//     description: PropTypes.string,
//     price: PropTypes.string,
//   }).isRequired,
// };
export default Recenzia;
