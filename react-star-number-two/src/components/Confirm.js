import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';

export class Confirm extends Component {

    continue = () => e =>{
        e.preventDefault();
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
                            primaryText= 'Order Number'
                            secondaryText= {values.orderNumber}
                        />
                        <ListItem 
                            primaryText= 'Customers Name'
                            secondaryText= {values.name}
                        />
                        <ListItem 
                            primaryText= 'Customers Phone Number'
                            secondaryText= {values.phoneNumber}
                        />
                        <ListItem 
                            primaryText= 'Customers Address'
                            secondaryText= {values.address}
                        />
                        <ListItem 
                            primaryText= 'Customers Name'
                            secondaryText= {values.productType}
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
