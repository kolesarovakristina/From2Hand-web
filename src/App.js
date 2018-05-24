import { ThemeProvider } from "styled-components";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import RegisterPage from "./containers/Register";
import theme from "./styles/themes/default";

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
          <Route path="/login" component={LoginPage} />
          <Route path="/registration" component={RegisterPage} />
        </Switch>
      </div>
    </ThemeProvider>
  </div>
);

export default App;
