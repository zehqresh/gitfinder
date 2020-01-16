import React from 'react';
import propTypes from 'prop-types';
class search extends React.Component {
  state = {
    text:''
  }
static propTypes = {
  searchUser: propTypes.func.isRequired,
  clearUsers:propTypes.func.isRequired,
  showClear:propTypes.bool.isRequired
}
  //yahn search user function ko call kia gaya ha us m text ko pass kia gya h 
  //or phr vahn as a prop execute hoga
  onsubmit = (e) =>
  {
    e.preventDefault();
   this.props.searchUser(this.state.text);
}

  onChange = e => this.setState({ [e.target.name] : e.target.value  });

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onsubmit}>
        <input type="text" value={this.state.text} onChange={this.onChange}  name="text" placeholder="Search users..." />
        <input type="submit" name="text" value='Search'  className='btn btn-dark btn-block' />
    {this.props.showClear &&( 
    <button className='btn btn-light btn-block'  onClick={this.props.clearUsers}>Clear</button> )
    }
    
        </form>
        
    </div>
    );
  }
}

export default search;
