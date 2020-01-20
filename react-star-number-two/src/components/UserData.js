import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class UserData extends Component {

    continue = () => e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {handleChange} = this.props;
        const { orderNumber, name, address, phoneNumber, productType }= this.props.values;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Enter Customer Data'/>
                    <h4>Order Number: {orderNumber}</h4>
                    <TextField 
                        hintText = 'Name'
                        floatingLabelText = 'Name'
                        onChange = {handleChange('name')}
                        defaultValue = {name}
                    />
                    <TextField 
                        hintText = 'Phone Number'
                        floatingLabelText = 'Phone Number'
                        onChange = {handleChange('phoneNumber')}
                        defaultValue = {phoneNumber}
                    />
                    <br/>
                    <TextField 
                        hintText = 'Address'
                        floatingLabelText = 'Address'
                        onChange = {handleChange('address')}
                        defaultValue = {address}
                    />
                    <TextField 
                        hintText = 'Product Type'
                        floatingLabelText = 'Product Type'
                        onChange = {handleChange('productType')}
                        defaultValue = {productType}
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
