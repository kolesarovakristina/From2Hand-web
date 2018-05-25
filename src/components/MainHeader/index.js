import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../../assets/from2hand.png";
import {
  StyledMainHeader,
  StyledLink,
  StyledHeaderLogo,
  NewHeader,
  NewHeaderContent,
  StyledCategory,
  StyledLogOut
} from "./styles";

class MainHeader extends React.Component {
  state = {
    isLoged: false //na true je nahradene login sing in buttonom LOG OUT
  };

  componentWillMount() {
    const token = JSON.parse(window.sessionStorage.getItem("token")) || null;

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
      return (
        <StyledMainHeader>
          <StyledHeaderLogo src={logo} />
          <button onClick={this.logOut}>Log Out</button>
        </StyledMainHeader>
      );
    }

    return (
      <StyledMainHeader>
        <StyledHeaderLogo src={logo} />
        <StyledLink to="/registration">Sign Up</StyledLink>
        <StyledLink to="/login">Log In</StyledLink>
      </StyledMainHeader>
    );
  }
}

export default withRouter(MainHeader);
