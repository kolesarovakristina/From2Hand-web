import React from "react";
import { StyledWrapper, StyledTitle, StyledTextArea, StyledSelect, ButtonWrapper, StyledButton, StyledOption, SelectWrapper, StyledInput } from "./styles";

class ThirdPage extends React.Component {

    state = {
        district: [
          {name: "Košice 1"},
          {name: "Košice 2"}
        ],
        kosice1: [
            {name: 'Džungľa'},
            {name: 'Kavecany'}
        ],
        kosice2: [
            {name: 'Pereš'},
            {name: 'Poľov'}
        ]
      };

    render() {
        return (
            <StyledWrapper>
                <StyledTitle>Please, enter detailed information about product</StyledTitle>
                <StyledTextArea cols="10" rows="5" charswidth="23" name="text_body" placeholder='Please, write product description, max 300 characters'></StyledTextArea>
                <StyledInput type='text' placeholder='Price of product (EUR)'/>
                <SelectWrapper>
                    <StyledSelect>
                        <StyledOption value="" disabled selected>Select district</StyledOption>
                            {this.state.district.map((item, index) => (
                                <StyledOption value={item.name}>{item.name}</StyledOption>
                            ))}
                    </StyledSelect>

                    <StyledSelect>
                        <StyledOption value="" disabled selected>Select city district</StyledOption>
                        {this.state.kosice1.map((item, index) => (
                            <StyledOption value={item.name}>{item.name}</StyledOption>
                        ))}
                    </StyledSelect>
                </SelectWrapper>
                <ButtonWrapper>
                        <StyledButton onClick={this.props.backTo2Page}>Previous</StyledButton>
                        <StyledButton onClick={this.props.to4Page}>Next</StyledButton>
                </ButtonWrapper>
            </StyledWrapper>
        );
    }

}

export default ThirdPage;