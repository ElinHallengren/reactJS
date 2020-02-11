import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './tttt/Menu';
import ButtonAppBar from './ButtonAppBar';

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
    startOver = () => e =>{
        e.preventDefault();
        this.props.startOver();
    }
    
    render() {
        const {users} = this.props;
        
  const classes = {useStyles};
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
/*<div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                            <Menu />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            User List
                        </Typography>
                        <Button 
                            
                            color='inherit'
                            onClick = {this.startOver()}>
                            Add New User
                        </Button>
                        </Toolbar>
                    </AppBar>
                </div>*/

export default DisplayTable
