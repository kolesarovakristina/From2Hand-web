import React from "react";
import base64 from "base-64";
import PropTypes from "prop-types";
import { Switch, Route, withRouter } from "react-router-dom";
import UserInfo from "../../containers/UserInfo";
import AdvertForUser from "../AdvertForUser";
import UserprofileSwitch from "../../components/UserprofileSwitch";
import ChangeInfo from "../../containers/ChangeInfoPage";
import AllUserAdverts from "../../containers/AllUserAdverts";
import ButtonBack from "../../components/ButtonBack";
import { StyledWrapper } from "./styles";
import axios from 'axios';

class UserDashboard extends React.Component {
  state = {
    userInfo: []
  };

  componentWillMount() {
    const token = JSON.parse(window.sessionStorage.getItem("token")) || null;
    const parsedToken = token.data.split(".");
    const role = JSON.parse(base64.decode(parsedToken[1]));
    console.log(role.auth[0].authority);
    if (role.auth[0].authority == "ROLE_ADMIN" && token !== null) {
      this.props.history.push("/");
    }

    this.setState({token: token.data}, ()=>{
      this.getUserData();
    });
  }

  getUserData = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "/user/profile",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.state.token}`
        },
      });
      this.setState({ userInfo: response.data }, () => {
        console.log(this.state.userInfo);
      });
    } catch (err) {
        console.log(err);
    }
};

  render() {
    return (
      <StyledWrapper>
        <ButtonBack/>
        <UserprofileSwitch username={this.state.userInfo.username} />
        <Switch>
          <Route path="/dashboard/user/info" component={UserInfo} />
          <Route path="/dashboard/user/changeInfo" component={ChangeInfo} />
          <Route path="/dashboard/user/myAdverts" component={AllUserAdverts} />
          <Route path="/dashboard/userBigadvert/:id" component={AdvertForUser} />
        </Switch>
      </StyledWrapper>
    );
  }
}

export default withRouter(UserDashboard);
