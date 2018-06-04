import styled from "styled-components";

const disabled = {
  background: "#dddddd",
  color: "#495057",
  cursor: "no-drop",
};

export const FormControlWrapper = styled.div`
  width: 100%;
`;
export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: black 1px solid;
`;
// export const StyledInputIconWrapper = styled.div`
//   width: 55px;
//   background: ${props => props.theme.color.white};
//   color: ${props => props.theme.color.watermelon};
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export const StyledInput = styled.input`
  font-size: 14px;
  width: 100%;
  height: 40px;
  border: 1px solid;
  outline: none;
  padding: 6px 12px;

  box-sizing: border-box;
  &:focus {
    border-color: grey;
  }
`;
// export const StyledSelect = styled.select`
//  ${props => (props.disabled ? disabled : "background:white")};
// `;

export const LabelWrapper = styled.div``;
export const StyledFormGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 20px;
  width: 300px;
`;
export const CheckBoxWrapper = styled.div`
  cursor: pointer;
`;
export const RadioWrapper = styled.div`
  cursor: pointer;
`;
export const FormControlStaticWrapper = styled.span``;

export const StyledWrapper = styled.div`
  text-align: center;
`;
export const StyledContent = styled.div``;

export const StyledField = styled.div`
  width: 100%;
`;
export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledFormLabel = styled.span`
  padding-bottom: 3px;
  font-weight: bold;
  font-size: 16px;
`;
export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  &:focus {
    border-color: #01b2b7;
  }
`;
