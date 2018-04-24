import React from "react";
import { SearchWrapper, SearchBox } from "./styles";

const SearchComponent = () => (
  <SearchWrapper>
    <SearchBox>
      What:
      <input type="text" />
      City:
      <input type="text" />
      Price from:
      <input type="text" />
      To:
      <input type="text" />
    </SearchBox>
  </SearchWrapper>
);
export default SearchComponent;
