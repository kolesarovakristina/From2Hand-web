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
        try {
            const response = await axios.get("/category");
            this.setState({ categoryData: response.data[0] });
            this.setState({subcategoryData: response.data[0].subcategories})
            console.log(this.state.subcategoryData);
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        return(
            <StyledWrapper>
                <NavHeader>{this.state.categoryData.title}</NavHeader>
                {this.state.subcategoryData.map((item, index) => (
                    <NavCategory id={item.id}>{item.title}</NavCategory>
                ))}
            </StyledWrapper>
        );
    }
}
export default Navbar;





