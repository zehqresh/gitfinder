//imports
import React from 'react';
import PropTypes from 'prop-types';

//get the props that were passed from the parent class into Navbar
const Navbar = ({icon,title}) => {

    return (
      <div className='nav bg-dark'>
      <h1><i className={icon} /> {title}</h1>
      </div>
    );
  }

Navbar.defaultProps = {
    title: 'GitFinder',
    icon:'fab fa-github-alt'
  };



export default Navbar;
