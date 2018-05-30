import React from "react";
import {StyledWrapper,
        NavCategory,
        NavHeader} from "./styles";
import axios from 'axios';
class Navbar extends React.Component {

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
              url: `/advert/category/${id}`,
              config: { headers: { "Content-Type": "application/json" } }
            });
            this.setState({ categoryData: response.data });
            this.setState({ subcategoryData: response.data.subcategories });
            console.log(response.data);
        } catch (err) {
            console.log(err);
          }
    };

    render() {
        return(
            <StyledWrapper>
                <NavHeader>{this.state.categoryData.title}</NavHeader>
                <NavCategory onClick={this.props.getAllAdvert}>All</NavCategory>
                {/* {this.state.subcategoryData.map((item, index) => (
                    <NavCategory onClick={this.props.getID} id={item.id}>{item.title}</NavCategory>
                ))} */}
            </StyledWrapper>
        );
    }
}
export default Navbar;





