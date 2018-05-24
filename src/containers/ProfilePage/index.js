import React from "react";
import Profile from "../../components/Profile";
import MainHeader from "../../components/MainHeader";
import { StyledWrapper } from "./styles";

//to change name to profileWrapper

class ProfilePage extends React.Component {
  componentDidMount() {
    const token = JSON.parse(window.sessionStorage.getItem("token"));
    console.log("asdad", token.data.split("."));
  }
  render() {
    return (
      <div>
        <MainHeader />
        <StyledWrapper>
          <Profile />
        </StyledWrapper>
      </div>
    );
  }
}
export default ProfilePage;
