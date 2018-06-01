import React from "react";
import ChangeInfoComponent from '../../components/ChangeInfoComponent';
import { StyledWrapper } from "./styles";
import axios from 'axios';

class ChangeInfoPage extends React.Component {
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
        console.log('change info ',this.state.userInfo);
      });
    } catch (err) {
        console.log(err);
    }
  };

  changeUserInfo = async (event) => {
    const id = this.state.userInfo.id;
    console.log(id);
    event.preventDefault();

    const form = new FormData();
    form.append("email", this.state.userInfo.email);
    form.append("password", this.state.userInfo.password);
    form.append("phonenumber", this.state.phonenumber);
    console.log(form);
    
    try {
        const response = await axios({
          method: "put",
          url: `/user/${id}`,
          data: form,
          config: { headers: { "Content-Type": "application/json" } }
        });
        alert('Information successfully updated!');
    } catch (err) {
        console.log(err);
        alert('Fail');
    }
  }

  getEmailValue = (event) => {
    this.setState({});
  }

  render() {
    return (
      <StyledWrapper>
        <ChangeInfoComponent
          changeInfo={this.changeUserInfo}
          getEmail={this.getEmailValue}
          getPhoneNumber={this.getPhoneNumberValue}
          getEmail={this.getEmailValue}
          />
      </StyledWrapper>
    );
  }

}

export default ChangeInfoPage;