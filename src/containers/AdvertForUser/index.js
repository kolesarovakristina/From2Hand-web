import React from "react";
import PropTypes from "prop-types";
import BigAdvert from '../../components/BigAdvertWrapper';
import {StyledWrapper} from './styles';

class AdvertForUser extends React.Component {

    
    state = {
        showUpdateForm : false
    }
    
    handleShowUpdateForm = () => {
        this.setState({showUpdateForm:true});
            
    }
    
    
    handleHideUpdateForm = () => {
        this.setState({showUpdateForm:false});
    }
    
    
    render() {
    if (this.state.showUpdateForm) {
        return (
            <div>
                <form />
                <button onClick={this.handleHideUpdateForm}>CLOSE FORM</button>
            </div>
        )
    }
        return (
            <StyledWrapper>
                <BigAdvert />
                <div onClick={this.handleShowUpdateForm}>MENU</div>
            </StyledWrapper>
        );  
  }
}
export default AdvertForUser;
