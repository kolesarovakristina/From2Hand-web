import React from "react";
import {StyledWrapper, StyledButton, ButtonWrapper} from './styles';

class FourthPage extends React.Component {

    render() {
        return (
            <StyledWrapper>
                <input type='file' />

                <ButtonWrapper>
                    <StyledButton onClick={this.props.backTo3Page}>Previous</StyledButton>
                    <StyledButton onClick={this.props.toPage5}>Next</StyledButton>
                </ButtonWrapper>
            </StyledWrapper>
        );
    }

}

export default FourthPage;