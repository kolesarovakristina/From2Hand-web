import React from 'react';
import Navbar from '../../components/Navbar';
import MainHeader from '../../components/MainHeader';
import Header from '../../components/Header';
import AdvertWrapper from '../../components/AdvertWrapper';
import ButtonBack from '../../components/ButtonBack';
import Menu from '../../components/subcategoryMenu';
import PropTypes from 'prop-types';
import { StyledWrapper, AllAdvertsWrapper, SearchBar } from './styles';
import axios from 'axios';	
import { LoadingImage, LoaderWrapper } from "../AdvertForUser/styles";
import loading from '../../assets/loading.gif';

class AllAdverts extends React.Component {
	
	state = {
		allAdverts: [],
		subcategoryAdverts: [],
		advertID: '',
		searchState: '',
		loading:true,
		menu: true,
		subcategory: ''
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
			this.setState({
				subcategoryAdverts: response.data.subcategories,
				loading: false
			});
		} catch (err) {
			console.log(err);
		}
	};

	getValueFromSubcategory = async (event) => {
		const id = event.target.id;
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
	
	getValueFromSearchbar = event => {
		this.setState({searchState: event.target.value});
	}
	
	handleMenuState = (event) => {
		this.setState({
			menu: false,
			subcategory: event.target.id
		}, async()=>{
			try {
				const response = await axios({
					method: 'get',
					url: `/advert/category/${this.state.subcategory}`,
					config: { headers: { 'Content-Type': 'application/json' } }
				});
				this.setState({ allAdverts: response.data });
				console.log('callback',response.data);
			} catch (err) {
				console.log(err);
			}
		});
	}
	
	render() {

		if(this.state.loading){
			return(
				<LoaderWrapper>
					<LoadingImage src={loading}/>
				</LoaderWrapper>
			)
	    }

		let filteredAdverts = this.state.allAdverts.filter(
			(item) => {
				return item.descr.toLowerCase().indexOf(this.state.searchState.toLowerCase()) !== -1;
			}
		);

		if(this.state.menu === false){
			
			if(filteredAdverts.length > 0){
				return (
					<div>
				<ButtonBack />
				<StyledWrapper>
					<Navbar getID={this.getValueFromSubcategory} />
					<AllAdvertsWrapper>
						<SearchBar type='text' placeholder='Search' onChange={this.getValueFromSearchbar}/>
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
			if(filteredAdverts.length < 1){
				return (
					<div>
					<ButtonBack />
					<StyledWrapper>
						<Navbar getID={this.getValueFromSubcategory}/>
						<AllAdvertsWrapper>
							<SearchBar type='text' placeholder='Searchbar' onChange={this.getValueFromSearchbar}/>
							<div style={{textAlign: 'center', fontSize: 21, padding: 20, background: 'rgb(230,230,230)', borderRadius: 5}}>There is no data to display</div>
						</AllAdvertsWrapper>
					</StyledWrapper>
				</div>
			);

			}
		}

		return (
			<div>
			<ButtonBack />
			<Menu menu={this.handleMenuState} />
		</div>

		)

	}
}
export default AllAdverts;
