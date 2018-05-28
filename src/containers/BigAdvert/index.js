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
	StyledWrapperDescAndInfo
} from './styles';

class BigAdvert extends React.Component {
	render() {
		return (
			<StyledWrapper>
				<ButtonBack/>
				<StyledTitle>Some Title</StyledTitle>
				<StyledImageWrapper>
					<StyledImg src={img} />
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
