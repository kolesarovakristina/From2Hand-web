import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 40px
  position: relative;
  display: inline-block;
  width: calc(100%);
  margin-bottom: 55px;
`;

export const AllAdvertsWrapper = styled.div`
  width: calc(80%);
  height: 100%;
  float: left;
  position: relative;
  padding-left: 15px;
`;

export const SearchBar = styled.input`
  width: 100%;
  position:relative;
  display: block;
  padding: 7px 15px;
  height: 60px;
  border-radius: 5px;
  border: 2px solid rgb(100,100,100);
  font-size: 18px;
  outline: 0;
  transition: all .2s ease-in-out;
  &:focus{
    font-size: 22px;
    // height: 50px;
  }
`;