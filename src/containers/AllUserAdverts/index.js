import React from "react";
import AdvertWrapper from "../../components/AdvertWrapper";
import PropTypes from "prop-types";
import { StyledWrapper } from "./styles";
import axios from 'axios';

class AllUserAdverts extends React.Component {
  state = {
    userAdverts: []
  };

  componentWillMount() {
    this.fillStateData();
    console.log('advvert ',this.state.userAdverts.length);
  }

  fillStateData = async () => {
    try {
      const response = await axios.get("/advert");
      this.setState({ userAdverts: response.data });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    const idParam = this.props.match.params.id;
    console.log(this.props.novyObjekt);
  }
  render() {
    if(this.state.userAdverts.length > 0) {
      return (
        <StyledWrapper>
          {this.state.userAdverts.map((item, index) => (
            <AdvertWrapper
            item={item}
            user = {true}
            />
          ))}
        </StyledWrapper>
      );
   }

   return (
    <StyledWrapper>
      {this.state.userAdverts.map((item, index) => (
        <AdvertWrapper
        item={item}
        user = {true}
        />
      ))}
      <div style={{textAlign: 'center', fontSize: 21}}>There is no data to display</div>
    </StyledWrapper>
  );

  }
}
export default AllUserAdverts;
