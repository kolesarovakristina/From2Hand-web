import React from 'react';
import Navbar from '../../components/Navbar';
import MainHeader from '../../components/MainHeader';
import Header from '../../components/Header';
import AdvertWrapper from '../../components/AdvertWrapper';
import ButtonBack from '../../components/ButtonBack';
import PropTypes from 'prop-types';
import { StyledWrapper, AllAdvertsWrapper, SearchBar } from './styles';
import axios from 'axios';	

class AllAdverts extends React.Component {
	state = {
		allAdverts: [],
		subcategoryAdverts: [],
		advertID: '',
		searchState: ''
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
				url: `/category/${id}`,
				config: { headers: { 'Content-Type': 'application/json' } }
			});
			this.setState({ allAdverts: response.data.subcategorier[1].adverts });
			console.log('all adverts ', response.data);
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

	getValueFromSearchbar = event => {
		console.log(event.target.value);
		this.setState({searchState: event.target.value});
	}
	
	render() {
		let filteredAdverts = this.state.allAdverts.filter(
			(item) => {
				return item.descr.toLowerCase().indexOf(this.state.searchState.toLowerCase()) !== -1;
			}
		);

		if(filteredAdverts.length > 0){

			return (
				<div>
				<ButtonBack />
				<StyledWrapper>
					<Navbar getID={this.getValueFromSubcategory} 
							getAllAdvert={this.getAllAdvert}/>
					<AllAdvertsWrapper>
						<SearchBar type='text' placeholder='Searchbar' onChange={this.getValueFromSearchbar}/>
						{filteredAdverts.map((item) => (
							<AdvertWrapper
							id={this.state.advertID}
							item={item}
							user={false}
							/>
						))}
					</AllAdvertsWrapper>
				</StyledWrapper>
			</div>
		);
		}

		return (
			<div>
			<ButtonBack />
			<StyledWrapper>
				<Navbar getID={this.getValueFromSubcategory} 
						getAllAdvert={this.getAllAdvert}/>
				<AllAdvertsWrapper>
					<SearchBar type='text' placeholder='Searchbar' onChange={this.getValueFromSearchbar}/>
					<div style={{textAlign: 'center', fontSize: 21, padding: 20, background: 'white', border: '2px solid rgb(22,131,147)', borderRadius: 5}}>There is no data to display</div>
				</AllAdvertsWrapper>
			</StyledWrapper>
		</div>
	);
	}
}
export default AllAdverts;
