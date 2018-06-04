import React from "react";
import { StyledFooter, StyledText } from "./styles";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const Footer = props => (
  <StyledFooter className ="footer">
      <StyledText>
        {props.text} • <Link style={{color:'#828282'}} to='/dashboard/privacy'>TERMS OF SERVICE</Link>
      </StyledText>
  </StyledFooter>
);
export default Footer;
