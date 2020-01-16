import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

//get the pros that were passed as arguments from the parent child into this class
const Users = ({users,loading}) => {
//if data isnt loaded yet bolean is passed and shows the gif else the view with renders
if (loading){
 return  <Spinner />
} else {
  return (
    <div style={gridStyle}>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}
}

const gridStyle = {
  display:'grid',
  gridTemplateColumns: '3fr 3fr'
}

export default Users;
