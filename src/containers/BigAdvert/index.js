import React from "react";
import BigAdvertWrapper from "../../components/BigAdvertWrapper";
import { StyledWrapper } from "./styles";
import { MainHeader } from "../../components/MainHeader";

class BigAdvert extends React.Component {
  render() {
    return (
      <StyledWrapper>
        <BigAdvertWrapper />
      </StyledWrapper>
    );
  }
}
export default BigAdvert;
