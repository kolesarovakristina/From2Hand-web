import React from 'react';
import { StyledWrapper, StyledButton, ButtonWrapper, PickFileButton, StyledMainHeader, ImageWrapper } from './styles';
import defaultImage from '../../../assets/empty.png';
class FourthPage extends React.Component {

	render() {
		return (
			<StyledWrapper>
		        <StyledMainHeader>Please, select one photo of product</StyledMainHeader>
				<input 
					required
					minLength={1}
					style={{display: 'none'}}
					type="file"
					onChange={this.props.getPhotoData}
					ref={fileInput =>this.fileInput = fileInput}
					accept="image/*"
            		encType="multipart/form-data"
				/>
				<PickFileButton onClick={() => this.fileInput.click()}>Pick File</PickFileButton>
				{this.props.defaultPhoto === true ? <ImageWrapper src={defaultImage}/> : <ImageWrapper src={this.props.inputImage} />}
				<ButtonWrapper>
					<StyledButton onClick={this.props.backTo3Page}>Previous</StyledButton>
					<StyledButton onClick={this.props.toPage5}>Next</StyledButton>
				</ButtonWrapper>
			</StyledWrapper>
		);
	}
}

export default FourthPage;
