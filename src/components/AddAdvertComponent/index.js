import React from "react";
import { withRouter } from "react-router";
import { StyledWrapper, StyledTitle, StyledSubTitle, StyledSectionWrapper, StyledHeader, StyledSelect, StyledOption } from "./styles";
// import axios from "axios";

class AddAdvertComponent extends React.Component {
  
  state = {
    categoryData: [
      {title: "Animals"},
      {title: "Motors"},
      {title: "Electronics"}
    ]
  };

  render(){
    return(
        <StyledWrapper>
            <StyledSectionWrapper>
                <StyledTitle>Add New Advert</StyledTitle>
                <StyledSubTitle>Tell us what you're selling</StyledSubTitle>
            </StyledSectionWrapper>

            <StyledSectionWrapper>
                <StyledHeader>Category</StyledHeader>
                <StyledSelect>
                    {this.state.categoryData.map((item, index) => (
                        <StyledOption>{item.title}</StyledOption>
                    ))}
                </StyledSelect>
            </StyledSectionWrapper>

        </StyledWrapper>
    );
  }

}

export default withRouter(AddAdvertComponent);