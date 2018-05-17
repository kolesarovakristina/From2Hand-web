import React from "react";
import UserInfoComponent from "../../components/UserInfoComponent";
import { UserInfoWrapper } from "./styles";

class UserInfo extends React.Component {
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
    console.log( window.sessionStorage.getItem("token"));
    const token = window.sessionStorage.getItem("token") || null;
    if (token === null) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <UserInfoWrapper>
        {this.state.person.map((user, index) => (
          <UserInfoComponent
            email={user.email}
            phoneNumber={user.phoneNumber}
            key={index}
            
          />
        ))}
      </UserInfoWrapper>
    );
  }

}

export default UserInfo;