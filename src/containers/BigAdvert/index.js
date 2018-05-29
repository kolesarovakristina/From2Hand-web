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

class BigAdvert extends React.Component {
	state = {
		isExpand: false,
		advertData: {}
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

	componentDidMount(){
		console.log('state 2 ',this.state.advertData);
	}

	fillStateData = async () => {
		const id =  this.props.match.params.id;
		try {
			const response = await axios({
				method: 'get',
				url: `/advert/${id}`,
				config: { headers: { 'Content-Type': 'application/json' } }
			});
			this.setState({ advertData: response.data }, ()=>{
				console.log('state ',this.state.advertData);
			});
			console.log(response.data);
		} catch (err) {
			console.log(err);
		}
	};
	

	render() {
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
					<StyledImg src={img} onClick={this.showExpand} />
				</StyledImageWrapper>
				<StyledWrapperDescAndInfo>
					<StyledDescWrapper>
						<StyledTitleI>Description:</StyledTitleI>
						<StyledDesc>
							{this.state.advertData.descr}
						</StyledDesc>
						<StyledTitleI>Location:</StyledTitleI>
						<StyledDesc>{this.state.advertData.district}, {this.state.advertData.cityDistrict}</StyledDesc>
						<StyledTitleI>Price:</StyledTitleI>
						<StyledDesc>{this.state.advertData.price}€</StyledDesc>
					</StyledDescWrapper>
					<StyledUserInfo>
						<StyledTitleI>CONTACT:</StyledTitleI>
						<StyledTitleI>Name:</StyledTitleI>
						<StyledDesc>Ivan Hrozny</StyledDesc>
						<StyledTitleI>Telephone Number:</StyledTitleI>
						<StyledDesc>09123456</StyledDesc>
						<StyledTitleI>Email address:</StyledTitleI>
						<StyledDesc>ivako@mail.com</StyledDesc>
					</StyledUserInfo>
				</StyledWrapperDescAndInfo>
			</StyledWrapper>
			</div>
		);
	}
}
export default BigAdvert;
