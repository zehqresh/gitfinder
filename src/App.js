//Do the all imports that are needed
import React,{Component, Fragment} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import axios from 'axios'
import Search from './components/Search';
import About from './components/pages/About';
import Alert from './components/Alert';
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom';

//App starts from here
class App extends Component {

//state to keep data in array
state = {
  users : [],
  user:{},
  loading: false,
  alert:null
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
//get single user data
getUser = async (username) => {
  //change the state to true for showing gif if data isn't loading
  this.setState({loading:true});

  //get the json data with axios api from the github and setup the client_id and secret
     const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret${process.env.GITHUB_CLIENT_SECRET}`).
     then(res => {
       this.setState({user:res.data,loading:false});
     });
}
//clear the user array function that was called as a prop from the search.js as a prop and executed here
clearUsers = () => {
  this.setState({
    users:[],
    loading:false
  });
};
//function to clear the state alert or hide it in 5 sec.

//set alert function if input is empty
setAlert = (msg,type) => {
  this.setState({alert:{msg,type}});
  setTimeout(()=>{this.setState({alert:null})},5000);

};

//render the views
render(){
  return (

    <Router>
    <div className="App">
    <Navbar />
  <div className='container'>
    <Alert alert={this.state.alert} />
    <Switch>
    <Route exact path='/' render={ props=>(
      <Fragment>
        <Search searchUser={this.searchUser} setAlert={this.setAlert} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true:false} />
      <Users loading={this.state.loading} users={this.state.users} />
      </Fragment>
    )} />
    <Route exact path='/about' component={About} />
    <Route exact path='/user/:login' render = {props =>(
      <User {...props} getUser={this.getUser} user={this.state.user} loading={this.state.loading} />
    )
    } />
    </Switch>
  </div>
    </div>

    </Router>
   );
  }
}


export default App;
