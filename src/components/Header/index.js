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
    category: '',
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
  
  getValueFromInputCategories = event => {
    console.log(event.target.value);
    this.setState({category: event.target.value});
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
  
  // appendDataToSession = () => {
  //   console.log('ok');
  // }
  
  render(){
    return(
      <StyledHeaderWrapper>
        <StyledMenuWrapper>
          <StyledInput onChange={this.getValueFromInput} maxLength={25} type="text" placeholder="What Are You Looking For?" />
          <StyledSelect  onChange={this.getValueFromInputCategories} className="headerSelect">
            <StyledOption selected disabled>Categories</StyledOption>
            {this.state.categoryData.map((item, index) => (
              <StyledOption value={item.id}>{item.title}</StyledOption>
            ))}
          </StyledSelect>
          <StyledSelect onChange={this.getValueFromInputDistrict} className="headerSelect">
            <StyledOption selected value disabled>Districts</StyledOption>
            <StyledOption value = "Košice 1">Košice 1</StyledOption>
            <StyledOption value = "Košice 2">Košice 2</StyledOption>
            <StyledOption value = "Košice 3">Košice 3</StyledOption>
            <StyledOption value = "Košice 4">Košice 4</StyledOption>
          </StyledSelect>
          <StyledInput onChange={this.getValueFromInputPriceFrom} maxLength={10} type="number" placeholder="Price From" />
          <StyledInput onChange={this.getValueFromInputPriceTo} maxLength={10} type="number" placeholder="Price To" />
          <SearchImg onClick={this.appendDataToSession} src={searchButton} />
        </StyledMenuWrapper> 
    </StyledHeaderWrapper>
    );
  }

}

export default withRouter(Header);
