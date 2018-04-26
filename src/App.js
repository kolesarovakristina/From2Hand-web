import { ThemeProvider } from "styled-components";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import AddNewPage from "./containers/AddNew";
import LogIn from "./containers/LogIn";
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
          <Route
            exact
            path="/"
            render={() => <Redirect to="/dashboard/homePage" />}
          />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={LogIn} />
          <Route path="/register" component={RegisterPage} />        </Switch>
      </div>
    </ThemeProvider>
  </div>
);

export default App;
