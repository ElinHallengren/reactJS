import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Button from '@material-ui/core/Button';

export class Success extends Component {

    startOver = () => e =>{
        e.preventDefault();
        this.props.startOver();
    }
    display = () => e =>{
        e.preventDefault();
        this.props.display();
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Success'/>
                    <h1>Information Successfully uploaded!</h1>
                    <p>Thank you for submitting your information</p>
                    <br/>
                    
                    <Button 
                        variant='contained'
                        color='secondary'
                        onClick = {this.startOver()}
                    >Add New User</Button>
                    <Button 
                        variant='contained'
                        color='primary'
                        onClick = {this.display()}
                    >Display table</Button>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button:{
        margin: 15

    }
}

export default Success;
