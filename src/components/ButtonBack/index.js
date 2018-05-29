import React from "react";
import { withRouter } from "react-router-dom";
import image from '../../assets/back-arrow.png';
import { StyledButton } from "./styles";
import ReactTooltip from 'react-tooltip';


class ButtonBack extends React.Component {
  goBack = props => {
    this.props.history.goBack();
  };
  render() {
    return (
      <span>
     <StyledButton data-tip data-for='backButton' src={image} onClick={this.goBack.bind(this)} />
     <ReactTooltip id='backButton' effect='solid' place='bottom' type='dark' >
        <span>Go Back</span>
     </ReactTooltip>
      </span>
     );
  }
}
export default withRouter(ButtonBack);