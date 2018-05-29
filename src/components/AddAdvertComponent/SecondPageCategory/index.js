import React from "react";
import { StyledTitle, StyledWrapper, StyledSelect, StyledOption, StyledButton, ButtonWrapper } from "./styles";
import axios from 'axios';

class SecondPage extends React.Component {
    
    // GET
    componentWillMount() {
        this.fillStateCategoryData();
    }

    state = {
        categoryData: [],
        subcategoryData: []
      }

    fillStateCategoryData = async () => {
        try {
            const response = await axios.get("/category");
            this.setState({ categoryData: response.data });
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    fillStateSubcategoryData = async (event) => {
        const id =  event.target.value;
        try {
            const response = await axios.get(`/category/${id}`);
            this.setState({ subcategoryData: response.data.subcategories });
            console.log("subcategory data",response.data.subcategories);
        } catch (err) {
            console.log(err);
        }
    };

    callTwoFunctions = (event)=>{
        this.props.categoryValue(event);
        this.fillStateSubcategoryData(event);
    }

    render() {
        return (
            <form onSubmit={this.props.toPage3}>
                <StyledWrapper>
                    <StyledTitle>Select category & subcategory</StyledTitle>
                    <StyledSelect required onChange={(e) =>{this.callTwoFunctions(e)}}>
                        <StyledOption value="" disabled selected>Select category</StyledOption>
                        {this.state.categoryData.map((item, index) => (
                            <StyledOption required value={item.id} key={item.id}>{item.title}</StyledOption>
                        ))}
                    </StyledSelect>

                    <StyledSelect required onChange={this.props.subcategoryValue}>
                        <StyledOption value="" disabled selected>Select subcategory</StyledOption>
                        {this.state.subcategoryData.map((item, index) => (
                            <StyledOption value={item.id} key={item.id}>{item.title}</StyledOption>
                        ))}
                    </StyledSelect>

                    <ButtonWrapper>
                        <StyledButton onClick={this.props.backTo1Page}>Previous</StyledButton>
                        <StyledButton>Next</StyledButton>
                    </ButtonWrapper>
                </StyledWrapper>
            </form>
        );
      }
}

export default SecondPage;