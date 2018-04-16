import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Charts from "../Charts";
import About from "../About";
import Header from "../../components/Header";
import { StyledWrapper } from "./styles";
import CategoryComponent from "../../components/Category/category";

class DashboardPage extends React.Component {
  render() {
    return (
      <StyledWrapper>
        <CategoryComponent title="Animal" subcategory="Horse" title2="Car" subcategory2="BMW" />
      </StyledWrapper>
    );
  }
}
export default withRouter(DashboardPage);
