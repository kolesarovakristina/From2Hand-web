import { ThemeProvider } from "styled-components";
import React from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "./containers/Dashboard";
import AddNewPage from "./containers/AddNew";
import RegisterPage from "./containers/Register";
import theme from "./styles/themes/default";
import MainHeader from "./components/MainHeader";
import Header from "./components/Header";

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <div>
        <MainHeader myProps primary={false} andrej={3} />
        <Header />
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/myServices" component={DashboardPage} />
          <Route path="/addNew" component={AddNewPage} />
        </Switch>
      </div>
    </ThemeProvider>
  </div>
);

export default App;
