import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
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
          console.log(this.props.values.password);
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
                    <AppBar title='Confirm'/>
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
                    <RaisedButton 
                        label='Back'
                        primary= {false}
                        style= {this.styles}
                        onClick = {this.back()}
                    />
                    <RaisedButton 
                        label='Confirm'
                        primary= {true}
                        style= {this.styles}
                        onClick = {this.continue()}
                    />
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
