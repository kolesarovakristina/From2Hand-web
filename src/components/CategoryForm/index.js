import React from 'react';
import { StyledWrapper, StyledInput, StyledButton } from './styles';
import axios from 'axios';
import FormInput from '../FormInput';

class CategoryForm extends React.Component {
	state = {
		title: '',
		photo: ''
	};

	handleTitle = (e) => {
		console.log(e.target.value);
		this.setState({ title: e.target.value });
	};
	handleDescription = (e) => {
		console.log(e.target.value);
		this.setState({ description: e.target.value });
	};

	handleSetFile = (e) => {
		const imageFile = e.target.files[0];

		this.setState({ photo: imageFile });
	};

	onSubmit = async (event) => {
		event.preventDefault();
		const form = new FormData();
<<<<<<< HEAD
		form.append('title', `${this.state.title}`);
		form.append('photo', `${this.state.photo}`);
=======
		form.append('photo', this.state.photo);
		form.append('title', this.state.title);

>>>>>>> d7a14d7a4259fbbfe4fc06f73604b132156ec6ac
		try {
			const response = await axios({
				method: 'post',
				url: '/category',
				mimeType: 'multipart/form-data',
				data: form
			});
			console.log(form);
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<StyledWrapper>
				<form onSubmit={this.onSubmit}>
					<StyledInput type="text" onChange={this.handleTitle} onSubmit={this.onSubmit} />

					<StyledInput
						type="file"
						onChange={this.handleSetFile}
						accept="image/*"
						encType="multipart/form-data"
					/>
					<StyledButton type="submit">Send</StyledButton>
				</form>
			</StyledWrapper>
		);
	}
}
export default CategoryForm;
