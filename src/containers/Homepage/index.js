import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Charts from "../Charts";
import Header from "../../components/Header";
import MainHeader from "../../components/MainHeader";
import { StyledWrapper } from "./styles";
import CategoryComponent from "../../components/Category";
import axios from "axios";
import { LoadingImage, LoaderWrapper } from "../AdvertForUser/styles";
import loading from '../../assets/loading.gif';

class Homepage extends React.Component {
  state = {
    categoryData: [],
    loading:true
  };

  componentWillMount() {
    this.fillStateData();
  }

  fillStateData = async () => {
    try {
      const response = await axios.get("/category");
      this.setState({ 
        categoryData: response.data,
        loading: false
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    if(this.state.loading){
			return(
				<LoaderWrapper>
					<LoadingImage src={loading}/>
				</LoaderWrapper>
			)
    }

    return (
      <StyledWrapper>
        {this.state.categoryData.map(item => (
          <CategoryComponent
            title={item.title}
            key={item.id}
            imgUrl={item.photo.data}
            id={item.id}
          />
        ))}
      </StyledWrapper>
    );
  }
}

export default withRouter(Homepage);
