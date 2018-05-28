import React from "react";
import { withRouter } from "react-router-dom";

class ButtonBack extends React.Component {
  goBack = props => {
    this.props.history.goBack();
  };
  render() {
    return <button onClick={this.goBack.bind(this)}>Back</button>;
  }
}
export default withRouter(ButtonBack);