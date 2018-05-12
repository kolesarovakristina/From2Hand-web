import React from "react";
// import PropTypes from "prop-types";
import {StyledWrapper,
        NavCategory,
        NavHeader} from "./styles";


const Navbar = props => (
    <StyledWrapper>
        <NavHeader>Animals</NavHeader>
        <NavCategory>Dog</NavCategory>
        <NavCategory>Cat</NavCategory>
        <NavCategory>Horse</NavCategory>
        <NavCategory>Birds</NavCategory>
    </StyledWrapper>
);
export default Navbar;





