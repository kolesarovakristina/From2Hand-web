import React from "react";
import { StyledH1, StyledWrapper } from "./styles";
import Title from "../../components/Title";

const AddNewPage = () => (
  <React.Fragment>
    <StyledWrapper>
      <StyledH1>age</StyledH1>

      <Title h1 underline bold fontColor="red" fontStyle="italic">
          TEST H1
      </Title>
      <Title h2 underline fontColor="blue">
          TEST H2
      </Title>
      <Title h3 fontColor="green">
          TEST H3
      </Title>
      <Title h4 fontStyle="italic">
          TEST H4
      </Title>
      <Title h5 bold>
          TEST H5
      </Title>
      <Title h6> TEST H6 </Title>
      <Title> TEST P </Title>
      <Title warning> TEST P warning</Title>
      <Title error> TEST P error</Title>
    </StyledWrapper>
  </React.Fragment>
);

export default AddNewPage;
