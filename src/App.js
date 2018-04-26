import { ThemeProvider } from "styled-components";
import React from "react";
import { Switch, Route,Redirect } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import AddNewPage from "./containers/AddNew";
import AllAdverts from "./containers/AllAdverts";
import AboutPage from "./containers/About";
import RegisterPage from "./containers/Register";
import theme from "./styles/themes/default";
import MainHeader from "./components/MainHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PropTypes from "prop-types";

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <div>
        <Switch>
        <Route exact path="/" render={() => (
         <Redirect to="/dashboard/homePage"/>
          )}/>
          <Route  path="/dashboard" component={Dashboard} />
          <Route  path="/login" component={AboutPage} />
          <Route  path="/register" component={RegisterPage} />
          <Route  path="/adverts" component={AllAdverts} />
        </Switch>
      </div>
    </ThemeProvider>
  </div>
);

export default App;
