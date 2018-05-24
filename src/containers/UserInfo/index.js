import React from "react";
import UserInfoComponent from "../../components/UserInfoComponent";
import { UserInfoWrapper } from "./styles";
import axios from 'axios';

class UserInfo extends React.Component {

  state = {
    userInfo: [],
    token: ''
  }

  componentWillMount() {
    
    const token = JSON.parse(window.sessionStorage.getItem("token")) || null;
    if (token === null){
      this.props.history.push("/login");
    }

    this.setState({token: token.data}, ()=>{
      this.getUserData();
    });


  }
  componentDidMount(){
    console.log("user infoadsas",this.state.userInfo);
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
      this.setState({ userInfo: response.data });
    } catch (err) {
        console.log(err);
    }
};


  render() {
    return (
      <UserInfoWrapper>
        {/* {this.state.person.map((user, index) => (
          <UserInfoComponent
            email={user.email}
            phoneNumber={user.phoneNumber}
            key={index}
            
          />
        ))} */}
      </UserInfoWrapper>
    );
  }

}

export default UserInfo;