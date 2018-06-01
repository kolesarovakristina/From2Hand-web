import React from "react";
import { Switch, Route } from "react-router-dom";
import Charts from "../Charts";
import Header from "../../components/Header";
import MainHeader from "../../components/MainHeader";
import Homepage from "../../containers/Homepage";
import BigAdvert from "../../containers/BigAdvert";
import Footer from "../../components/Footer";
import CategoryComponent from "../../components/Category";
import axios from "axios";
import { setTimeout } from "timers";
import AllAdverts from "../AllAdverts";
import AddAdvert from "../AddNewAdvertPage";
import AdvertForUser from "../AdvertForUser";
import UserDashboard from "../UserDashboard";
import AdminDashboard from "../AdminDashboard";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Header />
        <Switch>
          <Route path="/dashboard/homePage" component={Homepage} />
          <Route path="/dashboard/category/:id" component={AllAdverts} />
          <Route path="/dashboard/bigadvert/:id" component={BigAdvert} />
          <Route path="/dashboard/admin" component={AdminDashboard} />
          <Route path="/dashboard/user" component={UserDashboard} />
          <Route path="/dashboard/userBigadvert/:id" component={AdvertForUser}/>
          <Route path="/dashboard/addAdvert" component={AddAdvert} />
        </Switch>
        <Footer text="© 2018 FROM2HAND" />
      </div>
    );
  }
}
export default Dashboard;
