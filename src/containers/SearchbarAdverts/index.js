import React from "react";
import axios from 'axios';
import ButtonBack from '../../components/ButtonBack';
import AdvertWrapper from '../../components/AdvertWrapper';
import { LoadingImage, LoaderWrapper } from "../AdvertForUser/styles";

import loading from '../../assets/loading.gif';
import { SearchBar } from "../AllAdverts/styles";

class SearchbarAdverts extends React.Component {

    state ={
        allAdverts: '',
        searchState: '',
        loading:true
    }

    componentWillMount(){
        this.appendDataToSession();
    }

    appendDataToSession = async() => {
        const text = window.sessionStorage.getItem('text');
        const district = window.sessionStorage.getItem('district');
        const priceFrom = window.sessionStorage.getItem('priceFrom');
        const priceTo = window.sessionStorage.getItem('priceTo');
        try {
            const response = await axios({
                method: 'get',
                url: `/advert/search/${text}/${district}/${priceFrom}/${priceTo}`,
                config: { headers: { 'Content-Type': 'application/json' } }
            });
            this.setState({
                allAdverts: response.data,
                loading: false
            });
        } catch (err) {
            console.log(err);
        }
    }

    getValueFromSearchbar = event => {
        this.setState({searchState: event.target.value});
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

    if(filteredAdverts.length > 0){

        return (
            <div style={{width:"80%", margin:"50px 10% 120px", display: 'inline-block'}}>
                <ButtonBack />
                <SearchBar type='text' placeholder='Search' onChange={this.getValueFromSearchbar} value={this.state.searchState}/>
                {filteredAdverts.map((item) => (
                    <AdvertWrapper
                    id={this.state.advertID}
                    item={item}
                    user={false}
                    />
                ))}
            </div>
        );
    }

    return (
        <div>
            <ButtonBack />
            <div style={{width:"80%", margin:"50px 10% 120px", display: 'inline-block'}}>
                <SearchBar type='text' placeholder='Search' onChange={this.getValueFromSearchbar} value={this.state.searchState}/>
                <div style={{
                        textAlign: 'center',
                        fontSize: 21,
                        padding: 20,
                        background: 'rgb(230,230,230)',
                        borderRadius: 5}}
                >There is no data to display</div>
            </div>
        </div>
    );

    }
}

export default SearchbarAdverts;
