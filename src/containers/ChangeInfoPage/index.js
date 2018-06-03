import React from "react";
import ChangeInfoComponent from '../../components/ChangeInfoComponent';
import { StyledWrapper } from "./styles";
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
class ChangeInfoPage extends React.Component {
  state = {
    userInfo: [],
    token: '',
    email: '',
    phonenumber: '',
    password: ''
  }

  componentWillMount() {
    
    const token = JSON.parse(window.sessionStorage.getItem("token")) || null;
    if (token === null){
      this.props.history.push("/login");
    }

    this.setState({
        token: token.data,
        password: window.sessionStorage.getItem("pass")
      }, ()=>{
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
      this.setState({ userInfo: response.data });
      this.handleInit( response.data );
    } catch (err) {
        console.log(err);
    }
  };

  handleInit = (userObject) => {
		console.log('handle init',userObject);
		this.setState({
			email: userObject.email,
			password: JSON.parse(this.state.password),
			phonenumber: userObject.phonenumber
		})
	}

  changeUserInfo = (event) => {
    const id = this.state.userInfo.id;
    console.log('id',id);
    event.preventDefault();

    confirmAlert({
			title: 'Confirm to delete',
			message: 'Are you sure to delete this advert?',
			buttons: [
			  {
				label: 'Yes',
				onClick: () => this.handleUpdateInfo(id)
			  },
			  {
				label: 'No',
				onClick: () => window.location.reload()
			  }
			]
		  })
  }

  handleUpdateInfo =async(id)=>{
    const form = {
			email: this.state.email,
			phonenumber: this.state.phonenumber,
			password: this.state.password
		};
    console.log('form',form);

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
    this.setState({email: event.target.value});
  }

  getPhoneNumberValue = (event) => {
    this.setState({phonenumber: event.target.value});
  }

  getPasswordValue = (event) => {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <StyledWrapper>
        <ChangeInfoComponent
          email={this.state.email}
          phonenumber={this.state.phonenumber}
          password={this.state.password}
          changeInfo={this.changeUserInfo}
          getEmail={this.getEmailValue}
          getPhoneNumber={this.getPhoneNumberValue}
          getPassword={this.getPasswordValue}
          />
      </StyledWrapper>
    );
  }

}

export default ChangeInfoPage;