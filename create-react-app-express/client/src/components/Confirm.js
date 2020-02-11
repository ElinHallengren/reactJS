import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Button from '@material-ui/core/Button';
import {List, ListItem} from 'material-ui/List';

export class Confirm extends Component {

    continue = () => async e =>{
        e.preventDefault();
        //PROCESS FORM => SEND IT TO BACK END/ DATABASE
        const response = await fetch('/users/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: this.props.values.name, email: this.props.values.email, password: this.props.values.password }),
          });
          const body= await response.text();
        this.props.nextStep();
    }
    back = () => e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <List>
                        <ListItem 
                            primaryText= 'Customers Name'
                            secondaryText= {values.name}
                        />
                        <ListItem 
                            primaryText= 'Customers Email'
                            secondaryText= {values.email}
                        />
                        <ListItem 
                            primaryText= 'Password'
                            secondaryText= '***********'
                            
                        />
                    </List>
                    <br/>
                    <Button 
                        variant='contained'
                        onClick = {this.back()}
                    >Back</Button>
                    <Button 
                        variant='contained'
                        color='primary'
                        onClick = {this.continue()}
                    >Confirm</Button>
                    
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

export default Confirm;
