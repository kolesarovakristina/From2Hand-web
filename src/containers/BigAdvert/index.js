import React from 'react';
import img from '../../assets/horse.jpg';
import ButtonBack from '../../components/ButtonBack';
import axios from 'axios';
import {
	StyledWrapper,
	StyledTitle,
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
	StyledExpandButton
} from './styles';
import { LoaderWrapper, LoadingImage } from '../AdvertForUser/styles';
import loading from '../../assets/loading.gif';

class BigAdvert extends React.Component {
	state = {
		isExpand: false,
		advertData: {},
		userData: {},
		loading:true
	};

	showExpand = () => {
		this.setState({ isExpand: true });
	};

	closeExpand = () => {
		this.setState({ isExpand: false });
	};

	componentWillMount(){
		this.fillStateData();
	}

	fillStateData = async () => {
		const id =  this.props.match.params.id;
		try {
			const response = await axios({
				method: 'get',
				url: `/advert/${id}`,
				config: { headers: { 'Content-Type': 'application/json' } }
			});
			this.setState({ 
				advertData: response.data,
				userData: response.data.user,
				loading: false
			 });
			

			
		} catch (err) {
			console.log(err);
		}
	};


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
		return (
			<div>
			<ButtonBack />
			<StyledWrapper>
				<StyledTitle>{this.state.advertData.name}</StyledTitle>
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
export default BigAdvert;
