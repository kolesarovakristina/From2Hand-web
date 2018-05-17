import React from "react";
import { StyledTitle, StyledWrapper, StyledSelect, StyledOption, StyledButton, ButtonWrapper } from "./styles";

class SecondPage extends React.Component {
    
    state = {
        categoryData: [
          {title: "Animals"},
          {title: "Motors"},
          {title: "Electronics"},
          {title: "Toys"}
        ]
      };

    render() {
        return (
            <StyledWrapper>
                <StyledTitle>Select category & subcategory</StyledTitle>
                <StyledSelect onChange={this.props.categoryValue}>
                    <StyledOption value="" disabled selected>Select category</StyledOption>
                    {this.state.categoryData.map((item, index) => (
                        <StyledOption value={item.title}>{item.title}</StyledOption>
                    ))}
                </StyledSelect>

                <StyledSelect onChange={this.props.subcategoryValue}>
                    <StyledOption value="" disabled selected>Select subcategory</StyledOption>
                    {this.state.categoryData.map((item, index) => (
                        <StyledOption value={item.title}>{item.title}</StyledOption>
                    ))}
                </StyledSelect>

                <ButtonWrapper>
                    <StyledButton onClick={this.props.backTo1Page}>Previous</StyledButton>
                    <StyledButton onClick={this.props.toPage3}>Next</StyledButton>
                </ButtonWrapper>
            </StyledWrapper>
        );
      }
}

export default SecondPage;