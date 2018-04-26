import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Charts from "../Charts";
import About from "../About";
import Header from "../../components/Header";
import MainHeader from "../../components/MainHeader";
import Homepage from "../../containers/Homepage";
import AboutPage from "../../containers/About";
import Footer from "../../components/Footer";
import { StyledWrapper } from "./styles";
import CategoryComponent from "../../components/Category";
import { read } from "fs";
import axios from "axios";
import { setTimeout } from "timers";
import AllAdverts from "../AllAdverts";

const Dashboard = () => (
  <div>
    <MainHeader />
    <Header value="All" />
    <Switch>
      <Route path="/dashboard/homePage" component={Homepage} />
      <Route path="/dashboard/category/:id" component={AllAdverts} />
    </Switch>
    <Footer text="© 2018 FROM2HAND" />
  </div>
);

export default Dashboard;
