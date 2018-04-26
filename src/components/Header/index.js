import React from "react";
import { withRouter } from "react-router";
import {
  StyledHeaderWrapper,
  StyledMenuWrapper,
  StyledNavLink,
  SearchImg
} from "./styles";
import "./style.css";
import searchButton from "../../assets/categoryImage/searching.png";
import PropTypes from "prop-types";
import "./style.css";

const Header = props => (
  <StyledHeaderWrapper>
    <StyledMenuWrapper>
      <input type="text" placeholder="What Are You Looking For?" />
      <select className="headerSelect">
        <option value={props.optionValue}>All {props.optionText}</option>
      </select>
      <input type="text" placeholder="City" />
      <input type="text" placeholder="Price From" />
      <input type="text" placeholder="Price To" />
      <SearchImg src={searchButton} />
    </StyledMenuWrapper>
  </StyledHeaderWrapper>
);
export default withRouter(Header);
