import React from 'react';
import {StyledWrapper,StyledInput,StyledButton} from "./styles";
import axios from "axios";
import FormInput from "../FormInput";


class CategoryForm extends React.Component {
    state={
        title:"",
        description: ""
    };
    
    handleTitle = e =>{
        console.log(e.target.value);
        this.setState({title: e.target.value});
    }; 
    handleDescription= e =>{
        console.log(e.target.value);
        this.setState({description: e.target.value});
    }; 
    
    onSubmit = async event =>{
        event.preventDefault();
        const form = {
            title: this.state.title,
            description: this.state.description
        };
        
        var myJSON = JSON.stringify(form);
        console.log(form);
    };

    render() {
        return (
        <StyledWrapper>
            <form onSubmit={this.onSubmit}>
        <StyledInput
        type="text"
        onSubmit={this.onSubmit}
        ></StyledInput>
         <StyledInput
        type="text"
        onSubmit={this.onSubmit}
        ></StyledInput>
        <StyledButton type="submit">Send</StyledButton>
        </form> 
        </StyledWrapper>
       
        )};
            };
export default CategoryForm;