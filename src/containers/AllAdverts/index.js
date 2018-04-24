import React from "react";
import Navbar from "../../components/Navbar";
import AdvertWrapper from "../../components/AdvertWrapper";
import  {StyledWrapper} from "./styles";
 
class AllAdverts extends React.Component{
    render(){
       return(
        <StyledWrapper>
         
        <Navbar/>
        <AdvertWrapper/>
   
     </StyledWrapper>
       )
    }
};
export default AllAdverts;