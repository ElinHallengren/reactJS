import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Button from '@material-ui/core/Button';
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
        const { name, email, password, repassword, phoneNumber, address, storeName }= this.props.values;
        return (
            <MuiThemeProvider>
                <React.Fragment>
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
                    <TextField 
                        hintText = 'Phone Number'
                        floatingLabelText = 'Phone Number'
                        type='Number'
                        onChange = {handleChange('phoneNumber')}
                        defaultValue = {phoneNumber}
                    />
                    <TextField 
                        hintText = 'Address'
                        floatingLabelText = 'Address'
                        type='Text'
                        onChange = {handleChange('address')}
                        defaultValue = {address}
                    />
                    <br/>
                    <TextField 
                        hintText = 'Store Name'
                        floatingLabelText = 'Store Name'
                        type='Text'
                        onChange = {handleChange('storeName')}
                        defaultValue = {storeName}
                    />
                    <br/>
                    <Button 
                        variant='contained'
                        color='primary'
                        onClick = {this.continue()}
                    >Continue</Button>
                    
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
