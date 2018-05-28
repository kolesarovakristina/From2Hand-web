import React from 'react';
import img from '../../assets/horse.jpg';
import ButtonBack from '../../components/ButtonBack';
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
		isExpand: false
	};

	showExpand = () => {
		this.setState({ isExpand: true });
	};

	closeExpand = () => {
		this.setState({ isExpand: false });
	};
	render() {
		if (this.state.isExpand) {
			return (
				<StyledOverlay>
					<StyledExpandWrapper>
						<StyledImgIsExpand src={img} />
						<StyledExpandButton onClick={this.closeExpand}>X</StyledExpandButton>
					</StyledExpandWrapper>
				</StyledOverlay>
			);
		}
		return (
			<StyledWrapper>
				<ButtonBack />
				<StyledTitle>Some Title</StyledTitle>
				<StyledImageWrapper>
					<StyledImg src={img} onClick={this.showExpand} />
				</StyledImageWrapper>
				<StyledWrapperDescAndInfo>
					<StyledDescWrapper>
						<StyledTitleI>Description:</StyledTitleI>
						<StyledDesc>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget fringilla arcu, vel
							lobortis turpis. Vestibulum scelerisque vulputate convallis. Integer quis mauris pretium,
							faucibus risus sed, egestas purus
						</StyledDesc>
						<StyledTitleI>Location:</StyledTitleI>
						<StyledDesc>Košice 1, Kavečany</StyledDesc>
						<StyledTitleI>Price:</StyledTitleI>
						<StyledDesc>1000€</StyledDesc>
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
		);
	}
}
export default BigAdvert;
