import React from "react";
import {
  StyledWrapper,
  StyledOption,
  StyledSelect,
  StyledInput,
  StyledButton
} from "./styles";
import axios from "axios";

class AddNewSubcategory extends React.Component {
  componentWillMount() {
    this.fillCategoryData();
  }
  state = {
    allCategories: [],
    categoryID: "",
    title: ""
  };

  handleSelect = e => {
    console.log(e.target.value);
    this.setState({ categoryID: e.target.value });
  };
  handleTitleInput = e => {
    this.setState({ title: e.target.value });
  };

  fillCategoryData = async () => {
    try {
      const response = await axios.get("/category");
      this.setState({ allCategories: response.data });
    } catch (err) {
      console.log(err);
    }
  };
  onSubmit = async event => {
    event.preventDefault();

    const form = {
      title: this.state.title
    };
    try {
      const response = await axios({
        method: "post",
        url: `/category/${this.state.categoryID}/subcategory`,
        data: form,
        config: { headers: { "Content-Type": "application/json" } }
      });
      alert('Category successfully added!');
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert('Fail!');
      window.location.reload();
    }
    console.log(form);
  };

  render() {
    return (
      <StyledWrapper>
        <form onSubmit={this.onSubmit}>
          <StyledSelect onChange={this.handleSelect}>
            <StyledOption value="">Select category</StyledOption>
            {this.state.allCategories.map((item, index) => (
              <StyledOption value={item.id} key={item.id}>
                {item.title}
              </StyledOption>
            ))}
          </StyledSelect>

          <StyledInput
            placeholder="New Subcategory"
            onChange={this.handleTitleInput}
          />
          <StyledButton type="submit">Create</StyledButton>
        </form>
      </StyledWrapper>
    );
  }
}

export default AddNewSubcategory;
