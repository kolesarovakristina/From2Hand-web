import React from 'react';
import { StyledWrapper, NavHeader, NavCategory } from './styles';
import axios from 'axios';

class subcategoryMenu extends React.Component {
	
	
    state = {
        categoryData: [],
        subcategoryData: []
    }

    componentWillMount() {
        this.fillStateCategoryData();
    }

    fillStateCategoryData = async () => {
        const id = window.sessionStorage.getItem("categoryID");
        try {
            const response = await axios({
              method: "get",
              url: `/category/${id}`,
              config: { headers: { "Content-Type": "application/json" } }
            });
            this.setState({
                categoryData: response.data,
                subcategoryData: response.data.subcategories
            });
        } catch (error) {
            console.log(error);
          }
    };

	render() {

    	return (
			<StyledWrapper>
                <NavHeader>{this.state.categoryData.title}</NavHeader>
                {this.state.subcategoryData.map((item, index) => (
                    <NavCategory onClick={this.props.menu} id={item.id}>{item.title}</NavCategory>
                ))}
    	    </StyledWrapper>
	    );
	}
}
export default subcategoryMenu;
