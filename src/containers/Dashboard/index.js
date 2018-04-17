import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Charts from "../Charts";
import About from "../About";
import Header from "../../components/Header";
import { StyledWrapper } from "./styles";
import CategoryComponent from "../../components/Category";
import { read } from "fs";
import dog from "../../assets/categoryImage/dog.png";
import motors from "../../assets/categoryImage/car.png";
import electro from "../../assets/categoryImage/computer.png";
import phone from "../../assets/categoryImage/technology.png";
import axios from "axios";
import { setTimeout } from "timers";

class DashboardPage extends React.Component {
    state = {
        categoryData: []
    };

    componentWillMount() {
        this.fillStateData();
    }

   

    fillStateData = async () => {
            try {
                const response = await axios.get("/categoryItem/getAllCategories")
                this.setState({ categoryData: response.data })      
            } catch (err) {
                console.log(err);
            }
        };

    render() {
    return (
        <StyledWrapper>

            {this.state.categoryData.map((item) => (
                <CategoryComponent title={item.categoryTitle} key={item.id}/>
                ))}
      </StyledWrapper>
    );
  }
}

export default withRouter(DashboardPage);
