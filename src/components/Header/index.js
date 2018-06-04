import React from "react";
import { withRouter } from "react-router";
import {
  StyledHeaderWrapper,
  StyledMenuWrapper,
  SearchImg,
  StyledInput,
  StyledSelect,
  StyledOption
} from "./styles";
import searchButton from "../../assets/categoryImage/searching.png";
import axios from "axios";

class Header extends React.Component {
  
  state = {
    categoryData: [],
    input: '',
    district: '',
    priceFrom: '',
    priceTo: ''
  };

  componentWillMount() {
    this.fillStateData();
  }

  fillStateData = async () => {
    try {
      const response = await axios.get("/category");
      this.setState({ categoryData: response.data });
    } catch (err) {
      console.log(err);
    }
  };
  
  getValueFromInput = event => {
    console.log(event.target.value);
    this.setState({input: event.target.value});
  }
  
  getValueFromInputDistrict = event => {
    console.log(event.target.value);
    this.setState({district: event.target.value});
  }
  
  getValueFromInputPriceFrom = event => {
    console.log(event.target.value);
    this.setState({priceFrom: event.target.value});
  }
  
  getValueFromInputPriceTo = event => {
    console.log(event.target.value);
    this.setState({priceTo: event.target.value});
  }

  appendDataToSession = () => {
    window.sessionStorage.setItem('text',this.state.input);
    window.sessionStorage.setItem('district',this.state.district);
    window.sessionStorage.setItem('priceFrom',this.state.priceFrom);
    window.sessionStorage.setItem('priceTo',this.state.priceTo);
    this.props.history.push("/dashboard/adverts");
  }
  
  render(){
    return(
      <StyledHeaderWrapper>
        <StyledMenuWrapper>
          <form onSubmit={this.appendDataToSession}>
          <StyledInput required onChange={this.getValueFromInput} maxLength={25} type="text" placeholder="What Are You Looking For?" />
          <StyledSelect required onChange={this.getValueFromInputDistrict} className="headerSelect">
            <StyledOption value = "Kosice 1">Kosice 1</StyledOption>
            <StyledOption value = "Kosice 2">Kosice 2</StyledOption>
            <StyledOption value = "Kosice 3">Kosice 3</StyledOption>
            <StyledOption value = "Kosice 4">Kosice 4</StyledOption>
          </StyledSelect>
          <StyledInput required onChange={this.getValueFromInputPriceFrom} maxLength={10} type="number" placeholder="Price From" />
          <StyledInput required onChange={this.getValueFromInputPriceTo} maxLength={10} type="number" placeholder="Price To" />
          <button style={{border: 0, background:'rgb(230,230,230)'}} type="submit"><SearchImg src={searchButton} /></button>
          </form>
        </StyledMenuWrapper> 
    </StyledHeaderWrapper>
    );
  }

}

export default withRouter(Header);
