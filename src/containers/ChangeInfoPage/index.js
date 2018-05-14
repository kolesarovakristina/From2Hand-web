import React from "react";
import ChangeInfoComponent from '../../components/ChangeInfoComponent';
import { StyledWrapper } from "./styles";

class ChangeInfoPage extends React.Component {
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
      <StyledWrapper>
        <ChangeInfoComponent />
      </StyledWrapper>
    );
  }

}

export default ChangeInfoPage;