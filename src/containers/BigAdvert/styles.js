import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
	width: 70%;
	margin: 50px 15% 120px;
	display: inline-block;
`;

export const StyledTitle = styled.div`
	background-color: #168393;
	width: 100%;
	padding: 5px 0;
	padding-left: 40px;
	color: white;
	font-size: 40px;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 1.5px;
`;
export const StyledDescWrapper = styled.div`
	width: 100%;
	background-color: white;
	padding: 20px;
`;
export const StyledUserInfo = styled.div`
	font-size: 15px;
	border-bottom-right-radius: 5px;
	border-bottom-left-radius: 5px;
	width: 100%;
	background-color: rgb(230, 230, 230);
	padding: 20px;
`;
export const StyledWrapperDescAndInfo = styled.div`
	width: 55%;
	float: left;
`;
export const StyledImageWrapper = styled.div`width: 45%;`;

export const StyledImg = styled.img`
	float: left;
	width: 100%;
	border-bottom-left-radius: 5px;
`;
export const StyledImgIsExpand = styled.img`width: 100%;`;
export const StyledExpandWrapper = styled.div`
	width: 50%;
	margin: 100px auto;
	position: relative;
`;
export const StyledExpandButton = styled.span`
	position: absolute;
	top: -35px;
	right: -30px;
	font-size: 30px;
	color: white;
	&:hover {
		cursor: pointer;
		font-weight: bold;
	}
`;
export const StyledOverlay = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 5;
	background-color: rgba(000, 000, 000, 0.8);
`;
export const StyledDesc = styled.div`
	padding: 0 5px;
	font-size: 18px;
`;
export const StyledTitleI = styled.div`
	padding: 5px;
	font-weight: bold;
	font-size: 25px;
	color: #414f4b;
`;
