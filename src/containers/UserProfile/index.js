import React from "react";
import PropTypes from "prop-types";
import UserInfo from "../../containers/UserInfo";
import Cookies from "universal-cookie";
import { Switch, Route, withRouter } from "react-router-dom";
import { userInfo } from "os";
import UserprofileSwitch from "../../components/UserprofileSwitch";
import ChangeInfo from '../../containers/ChangeInfoPage';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          firstName: "Peter",
          lastName: "Novak"
        }
      ]
    };
  }

  render(){
    return (
      <div>
        {this.state.person.map((user, index) => (
          <UserprofileSwitch
            firstname={user.firstName}
            lastname={user.lastName}
            key={index}
          />
        ))}
        <Switch>
          <Route path="/dashboard/userprofile/info" component={UserInfo} />
          <Route path="/dashboard/userprofile/changeInfo" component={ChangeInfo} />
          <Route path="/dashboard/userprofile/myAdverts" component={UserInfo} />
        </Switch>
    </div>
    );
  }
}

export default UserProfile;