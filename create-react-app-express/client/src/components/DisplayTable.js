import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },

  }));  
export class DisplayTable extends Component {
    state= {
        error: null,
        users: []
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
    
    render() {
        const {users} = this.state;
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Password</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map(user => (
                                <TableRow key={user.id}>
                                <TableCell component="th" scope="row">{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>                  
                                <TableCell>{user.email}</TableCell>                  
                                <TableCell>{user.password}</TableCell>                  
                                </TableRow>
                            ))}
                        </TableBody>            
                    </Table>
                </TableContainer>
                
            </div>
        )
    }
}
export default DisplayTable
