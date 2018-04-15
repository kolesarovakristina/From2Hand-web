import styled from "styled-components";

const colorSetter = color => ` 
  color: ${color};
`;

const StyledText = styled.p`
  ${props => props.primary && props.theme.color.primary};
  ${props => props.warning && props.theme.color.warning};
  ${props => props.error && props.theme.color.error};
  ${props => props.fontColor && colorSetter(props.fontColor)};
`;

export default StyledText;
