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
		allAdverts: [],
		subcategoryAdverts: [],
		advertID: ''
	};

	componentWillMount() {
		window.sessionStorage.setItem('categoryID', this.props.match.params.id);
		this.fillStateAllAdverts();
	}

	fillStateAllAdverts = async () => {
		const id = this.props.match.params.id;
		// try {
		// 	const response = await axios({
		// 		method: 'get',
		// 		url: `/advert/category/${id}`,
		// 		config: { headers: { 'Content-Type': 'application/json' } }
		// 	});
		// 	this.setState({ allAdverts: response.data });
		// } catch (err) {
		// 	console.log(err);
		// }

		try {
			const response = await axios({
				method: 'get',
				url: `/category/${id}`,
				config: { headers: { 'Content-Type': 'application/json' } }
			});
			this.setState({ allAdverts: response.data });
			console.log('toto ', response.data);
		} catch (err) {
			console.log(err);
		}
	};

	getValueFromSubcategory = async (event) => {
		console.log(event.target.id);
		const id = event.target.id;
		try {
			const response = await axios({
				method: 'get',
				url: `/category/${id}`,
				config: { headers: { 'Content-Type': 'application/json' } }
			});
			this.setState({ allAdverts: response.data.adverts });
			console.log(response.data.adverts);
		} catch (err) {
			console.log(err);
		}
	};

	getAllAdvert = () => {
		this.fillStateAllAdverts();
	}

	render() {
		return (
			<div>
				<ButtonBack />
				<StyledWrapper>
					<Navbar getID={this.getValueFromSubcategory} 
							getAllAdvert={this.getAllAdvert}/>
					{/* <AllAdvertsWrapper>
						{this.state.allAdverts.map((item, index) => (
							<AdvertWrapper
							id={this.state.advertID}
							item={item}
							user={false}
							/>
						))}
					</AllAdvertsWrapper> */}
				</StyledWrapper>
			</div>
		);
	}
}
export default AllAdverts;
