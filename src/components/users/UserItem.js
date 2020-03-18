import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//props that are passed in useritem from Users are coming here and passed from here to use in card further
const UserItem = (props) => {

const {login,title,avatar_url, html_url} = props.user;

//the card that return the one user information
    return (
        <div className='card text-center'>
        <img src={avatar_url} alt="" className='round-img' style={{width:'60px'}} />

      <h1>{title}</h1>

  <div>
       <Link  to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>
  </div>
    </div>
 );
}

UserItem.propTypes = {
  user:PropTypes.object.isRequired
};

export default UserItem;
