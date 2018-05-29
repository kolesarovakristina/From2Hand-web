import React from 'react';
import { StyledWrapper, StyledButton, ButtonWrapper, PickFileButton, StyledMainHeader } from './styles';

class FourthPage extends React.Component {
	render() {
		return (
			<StyledWrapper>
		        <StyledMainHeader>Please, select one photo of product</StyledMainHeader>
				<input style={{display: 'none'}} type="file" onChange={this.props.getPhotoData} ref={fileInput =>this.fileInput = fileInput}/>
				<PickFileButton onClick={() => this.fileInput.click()}>Pick File</PickFileButton>
				<ButtonWrapper>
					<StyledButton onClick={this.props.backTo3Page}>Previous</StyledButton>
					<StyledButton onClick={this.props.toPage5}>Next</StyledButton>
				</ButtonWrapper>
			</StyledWrapper>
		);
	}
}

export default FourthPage;
