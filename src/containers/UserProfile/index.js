import React from "react";
import PropTypes from "prop-types";
import UserInfo from "../../components/UserInfo";
import { UserInfoWrapper } from "./styles";


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

  render() {
    return (
      <UserInfoWrapper>
          {this.state.person.map((user, index) => (
            <UserInfo firstName={user.firstName} 
                      lastName={user.lastName}
                      email={user.email}
                      phoneNumber={user.phoneNumber} />
          ))}
      </UserInfoWrapper>
    );
  }
}

export default UserProfile;
