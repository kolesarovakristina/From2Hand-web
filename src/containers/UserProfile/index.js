import React from "react";
import PropTypes from "prop-types";
import UserInfo from "../../components/UserInfo";
import { UserInfoWrapper } from "./styles";
import Cookies from "universal-cookie";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          firstName: "Peter",
          lastName: "Novak",
          email: "peternovak@gmail.com",
          phoneNumber: "0911234567"
        }
      ]
    };
  }

  componentWillMount() {
    const cookies = new Cookies();
    console.log(cookies.get("token"));
    const token = cookies.get("token") || null;
    if (token === null) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <UserInfoWrapper>
        {this.state.person.map((user, index) => (
          <UserInfo
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            phoneNumber={user.phoneNumber}
            key={index}
          />
        ))}
      </UserInfoWrapper>
    );
  }
}

export default UserProfile;
