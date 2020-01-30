import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class UserData extends Component {

    continue = () => e =>{
        e.preventDefault();
        const { password, repassword } = this.props.values;
        // perform all neccassary validations
        if (password !== repassword) {
            alert("Passwords don't match");
        } else {
            // make API call
            this.props.nextStep();
        }
        
    }
    render() {
        const {handleChange} = this.props;
        const { name, email, password, repassword }= this.props.values;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Enter Customer Data'/>
                    <TextField 
                        hintText = 'Name'
                        type='text'
                        floatingLabelText = 'Name'
                        onChange = {handleChange('name')}
                        defaultValue = {name}
                    />
                    <TextField 
                        hintText = 'Email'
                        floatingLabelText = 'Email'
                        type='Email'
                        onChange = {handleChange('email')}
                        defaultValue = {email}
                    />
                    <br/>
                    <TextField 
                        hintText = 'Password'
                        floatingLabelText = 'Password'
                        type='Password'
                        onChange = {handleChange('password')}
                        defaultValue = {password}
                    />
                    
                    <TextField 
                        hintText = 'Re-enter Password'
                        floatingLabelText = 'Re-enter Password'
                        type='Password'
                        onChange = {handleChange('repassword')}
                        defaultValue = {repassword}
                    />
                    <br/>
                    <RaisedButton 
                        label='Continue'
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

export default UserData;
