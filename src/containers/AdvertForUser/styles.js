import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
	width: 70%;
	margin: 50px 15% 120px;
	display: inline-block;
`;

export const StyledTitle = styled.div`
	background-color: #168393;
	width: 100%;
	padding-left: 40px;
	color: white;
	font-size: 35px;
	height: 70px;
	line-height: 70px;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 1px;
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
export const StyledImageWrapper = styled.div`
	width: 45%;
	display: inline-block;
	float: left;
	`;

export const StyledImg = styled.img`
	float: left;
	width: 100%;
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
	font-size: 24px;
	color: #414f4b;
`;

export const StyledButton = styled.img`
	height: 55px;
	padding: 15px 15px 0;
	cursor: pointer;
	transition: all .15s ease-in-out;
	float: right;
	&:first-child{
		padding: 15px 40px 0 20px;
	}
`;


export const StyledInput = styled.input`
width: calc(100% - 10px);
border: 0;
font-size: 18px;
margin: 0 5px;
border-bottom: 1px solid #168393;
outline: 0;
`;

export const StyledInputTitle = styled.input`
width: 100%;
padding-left: 40px;
color: #168393;
font-size: 35px;
height: 70px;
line-height: 70px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
text-transform: uppercase;
font-weight: bold;
letter-spacing: 1px;
border: 2px solid #168393;
background: #168393;
color: #fff;
outline: 0;
`;

export const SubmitButton = styled.button`
	width: 100%;
	height: 45px;
	font-size: 16px;
	border-radius: 5px;
	border: 1px solid rgb(22, 131, 147);
	background-color: rgb(22, 131, 147);
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 1px;
	cursor: pointer;
	transition: all .15s ease-in-out;
	margin-top: 5px;
	  &:hover {
		background-color: rgb(230,230,230);
		color: rgb(22, 131, 147);
	  }
	  &:first-child{
		border: 1px solid rgb(230,230,230);
		background-color: rgb(230,230,230);
		color: rgb(22, 131, 147);
		&:hover {
			background-color: rgb(22, 131, 147);
			color: rgb(230,230,230);
		  }
	  }
`;

export const StyledOption = styled.option`
`;

export const StyledSelect = styled.select`
border: 0;
font-size: 18px;
margin: 0 5px;
padding: 0;
width: calc(50% - 10px);
display: inline-block;
border-bottom: 1px solid #168393;
outline: 0;
`;

export const LoaderWrapper = styled.div`
background-color: rgba(255,255,255,.7);
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
`;

export const LoadingImage = styled.img`
	  width: 100px;
	  position: absolute;
	  top: 0; left: 0; right: 0; bottom: 0;
	  margin: auto;
`;