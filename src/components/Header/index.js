import React from "react";
import { withRouter } from "react-router";
import { StyledHeaderWrapper, StyledMenuWrapper, StyledNavLink, SearchImg } from "./styles";
import "./style.css";

const activeStyle = { color: "#253993" };
const Header = () => (
  <StyledHeaderWrapper>
        <StyledMenuWrapper>
            <input type="text" placeholder="What Are You Looking For?" />
            <select className="headerSelect">
                <option value = "All">All</option>
                <option value = "Animals">Animals</option>
                <option value = "Motors">Motors</option>
                <option value = "Electronics">Electronics</option>
                <option value = "Cell Phones">Cell Phones</option>
                <option value = "Fashion">Fashion</option>
                <option value = "MusicalInstruments">Musical Instruments</option>
                <option value = "SportingGoods">Sporting Goods</option>
                <option value = "Home&Garden">Home & Garden</option>
                <option value = "Other">Other</option>
            </select>
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Price From" />
            <input type="text" placeholder="Price To" />
            <SearchImg src="./categoryImage/searching.png" />
    </StyledMenuWrapper>
  </StyledHeaderWrapper>
);
export default withRouter(Header);
