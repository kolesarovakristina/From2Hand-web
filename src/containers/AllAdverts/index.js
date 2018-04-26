import React from "react";
import Navbar from "../../components/Navbar";
import MainHeader from "../../components/MainHeader";
import AdvertWrapper from "../../components/AdvertWrapper";
import PropTypes from "prop-types";
import  {StyledWrapper} from "./styles";
 
class AllAdverts extends React.Component{
    render(){
       return(


        
        <StyledWrapper>
            <MainHeader/>
        <Navbar/>
        <AdvertWrapper/>
     </StyledWrapper>
       )
    }
};
export default AllAdverts;