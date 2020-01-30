import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

export class DisplayTable extends Component {
    startOver = () => e =>{
        e.preventDefault();
        this.props.startOver();
    }
    render() {
        const {users} = this.props;
        return (
            <div>
                <h2>Users List</h2>
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
                <Button 
                        variant='contained'
                        color='primary'
                        onClick = {this.startOver()}
                    >Add New User</Button>
            </div>
        )
    }
}

export default DisplayTable
