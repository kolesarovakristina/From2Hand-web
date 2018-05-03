import React from "react";
import Profile from "../../components/Profile";
import MainHeader from "../../components/MainHeader";
import {StyledWrapper} from "./styles";

class ProfilePage extends React.Component{
render(){
    return(
        <div>
        <MainHeader/>
        <StyledWrapper>
            <Profile>

            </Profile>
        </StyledWrapper>
        </div>
    )
}
};
export default ProfilePage;