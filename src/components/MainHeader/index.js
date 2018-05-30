import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../../assets/from2hand.png";
import plusButton from "../../assets/circular-button.png";
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import base64 from "base-64";
import {
  StyledMainHeader,
  StyledLink,
  StyledHeaderLogo,
  NewHeader,
  NewHeaderContent,
  StyledCategory,
  StyledLogOut,
  StyledButton,
  StyledImage
} from "./styles";

class MainHeader extends React.Component {
  state = {
    isLoged: false, //na true je nahradene login sing in buttonom LOG OUT,
    role: '',
    token: ''
  };

  componentWillMount() {
    const token = JSON.parse(window.sessionStorage.getItem("token")) || null;
    if(token){
      const parsedToken = token.data.split(".");
      const role = JSON.parse(base64.decode(parsedToken[1]));
      this.setState({role: JSON.parse(base64.decode(parsedToken[1]))});
      this.setState({token: JSON.parse(window.sessionStorage.getItem("token"))});
    }
    

    if (token !== null) {
      this.setState({ isLoged: true });
    }
  }
  
  logOut = () => {
    console.log("logout");
    this.setState({ isLoged: false });
    window.sessionStorage.removeItem("token");
    this.props.history.push("/dashboard/homePage");
    
  };

  render() {
    if (this.state.isLoged) {
      if (this.state.role.auth[0].authority === "ROLE_USER" && this.state.token !== null) {
          return (
            <StyledMainHeader>
            <Link to='/'> <StyledHeaderLogo src={logo} /></Link>

            <StyledLink to="/dashboard/user/info">My Profile</StyledLink>
            <StyledButton onClick={this.logOut}>Log Out</StyledButton>
            <StyledLink to="/">Home</StyledLink>
            <Link to='/dashboard/addAdvert'>
              <StyledImage data-tip data-for='plusButton' src={plusButton}/>
            </Link>
            <ReactTooltip id='plusButton' effect='solid' place='left' type='light' >
              <span>Add new advert</span>
            </ReactTooltip>
          </StyledMainHeader>
        );
      }
      else if(this.state.role.auth[0].authority === "ROLE_ADMIN" && this.state.token !== null) {
          return (
            <StyledMainHeader>
            <Link to='/'> <StyledHeaderLogo src={logo} /></Link>
            <StyledButton onClick={this.logOut}>Log Out</StyledButton>
            <StyledLink to='/dashboard/admin/allAdverts'>Admin</StyledLink>
            <StyledLink to="/">Home</StyledLink>
          </StyledMainHeader>
        );
      }
    }

    return (
      <StyledMainHeader>
        <Link to='/'> <StyledHeaderLogo src={logo} /></Link>
        <StyledLink to="/registration">Sign Up</StyledLink>
        <StyledLink to="/login">Log In</StyledLink>
        <StyledLink to="/">Home</StyledLink>
      </StyledMainHeader>
    );
  }
}

export default withRouter(MainHeader);
