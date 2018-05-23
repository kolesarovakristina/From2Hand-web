import React from 'react';
import { StyledWrapper, StyledInput, StyledButton } from './styles';
import axios from 'axios';
import FormInput from '../FormInput';

class CategoryForm extends React.Component {
	state = {
		title: '',
		description: '',
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
		form.append('title', `${this.state.title}`);
		form.append('photo', `${this.state.photo}`);
		try {
			const response = await axios({
				method: 'post',
				url: '/category',
				data: form,
				config: { headers: { 'Content-Type': 'multipart/form-data' } }
			});
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<StyledWrapper>
				<form onSubmit={this.onSubmit}>
					<StyledInput type="text" onChange={this.handleTitle} />
					<StyledInput type="text" onChange={this.handleDescription} />
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
