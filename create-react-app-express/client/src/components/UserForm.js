import React, { Component } from 'react';
import UserData from './UserData';
import Confirm from './Confirm';
import Success from './Success';


export class UserForm extends Component {
    state= {
        step: 1,
        orderNumber: 1,
        name: 'Elin',
        email: 'elin@gmail.com',
        password: '',
        repassword: ''
    }
    // Move to the next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step+1
        });
    }
    // Move to the previous step
    prevStep = () => {
        const {step} = this.state;
        this.setState({ 
            step: step-1
        });
    }
    // Start the program over and update to new order number
    startOver = () => {
        const {orderNumber} = this.state;
        this.setState({
            step: 1,
            orderNumber: orderNumber+1,
            name: '',
            email: '',
            password: '',
            repassword: ''
        });
    }
    // Handle change and add it to the state
    handleChange = (input) => e => {
        this.setState({ [input]: e.target.value });
    }
    render() {        
        const {step} = this.state;
        const { name, email, password, repassword }= this.state;
        const values = { name, email, password, repassword };

        switch(step){
            case 1: 
                return(
                    <UserData 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                );
            case 2:
                return(
                    <Confirm 
                        values = {values}
                        prevStep = {this.prevStep}
                        nextStep = {this.nextStep}
                    />
                );
            case 3:
                return(
                    <Success
                        startOver = {this.startOver}
                    />
                );
        }
    }
}

export default UserForm;
