import styled from "styled-components";

const colorSetter = color => ` 
  color: ${color};
`;

const styleSetter = style => ` 
  font-style: ${style};
`;

const weightSetter = weight => `
  font-weight: ${weight};
`;

const decorationSetter = decoration => `
  text-decoration: ${decoration};
`;

const StyledTitle = styled.p`
  ${props => props.h1 && props.theme.size.h1};
  ${props => props.h2 && props.theme.size.h2};
  ${props => props.h3 && props.theme.size.h3};
  ${props => props.h4 && props.theme.size.h4};
  ${props => props.h5 && props.theme.size.h5};
  ${props => props.h6 && props.theme.size.h6};
  ${props => props.primary && props.theme.color.primary};
  ${props => props.warning && props.theme.color.warning};
  ${props => props.error && props.theme.color.error};
  ${props => props.fontColor && colorSetter(props.fontColor)};
  ${props => props.fontStyle && styleSetter(props.fontStyle)};
  ${props => props.bold && weightSetter("bold")};
  ${props => props.underline && decorationSetter("underline")};
`;

export default StyledTitle;
