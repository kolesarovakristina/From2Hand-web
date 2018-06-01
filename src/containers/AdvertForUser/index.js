import React from "react";
import BigAdvert from '../../components/BigAdvertWrapper';
import ButtonBack from '../../components/ButtonBack';
import img from '../../assets/horse.jpg';
import { confirmAlert } from 'react-confirm-alert';
import axios from 'axios';
import deleteImage from '../../assets/deleteAdvert.png';
import updateImage from '../../assets/edit.png';
import loading from '../../assets/loading.gif';
import base64 from "base-64";

import {
	StyledWrapper,
	StyledTitle,
	StyledInput,
	StyledInputTitle,
	SubmitButton,
	StyledImg,
	StyledDesc,
	StyledDescWrapper,
	StyledTitleI,
	StyledUserInfo,
	StyledImageWrapper,
	StyledWrapperDescAndInfo,
	StyledOverlay,
	StyledImgIsExpand,
	StyledExpandWrapper,
	StyledExpandButton,
	StyledButton,
	StyledSelect,
	StyledOption,
	LoaderWrapper,
	LoadingImage
} from './styles';


class AdvertForUser extends React.Component {
    state = {
		isExpand: false,
		advertData: {},
		userData: {},
		updateAdvert: false,
		loading:true,
		name: '',
		descr: '',
		district: '',
		price: ''
	};

	showExpand = () => {
		this.setState({ isExpand: true });
	};

	closeExpand = () => {
		this.setState({ isExpand: false });
	};

	componentWillMount(){
		this.fillStateData();
		const token = JSON.parse(window.sessionStorage.getItem("token")) || null;
		if(token){
			const parsedToken = token.data.split(".");
			const role = JSON.parse(base64.decode(parsedToken[1]));
		}
		else{
			this.props.history.push("/");
		}
	}

	fillStateData = async () => {
		const id =  this.props.match.params.id;
		try {
			const response = await axios({
				method: 'get',
				url: `/advert/${id}`,
				config: { headers: { 'Content-Type': 'application/json' } }
			});
			this.setState({ advertData: response.data });
			this.setState({userData: response.data.user});
			this.handleInit( response.data );
			this.setState({loading: false});
		} catch (err) {
			console.log(err);
		}
	};
	handleInit = (advertObject) => {
		console.log(advertObject);
		this.setState({
			name: advertObject.name,
			descr: advertObject.descr,
			price: advertObject.price,
			district: advertObject.district
		})
	}
	
    deleteAdvertWrapper = async (id) => {
		try {
			const response = await axios({
				method: 'delete',
				url: `/advert/${id}`,
				config: { headers: { 'Content-Type': 'application/json' } }
			});
            this.props.history.push("/dashboard/homePage");
		} catch (err) {
            console.log(err);
            alert('Something went wrong. Please, try again.');
		}
	  }

	  updateAdvertInfo = (event) => {
		event.preventDefault();
		const id = event.target.id;
		confirmAlert({
			title: 'Confirm to delete',
			message: 'Are you sure to delete this advert?',
			buttons: [
			  {
				label: 'Yes',
				onClick: () => this.handleUpdateInfo(id)
			  },
			  {
				label: 'No',
				onClick: () => window.location.reload()
			  }
			]
		  })
	  }
	  
	  handleUpdateInfo = async(id) => {
		const form = {
			descr: this.state.descr,
			district: this.state.district,
			name: this.state.name,
			price: this.state.price
		};

		try {
			const response = await axios({
				method: 'put',
				url: `/advert/${id}`,
				data: form,
				config: { headers: { "Content-Type": "aplication/json" } }
			});
			this.fillStateData();
			this.setState({updateAdvert:false});
		} catch (err) {
			console.log(err);
            alert('Something went wrong. Please, try again.');
		}
	  }

	  deleteAdvert = (event) => {
		const id = event.target.id;
		confirmAlert({
			title: 'Confirm to delte',
			message: 'Are you sure to delete this advert?',
			buttons: [
			  {
				label: 'Yes',
				onClick: () => this.deleteAdvertWrapper(id)
			  },
			  {
				label: 'No',
				onClick: () => window.location.reload()
			  }
			]
		  })
	  }

	  handleUpdateState = () => {
		  this.setState({updateAdvert: true});
	  }

	  goBack = () => {
		this.setState({updateAdvert: false});
	  }

	  getValueFromName = event => {
		  this.setState({name: event.target.value});
	  }

	  getValueFromDesc = event => {
		  this.setState({descr: event.target.value});
	  }

	  getValueFromDistrict = event => {
		  this.setState({district: event.target.value},()=>{
			  console.log('state',this.state.district);
		  });
	  }

	  getValueFromPrice = event => {
		  this.setState({price: event.target.value});
	  }

	  render() {
		if(this.state.loading){
			return(
				<LoaderWrapper>
					<LoadingImage src={loading}/>
				</LoaderWrapper>
			)
		}

		if (this.state.isExpand) {
			return (
				<StyledOverlay>
					<StyledExpandWrapper>
						<StyledImgIsExpand src={`data:image;base64,${this.state.advertData.photoAdvert.data}`} />
						<StyledExpandButton onClick={this.closeExpand}>X</StyledExpandButton>
					</StyledExpandWrapper>
				</StyledOverlay>
			);
		}

		if(this.state.updateAdvert === true){
			return (
				<StyledWrapper>
					<form id={this.state.advertData.id} onSubmit={this.updateAdvertInfo}>
					<StyledInputTitle minLength={10} required onChange={this.getValueFromName} type='text' value={this.state.name}/>

					<StyledImageWrapper>
						<StyledImg src={`data:image;base64,${this.state.advertData.photoAdvert.data}`}/>
					</StyledImageWrapper>

					<StyledWrapperDescAndInfo>

						<StyledDescWrapper>
							<StyledTitleI>DETAILS:</StyledTitleI>
							<StyledTitleI>Description:</StyledTitleI>
							<StyledInput 
								required minLength={20}
								maxLength={255}
								onChange={this.getValueFromDesc}
								type='text'
								value={this.state.descr}/>
							<StyledTitleI>Location:</StyledTitleI>
							<StyledSelect required onChange={this.getValueFromDistrict} value={this.state.district}>
								<StyledOption value="Košice 1">Košice 1</StyledOption>
								<StyledOption value="Košice 2">Košice 2</StyledOption>
								<StyledOption value="Košice 3">Košice 3</StyledOption>
								<StyledOption value="Košice 4">Košice 4</StyledOption>
							</StyledSelect>
							<StyledTitleI>Price:</StyledTitleI>
							<StyledInput required maxLength={10} onChange={this.getValueFromPrice} type='number' value={this.state.price}/>
						</StyledDescWrapper>

						<StyledUserInfo>
							<StyledTitleI>CONTACT:</StyledTitleI>
							<StyledTitleI>Name:</StyledTitleI>
							<StyledDesc>{this.state.userData.username}</StyledDesc>
							<StyledTitleI>Telephone Number:</StyledTitleI>
							<StyledDesc>{this.state.userData.phonenumber}</StyledDesc>
							<StyledTitleI>Email address:</StyledTitleI>
							<StyledDesc>{this.state.userData.email}</StyledDesc>
						</StyledUserInfo>

					<SubmitButton type='submit'>Submit</SubmitButton>
					</StyledWrapperDescAndInfo>
            	</form>
					<SubmitButton style={{width: '60%', float:'right'}} onClick={this.goBack}>Back</SubmitButton>
        	 </StyledWrapper>
			);
		}


		return (
			<div>
			<ButtonBack />
			<StyledWrapper>
				<StyledTitle>
					{this.state.advertData.name}
					<StyledButton src={deleteImage} id={this.state.advertData.id} onClick={this.deleteAdvert}/>
					<StyledButton src={updateImage} id={this.state.advertData.id} onClick={this.handleUpdateState}/>
				</StyledTitle>
				<StyledImageWrapper>
					<StyledImg src={`data:image;base64,${this.state.advertData.photoAdvert.data}`} onClick={this.showExpand} />
				</StyledImageWrapper>
				<StyledWrapperDescAndInfo>
					<StyledDescWrapper>
						<StyledTitleI>DETAILS:</StyledTitleI>
						<StyledTitleI>Description:</StyledTitleI>
						<StyledDesc>
							{this.state.advertData.descr}
						</StyledDesc>
						<StyledTitleI>Location:</StyledTitleI>
						<StyledDesc>{this.state.advertData.district}</StyledDesc>
						<StyledTitleI>Price:</StyledTitleI>
						<StyledDesc>{this.state.advertData.price}€</StyledDesc>
					</StyledDescWrapper>
					<StyledUserInfo>
						<StyledTitleI>CONTACT:</StyledTitleI>
						<StyledTitleI>Name:</StyledTitleI>
						<StyledDesc>{this.state.userData.username}</StyledDesc>
						<StyledTitleI>Telephone Number:</StyledTitleI>
						<StyledDesc>{this.state.userData.phonenumber}</StyledDesc>
						<StyledTitleI>Email address:</StyledTitleI>
						<StyledDesc>{this.state.userData.email}</StyledDesc>
					</StyledUserInfo>
				</StyledWrapperDescAndInfo>
			</StyledWrapper>
			</div>
		);
	}
}
export default AdvertForUser;