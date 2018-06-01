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
        ],
        districtValue: ''
      };

      districtValue = event => {
          console.log(event.target.value);
          this.setState({districtValue: event.target.value});
      }

    render() {
        return (
            <form onSubmit={this.props.toPage4}>
                <StyledWrapper>
                    <StyledTitle>Please, enter detailed information about product</StyledTitle>
                    <StyledTextArea 
                        required minLength={20}
                        maxLength={255}
                        onChange={this.props.textareaValue}
                        cols="10" rows="5" charswidth="23" name="text_body" 
                        placeholder='Please, write product description, min 20 characters, max 255 characters'>
                    </StyledTextArea>
                    <StyledInput required maxLength={10} onChange={this.props.priceValue} type='number' placeholder='Price of product (EUR)'/>
                    <SelectWrapper>
                        <StyledSelect required onChange={this.props.districtValue}>
                            <StyledOption value="" disabled selected>Select district</StyledOption>
                                {this.state.district.map((item, index) => (
                                    <StyledOption value={item.name}>{item.name}</StyledOption>
                                ))}
                        </StyledSelect>

                        <StyledSelect required onChange={this.props.citydistrictValue}>
                            <StyledOption value="" disabled selected>Select city district</StyledOption>
                            {this.state.kosice1.map((item, index) => (
                                <StyledOption value={item.name}>{item.name}</StyledOption>
                            ))}
                        </StyledSelect>
                    </SelectWrapper>
                    <ButtonWrapper>
                            <StyledButton onClick={this.props.backTo2Page}>Previous</StyledButton>
                            <StyledButton type='submit'>Next</StyledButton>
                    </ButtonWrapper>
                </StyledWrapper>
            </form>
        );
    }

}

export default ThirdPage;