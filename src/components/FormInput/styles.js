import styled from "styled-components";import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 30%;
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  margin: auto;
  height: 350px;
`;

export const StyledInputWrapper = styled.div``;

export const StyledInputLink = styled.input`
  padding: 5px 15px;
  font-size: 16px;
  display: inline-block;
  color: grey;
  border: 1px solid rgb(22, 131, 147);
  margin: 0;
  margin-bottom: -1px;
`;

export const StyledImage = styled.img`
  width: calc(100%);
  padding-bottom: 20px;
  // background-color: rgb(22, 131, 147);
  // padding: 20px 40px;
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 45px;
  font-size: 14px;
  border: 1px solid rgb(22, 131, 147);
  background-color: rgb(22, 131, 147);
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 5px;
  cursor: pointer;
  transition: all .15s ease-in-out;
    &:hover {
      background-color: #fff;
      color: rgb(22, 131, 147);
    }
`;

export const Or = styled.div`
    width: 100%;
    text-align: center;
    color: grey;
    margin-top: 3px;
`;
