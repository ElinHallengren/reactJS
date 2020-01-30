import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import AddUser from './AddUser';
import Menu from './Menu';
import DisplayTable from './DisplayTable';
import Success from './Success';

class ShowUser extends Component {
  state = {
    response: '',
    name: '',
    email: '',
    age: '',
    responseToPost: '',
  };
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
    }
  }
  
  componentDidMount() {
    fetch('/users/')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            users: result
          });          
        },
        (error) => {
          this.setState({ error });
        }
      )
  }  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: this.state.name,email: this.state.email,age: this.state.age }),
    });
    const body = await response.text();
    
    this.setState({ 
      responseToPost: body, 
    });
    this.componentDidMount();
  };

  clearForm = () =>{
    this.setState({
      name: '',
      email: '',
      age: '',
    });
    this.componentDidMount();
  }

  handleChange = (input) => e => {
    this.setState({ [input]: e.target.value });
  };
  
render() {
    
    const { error, users, name, email, age} = this.state; 
    const values = {name, email, age};   
    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div>        
            {this.state.response}
           
              <AppBar position='static'>
                <Menu />
              </AppBar>
              <AddUser 
                values= {values}
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
              />
            <Success 
              clearForm = {this.clearForm}
            />
            <p>{this.state.responseToPost}</p>                
            <DisplayTable 
              users = {users}
            />
        </div>
      )
    }
  }
}

export default ShowUser;