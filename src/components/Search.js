import React,{useState} from 'react';
import propTypes from 'prop-types';
const Search = ({clearUsers,searchUser,showClear,setAlert})=> {

   const [text,setText] = useState('');

  //yahn search user function ko call kia gaya ha us m text ko pass kia gya h
  //or phr vahn as a prop execute hoga
const  onsubmit = (e) =>
  {
    e.preventDefault();
    if(text===''){
      setAlert('Please enter something','danger');
    }else{
      searchUser(text);
    }


}

const  onChange = e => setText(e.target.value);

    return (
      <div>
        <form className='form' onSubmit={onsubmit}>
        <input type="text" value={text} onChange={onChange}  name="text" placeholder="Search users..." />
        <input type="submit" name="text" value='Search'  className='btn btn-dark btn-block' />
    {showClear &&(
    <button className='btn btn-light btn-block'  onClick={clearUsers}>Clear</button> )
    }

        </form>

    </div>
    );
}
 Search.propTypes = {
  searchUser: propTypes.func.isRequired,
  clearUsers:propTypes.func.isRequired,
  showClear:propTypes.bool.isRequired
}

export default Search;
