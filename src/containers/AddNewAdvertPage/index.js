import React from "react";
import FirstPage from '../../components/AddAdvertComponent/FirstPage';
import SecondPage from '../../components/AddAdvertComponent/SecondPageCategory';
import { StyledTitle, StyledWrapper } from "./styles";

class AddNewAdvertPage extends React.Component {
    state = {
        toPage2State: false,
        backTo1State: false
    }
    
    handeToPage2 = () => {
        this.setState({toPage2State:true});
        this.setState({backTo1Page:false});
    }

    handeBackToPage1 = () => {
        this.setState({backTo1State:true});
        this.setState({toPage2State:false});
    }

    render() {
        if (this.state.toPage2State) {
            return (
                <StyledWrapper>
                    <StyledTitle>Add New Advert</StyledTitle>
                    <SecondPage backTo1Page={this.handeBackToPage1}/>
                </StyledWrapper>
            );
        }

        if (this.state.backTo1State) {
            return (
                <StyledWrapper>
                    <StyledTitle>Add New Advert</StyledTitle>
                    <FirstPage toPage2 = {this.handeToPage2}/>
                </StyledWrapper>
            );
        }

        return (
            <StyledWrapper>
                <StyledTitle>Add New Advert</StyledTitle>
                <FirstPage toPage2 = {this.handeToPage2}/>
            </StyledWrapper>
        );
      }
}

export default AddNewAdvertPage;