import { ThemeProvider } from "styled-components";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import AddNewPage from "./containers/AddNew";
import UserProfile from "./containers/UserProfile";
import RegisterPage from "./containers/Register";
import theme from "./styles/themes/default";
import MainHeader from "./components/MainHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PropTypes from "prop-types";
import LoginPage from "./containers/LogIn";
import "./index.css";
import ProfilePage from "./containers/ProfilePage";
import CategoryForm from "./components/CategoryForm";

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
          <Route path="/user/login" component={LoginPage} />
          <Route path="/user" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/categoryform" component={CategoryForm} />
        </Switch>
      </div>
    </ThemeProvider>
  </div>
);

export default App;
