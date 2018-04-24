import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Charts from "../Charts";
import About from "../About";
import Header from "../../components/Header";
import MainHeader from "../../components/MainHeader";
import { StyledWrapper } from "./styles";
import CategoryComponent from "../../components/Category";
import { read } from "fs";
import axios from "axios";

class Homepage extends React.Component {
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
                        <CategoryComponent title={item.categoryTitle} key={item.id} imgUrl={item.photoData}/>
                    ))}
        </StyledWrapper>
        );
  }
}

export default withRouter(Homepage);
