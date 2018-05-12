import React from "react";
import { withRouter } from "react-router";
import {
  StyledHeaderWrapper,
  StyledMenuWrapper,
  StyledNavLink,
  SearchImg,
  StyledInput,
  StyledSelect,
  StyledOption
} from "./styles";
import searchButton from "../../assets/categoryImage/searching.png";
import PropTypes from "prop-types";
import axios from "axios";


class Header extends React.Component {
  
  state = {
    categoryData: [
      {title: "Animals"},
      {title: "Motors"},
      {title: "Electronics"}
    ]
  };

  componentWillMount() {
    this.fillStateData();
  }

  fillStateData = async () => {
    try {
      const response = await axios.get("/category");
      this.setState({ categoryData: response.data });
    } catch (err) {
      console.log(err);
    }
  };
  
  render(){
    return(
      <StyledHeaderWrapper>
        <StyledMenuWrapper>
          <StyledInput type="text" placeholder="What Are You Looking For?" />
          <StyledSelect className="headerSelect">
            <StyledOption value = "All">All</StyledOption>
            {this.state.categoryData.map((item, index) => (
              <StyledOption value = {item.title}>{item.title}</StyledOption>
            ))}
          </StyledSelect>
          <StyledInput type="text" placeholder="City" />
          <StyledInput type="text" placeholder="Price From" />
          <StyledInput type="text" placeholder="Price To" />
          <SearchImg src={searchButton} />
        </StyledMenuWrapper>
    </StyledHeaderWrapper>
    );
  }

}

export default withRouter(Header);
