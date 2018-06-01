import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const StyledHeaderWrapper = styled.div`
  width: 100%;
  box-shadow: 0 3px 7px 0px darkgray;
  `;
  
  export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 0;
  `;
  export const StyledNavLink = styled(NavLink)`
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
  export const StyledMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
    background-color: rgb(230,230,230);
    width: 100%;
    padding: 10px 0;
`;
export const StyledSettingsWrapper = styled.div`
  float: right;
`;

export const SearchImg = styled.img`
    margin-left: 3px;
    height: 25px;
    cursor: pointer;
`
export const StyledInput = styled.input`
  height: 30px;
  width: 200px;
  border: 0px;
  padding: 0 10px;
  margin: 6px 3px;
  border-radius: 5px;
  outline: 0;
  transition: all .1s ease-in-out;
  &:focus {
    outline: 2px solid rgb(22,131,147);
  }
`;

export const StyledSelect = styled.select`
  height: 30px;
  width: 180px;
  border: 0px;
  padding: 0 10px;
  margin: 6px 3px;
  border-radius: 5px;
  &:focus {
    outline: 2px solid rgb(22,131,147);
  }
`;

export const StyledOption = styled.option`
  &:hover {
    color: #000;
  }
`;