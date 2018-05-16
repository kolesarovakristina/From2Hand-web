import React from "react";
import FirstPage from '../../components/AddAdvertComponent/FirstPage';
import SecondPage from '../../components/AddAdvertComponent/SecondPageCategory';
import ThirdPage from '../../components/AddAdvertComponent/ThirdPageDesc';
import { StyledTitle, StyledWrapper } from "./styles";

class AddNewAdvertPage extends React.Component {
    state = {
        toPage2State: false,
        toPage3State: false,
        backTo1State: false,
        backTo2State: false
    }

    handleToPage2 = () => {
        this.setState({toPage2State:true});
        this.setState({backTo1State:false});
        this.setState({toPage3State:false});
        this.setState({backTo2State:false});
    }

    handleToPage3 = () => {
        this.setState({toPage2State:false});
        this.setState({toPage3State:true});
        this.setState({backTo1State:false});
        this.setState({backTo2State:false});
    }

    handleBackToPage1 = () => {
        this.setState({backTo1State:true});
        this.setState({toPage2State:false});
        this.setState({toPage3State:false});
        this.setState({backTo2State:false});
    }

    handleBackToPage2 = () => {
        this.setState({backTo1State:false});
        this.setState({toPage2State:false});
        this.setState({toPage3State:false});
        this.setState({backTo2State:true});
    }

    // GETTING VALUES
    state = {
        title: ''
    };

    handleValueFromTitle = event => {
        this.setState({ title: event.target.value });
    }

    render() {

        if (this.state.toPage2State) {
            return (
                <StyledWrapper>
                    <StyledTitle>Add New Advert</StyledTitle>
                    <SecondPage backTo1Page={this.handleBackToPage1}
                                toPage3={this.handleToPage3}/>

                </StyledWrapper>
            );
        }

        if (this.state.backTo1State) {
            return (
                <StyledWrapper>
                    <StyledTitle>Add New Advert</StyledTitle>
                    <FirstPage toPage2 = {this.handleToPage2}
                               getValueFromTitle={this.handleValueFromTitle}/>
                </StyledWrapper>
            );
        }

        if (this.state.toPage3State) {
            return (
                <StyledWrapper>
                    <StyledTitle>Add New Advert</StyledTitle>
                    <ThirdPage backTo2Page={this.handleBackToPage2}/>
                </StyledWrapper>
            );
        }

        if (this.state.backTo2State) {
            return (
                <StyledWrapper>
                    <StyledTitle>Add New Advert</StyledTitle>
                    <SecondPage backTo1Page={this.handleBackToPage1}
                                toPage3={this.handleToPage3}/>
                </StyledWrapper>
            );
        }

        return (
            <StyledWrapper>
                <StyledTitle>Add New Advert</StyledTitle>
                <FirstPage toPage2 = {this.handleToPage2}/>
            </StyledWrapper>
        );
      }
}

export default AddNewAdvertPage;