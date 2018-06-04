import React from "react";
import { StyledWrapper, StyledTitle, StyledTextArea, StyledSelect, ButtonWrapper, StyledButton, StyledOption, SelectWrapper, StyledInput } from "./styles";
import axios from 'axios';

class ThirdPage extends React.Component {

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
                        <StyledSelect required onUpdate onChange={this.props.districtValue}>
                            <StyledOption value="" disabled selected>Select district</StyledOption>
                            <StyledOption value="Kosice 1">Kosice 1</StyledOption>
                            <StyledOption value="Kosice 2">Kosice 2</StyledOption>
                            <StyledOption value="Kosice 3">Kosice 3</StyledOption>
                            <StyledOption value="Kosice 4">Kosice 4</StyledOption>
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