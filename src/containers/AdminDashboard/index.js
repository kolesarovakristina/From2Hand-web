import React from "react";
import base64 from "base-64";
import PropTypes from "prop-types";
import { Switch, Route, withRouter } from "react-router-dom";
import UserInfo from "../../containers/UserInfo";
import AdvertForUser from "../AdvertForUser";
import UserprofileSwitch from "../../components/UserprofileSwitch";
import ChangeInfo from "../../containers/ChangeInfoPage";
import AllUserAdverts from "../../containers/AdminAllAdverts";
import {
  StyledWrapper,
  StyledLink,
  StyledRightMenu,
  StyledContent
} from "./styles";
import AddNewSubcategory from "../../components/addNewSubcategory";
//to do change name to AddNewCategory
import CategoryForm from "../../components/CategoryForm";
import AdminAllAdverts from "../../containers/AdminAllAdverts";

class AdminDashboard extends React.Component {
  state = {
    person: {
      firstName: "Peter",
      lastName: "Novak"
    }
  };

  componentWillMount() {
    const token = JSON.parse(window.sessionStorage.getItem("token")) || null;
    const parsedToken = token.data.split(".");
    const role = JSON.parse(base64.decode(parsedToken[1]));
    if (role.auth[0].authority === "ROLE_USER" && token !== null) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <StyledWrapper>
        <StyledRightMenu>
          <StyledLink
            to="/dashboard/admin/allAdverts"
            activeStyle={{
              background: "rgb(22,131,147)",
              color: "rgb(255,255,255)",
              fontSize: 25,
              fontWeight: "bold"
            }}
          >
            All adverts
          </StyledLink>
          <StyledLink
            to="/dashboard/admin/addCategory"
            activeStyle={{
              background: "rgb(22,131,147)",
              color: "rgb(255,255,255)",
              fontSize: 25,
              fontWeight: "bold"
            }}
          >
            Add new Category
          </StyledLink>
          <StyledLink
            to="/dashboard/admin/addSubcategory"
            activeStyle={{
              background: "rgb(22,131,147)",
              color: "rgb(255,255,255)",
              fontSize: 25,
              fontWeight: "bold"
            }}
          >
            Add New subcategory
          </StyledLink>
        </StyledRightMenu>
        <StyledContent>
          <Switch>
            <Route path="/dashboard/admin/allAdverts" component={AdminAllAdverts}/>
            <Route path="/dashboard/admin/addCategory" component={CategoryForm} />
            <Route path="/dashboard/admin/addSubcategory" component={AddNewSubcategory} />
          </Switch>
        </StyledContent>
      </StyledWrapper>
    );
  }
}

export default withRouter(AdminDashboard);
