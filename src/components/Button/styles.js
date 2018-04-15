import styled from "styled-components";

const colorSetter = color => `
  background: ${color || "transparent"};
`;

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  ${props => props.buttonColor && colorSetter("blue")};
`;
export default StyledButton;
