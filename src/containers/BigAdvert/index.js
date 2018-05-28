import React from 'react';
import img from '../../assets/horse.jpg';
import {
	StyledWrapper,
	StyledTitle,
	StyledImg,
	StyledDesc,
	StyledPrice,
	StyledUserInfo,
	StyledUserName,
	StyledUserNumber,
	StyledUserEmail,
	StyledDescWrapper,
	StyledLocation,
	StyledDescTitle,
	StyledLocationTitle,
	StyledPriceTitle,
	StyledContactTitle,
	StyledNameTitle,
	StyledNumberTitle,
	StyledEmailTitle
} from './styles';

class BigAdvert extends React.Component {
	render() {
		return (
			<StyledWrapper>
				<StyledTitle>Some Title</StyledTitle>
				<StyledImg src={img} />
				<StyledDescWrapper>
					<StyledDescTitle>Description:</StyledDescTitle>
					<StyledDesc>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget fringilla arcu, vel
						lobortis turpis. Vestibulum scelerisque vulputate convallis. Integer quis mauris pretium,
						faucibus risus sed, egestas purus.
					</StyledDesc>
					<StyledLocationTitle>Location:</StyledLocationTitle>
					<StyledLocation>Košice 1, Kavečany</StyledLocation>
					<StyledPriceTitle>Price:</StyledPriceTitle>
					<StyledPrice>1000€</StyledPrice>
				</StyledDescWrapper>
				<StyledUserInfo>
					<StyledContactTitle>CONTACT:</StyledContactTitle>
					<StyledNameTitle>Name:</StyledNameTitle>
					<StyledUserName>Ivan Hrozny</StyledUserName>
					<StyledNumberTitle>Telephone Number:</StyledNumberTitle>
					<StyledUserNumber>09123456</StyledUserNumber>
					<StyledEmailTitle>Email address:</StyledEmailTitle>
					<StyledUserEmail>ivako@mail.com</StyledUserEmail>
				</StyledUserInfo>
			</StyledWrapper>
		);
	}
}
export default BigAdvert;
