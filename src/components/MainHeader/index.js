import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/from2hand.png";
import {
  StyledMainHeader,
  StyledLink,
  StyledHeaderLogo,
  NewHeader,
  NewHeaderContent,
} from "./styles";

class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      isExpanded: false,
    };
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    console.log("stranka je vykreslena");
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  // updateWindowDimensions() {
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
    console.log("resizujem", this.state.width);
  };
  handleSetExpanded = () => {
    if (this.state.isExpanded === true) {
      this.setState({ isExpanded: false });
    }
    if (this.state.isExpanded === false) {
      this.setState({ isExpanded: true });
    }
  };

  render() {
    if (this.state.width < 700) {
      return (
        <NewHeader onClick={this.handleSetExpanded}>
          <button onClick={this.handleSetExpanded}>button </button>
          <NewHeaderContent isExpanded={this.state.isExpanded}>content</NewHeaderContent>
        </NewHeader>
      );
    }

    return (
      <StyledMainHeader>
        <StyledHeaderLogo src={logo} />
        <StyledLink to="/register">Sign Up</StyledLink>
        <StyledLink to="/login">Log In</StyledLink>
      </StyledMainHeader>
    );
  }
}


export default MainHeader;
