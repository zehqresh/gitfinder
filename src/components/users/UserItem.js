import React from 'react';
import PropTypes from 'prop-types';
//props that are passed in useritem from Users are coming here and passed from here to use in card further
const UserItem = (props) => {

const {title,avatar_url, html_url} = props.user;

//the card that return the one user information
    return (
        <div className='card text-center'>
        <img src={avatar_url} alt="" className='round-img' style={{width:'60px'}} />

      <h1>{title}</h1>

  <div>
       <a  href={html_url} className='btn btn-dark btn-sm my-1'>More</a>
  </div>
    </div>
 );
}

UserItem.propTypes = {
  user:PropTypes.object.isRequired
};

export default UserItem;
