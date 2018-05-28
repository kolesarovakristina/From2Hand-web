import React from 'react';
import Navbar from '../../components/Navbar';
import MainHeader from '../../components/MainHeader';
import Header from '../../components/Header';
import AdvertWrapper from '../../components/AdvertWrapper';
import ButtonBack from '../../components/ButtonBack';
import PropTypes from 'prop-types';
import { StyledWrapper, AllAdvertsWrapper } from './styles';
import axios from 'axios';

class AllAdverts extends React.Component {
	state = {
		allAdverts: []
	};

	componentWillMount() {
		window.sessionStorage.setItem('categoryID', this.props.match.params.id);
		this.fillStateAllAdverts();
	}

	fillStateAllAdverts = async () => {
		const id = this.props.match.params.id;
		try {
			const response = await axios({
				method: 'get',
				url: `/advert/category/${id}`,
				config: { headers: { 'Content-Type': 'application/json' } }
			});
			this.setState({ allAdverts: response.data });
		} catch (err) {
			console.log(err);
		}
	};

	getValueFromSubcategory = (event) => {
		console.log(event.target.id);
	};

	render() {
		return (
			<StyledWrapper>
				<Navbar getID={this.getValueFromSubcategory} />
				<ButtonBack />
				<AllAdvertsWrapper>
					{this.state.allAdverts.map((item, index) => (
						<AdvertWrapper
							title={item.name}
							description={item.descr}
							price={item.price + '€'}
							location={item.city}
							poziciaVpoli={index}
							id={item.id}
							user={false}
						/>
					))}
				</AllAdvertsWrapper>
			</StyledWrapper>
		);
	}
}
export default AllAdverts;
