import React from "react";
import UserInfoComponent from "../../components/UserInfoComponent";
import { UserInfoWrapper } from "./styles";
import Cookies from "universal-cookie";

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