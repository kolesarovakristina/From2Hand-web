import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-weight: bold;
  color: white;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 40px;
  padding: 10px 0;
  background-color: white;
`;
export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:50%
  align-items: center;
  justify-content: center;
  color: black;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 0;
  
  padding-bottom: 40px;
  background-color: rgb(22, 131, 147);
`;
export const StyledInputLink = styled.input`
  display: flex;
  font-weight: bold;
  text-transform: uppercase;
  padding: 16px 16px;
  color: grey;
  text-decoration: none;
  font-size: 20px;
  align-items: center;
  &:hover {
    border-radius: 4px;
    text-decoration: none;
    color: red;
  }
`;
