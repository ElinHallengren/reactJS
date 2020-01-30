import React, { Component } from 'react';
import Button from '@material-ui/core/Button'

export class Success extends Component {
    newUser = () => e =>{
        e.preventDefault();
        this.props.clearForm();
    }
    render() {
        return (
            <div>
                <h1>You have successfully added a user to the server!</h1>
                <Button variant='contained' color='primary' onClick={this.newUser()}>Add new user</Button> 
            </div>
        )
    }
}

export default Success
