import React from "react";
import { StyledWrapper, StyledInput, StyledButton } from "./styles";
import axios from "axios";

class CategoryForm extends React.Component {
  state = {
    title: "",
    photo: ""
  };

  handleTitle = e => {
    console.log(e.target.value);
    this.setState({ title: e.target.value });
  };
  handleDescription = e => {
    console.log(e.target.value);
    this.setState({ description: e.target.value });
  };

  handleSetFile = e => {
    const imageFile = e.target.files[0];

    this.setState({ photo: imageFile });
  };

  onSubmit = async event => {
    event.preventDefault();
    const form = new FormData();
    form.append("title", this.state.title);
    form.append("photo", this.state.photo);
    try {
      const response = await axios({
        method: "post",
        url: "/category",
        mimeType: "multipart/form-data",
        data: form
      });
      console.log(response);
      alert('Category successfully added!');
      window.location.reload();
      
    } catch (err) {
      console.log(err);
      alert('Fail!');
      window.location.reload();
    }
  };

  render() {
    return (
      <StyledWrapper>
        <StyledInput
          required
          type="text"
          onChange={this.handleTitle}
          onSubmit={this.onSubmit}
          placeholder='Enter category name'
        />

        <StyledButton onClick={() => this.fileInput.click()}>Pick Image</StyledButton>

        <form onSubmit={this.onSubmit}>
          <input
            required
            style={{display: 'none'}}
            type="file"
            onChange={this.handleSetFile}
            accept="image/*"
            encType="multipart/form-data"
            ref={fileInput =>this.fileInput = fileInput}
          />
          <StyledButton type="submit">Send</StyledButton>
        </form>
      </StyledWrapper>
    );
  }
}
export default CategoryForm;
