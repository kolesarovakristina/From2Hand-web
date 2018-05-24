import React from "react";
import base64 from "base-64";
import PropTypes from "prop-types";
import { Switch, Route, withRouter } from "react-router-dom";
import UserInfo from "../../containers/UserInfo";
import AdvertForUser from "../AdvertForUser";
import UserprofileSwitch from "../../components/UserprofileSwitch";
import ChangeInfo from "../../containers/ChangeInfoPage";
import AllUserAdverts from "../../containers/AllUserAdverts";
import { StyledWrapper } from "./styles";

class UserDashboard extends React.Component {
  state = {
    person: {
      firstName: "Peter",
      lastName: "Novak"
    }
  };

  componentWillMount() {
    const token = JSON.parse(window.sessionStorage.getItem("token")) || null;
    const parsedToken = token.data.split(".");
    const role = JSON.parse(base64.decode(parsedToken[1]));
    if (role.sub !== "user" && token !== null) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <StyledWrapper>
        <UserprofileSwitch
          firstname={this.state.person.firstName}
          lastname={this.state.person.lastName}
        />

        <Switch>
          <Route path="/dashboard/userprofile/info" component={UserInfo} />
          <Route
            path="/dashboard/userprofile/changeInfo"
            component={ChangeInfo}
          />
          <Route
            path="/dashboard/userprofile/myAdverts"
            component={AllUserAdverts}
          />
          <Route
            path="/dashboard/userBigadvert/:id"
            component={AdvertForUser}
          />
        </Switch>
      </StyledWrapper>
    );
  }
}

export default withRouter(UserDashboard);
