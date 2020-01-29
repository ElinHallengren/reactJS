import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
      users: []
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
    
    this.setState({ responseToPost: body});
    this.componentDidMount();
  };
  
render() {
    
    const { error, users} = this.state;    
    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div>        
            <p>{this.state.response}</p>
            <form onSubmit={this.handleSubmit}>
            <p>
                <strong>Post to Server:</strong>
            </p>
            <p>
                Name: <input
                type="text"
                value={this.state.post}
                onChange={e => this.setState({ name: e.target.value })}
                />
            </p>
            <p>
                Email: <input
                type="email"
                value={this.state.post}
                onChange={e => this.setState({ email: e.target.value })}
                />
            </p>
            <p>
                Age: <input
                type="number"
                value={this.state.post}
                onChange={e => this.setState({ age: e.target.value })}
                />
            </p>
            <button type="submit">Submit</button>
            </form>
            <p>{this.state.responseToPost}</p>                
            <h2>Users List</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Age</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user.id}>
                            <TableCell component="th" scope="row">{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>                  
                            <TableCell>{user.email}</TableCell>                  
                            <TableCell>{user.age}</TableCell>                  
                            </TableRow>
                        ))}
                    </TableBody>            
                </Table>
            </TableContainer>
        </div>
      )
    }
  }
}

export default ShowUser;