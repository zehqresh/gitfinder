//Do the all imports that are needed
import React,{Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios'
import Search from './components/Search';

//App starts from here
class App extends Component {

//state to keep data in array
state = {
  users : [],
  loading: false
};



//search user function that was called in the search component
searchUser = async text => {
  //change the state to true for showing gif if data isn't loading
 this.setState({loading:true});

 //get the json data with axios api from the github and setup the client_id and secret
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret${process.env.GITHUB_CLIENT_SECRET}`).
    then(res => {
      this.setState({users:res.data.items,loading:false});
    });
    this.setState({text:''});
}
//clear the user array function that was called as a prop from the search.js as a prop and executed here
clearUsers = () => {
  this.setState({
    users:[],
    loading:false
  });
};

//render the views
render(){

  return (
    <div className="App">
    <Navbar />
  <div className='container'>
      <Search searchUser={this.searchUser} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true:false} />
    <Users loading={this.state.loading} users={this.state.users} />
  </div>
    </div>
   );
  }
}


export default App;
