import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {

    startOver = () => e =>{
        e.preventDefault();
        this.props.startOver();
    }
    

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Success'/>
                    <h1>Information Successfully uploaded!</h1>
                    <p>Thank you for submitting your information</p>
                    <br/>
                    
                    <RaisedButton 
                        label='New Customer'
                        primary= {true}
                        style= {this.styles}
                        onClick = {this.startOver()}
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

export default Success;
