import React from "react";
import BigAdvert from '../../components/BigAdvertWrapper';
import ButtonBack from '../../components/ButtonBack';
import img from '../../assets/horse.jpg';
import { confirmAlert } from 'react-confirm-alert';
import axios from 'axios';
import {
	StyledWrapper,
	StyledTitle,
	StyledImg,
	StyledDesc,
	StyledDescWrapper,
	StyledTitleI,
	StyledUserInfo,
	StyledImageWrapper,
	StyledWrapperDescAndInfo,
	StyledOverlay,
	StyledImgIsExpand,
	StyledExpandWrapper,
	StyledExpandButton
} from './styles';


class AdvertForUser extends React.Component {
    state = {
		isExpand: false,
		advertData: {},
		userData: {}
	};

	showExpand = () => {
		this.setState({ isExpand: true });
	};

	closeExpand = () => {
		this.setState({ isExpand: false });
	};

	componentWillMount(){
		this.fillStateData();
	}

	componentDidMount(){
		console.log('s t a t e 2 ',this.state.advertData);
	}

	fillStateData = async () => {
		const id =  this.props.match.params.id;
		try {
			const response = await axios({
				method: 'get',
				url: `/advert/${id}`,
				config: { headers: { 'Content-Type': 'application/json' } }
			});
			this.setState({ advertData: response.data }, ()=>{
				console.log('state ',this.state.advertData.user);
			});
			this.setState({userData: response.data.user})
			console.log(response.data);
		} catch (err) {
			console.log(err);
		}
    };
    deleteAdvertWrapper = async (id) => {
        console.log(id);
		try {
			const response = await axios({
				method: 'delete',
				url: `/advert/${id}`,
				config: { headers: { 'Content-Type': 'application/json' } }
			});
            alert('Advert has been deleted');
            this.props.history.push("/dashboard/homePage");
		} catch (err) {
            console.log(err);
            alert('Error');
		}
      }
	  deleteAdvert = (id) => {
        return (
          <div
            onClick={() => {
                
                confirmAlert({
                    title: 'Confirm to submit',
                    message: 'Are you sure?',
                    buttons: [
                      {
                        label: 'Yes',
                        onClick: () => this.deleteAdvertWrapper(id)
                      },
                      {
                        label: 'No',
                        onClick: () => window.location.reload()

                      }
                    ]
                  })
            }}
          >
         
          </div>
        );
      }




	render() {
		if (this.state.isExpand) {
			return (
				<StyledOverlay>
					<StyledExpandWrapper>
						<StyledImgIsExpand src={`data:image;base64,${this.state.advertData.photoAdvert.data}`} />
						<StyledExpandButton onClick={this.closeExpand}>X</StyledExpandButton>
					</StyledExpandWrapper>
				</StyledOverlay>
			);
		}
		return (
			<div>
			<ButtonBack />
            <button onClick={this.deleteAdvertWrapper}></button>
			<StyledWrapper>
				<StyledTitle>{this.state.advertData.name}</StyledTitle>
				<StyledImageWrapper>
					<StyledImg src={img} onClick={this.showExpand} />
				</StyledImageWrapper>
				<StyledWrapperDescAndInfo>
					<StyledDescWrapper>
						<StyledTitleI>Description:</StyledTitleI>
						<StyledDesc>
							{this.state.advertData.descr}
						</StyledDesc>
						<StyledTitleI>Location:</StyledTitleI>
						<StyledDesc>{this.state.advertData.district}, {this.state.advertData.cityDistrict}</StyledDesc>
						<StyledTitleI>Price:</StyledTitleI>
						<StyledDesc>{this.state.advertData.price}€</StyledDesc>
					</StyledDescWrapper>
					<StyledUserInfo>
						<StyledTitleI>CONTACT:</StyledTitleI>
						<StyledTitleI>Name:</StyledTitleI>
						<StyledDesc>{this.state.userData.username}</StyledDesc>
						<StyledTitleI>Telephone Number:</StyledTitleI>
						<StyledDesc>{this.state.userData.phonenumber}</StyledDesc>
						<StyledTitleI>Email address:</StyledTitleI>
						<StyledDesc>{this.state.userData.email}</StyledDesc>
					</StyledUserInfo>
				</StyledWrapperDescAndInfo>
			</StyledWrapper>
			</div>
		);
	}
}
export default AdvertForUser;



    /**state = {
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
*/
