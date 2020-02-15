import React, { Component } from 'react';
import UserData from './UserData';
import Confirm from './Confirm';
import Success from './Success';
import DisplayTable from './DisplayTable';
import ButtonAppBar from './ButtonAppBar';


export class UserForm extends Component {
    state= {
        step: 1,
        orderNumber: 1,
        name: 'Ein  ',
        email: 'lili@gmail.com',
        password: 'nowis',
        repassword: 'nowis',
        error: null,
        users: []
    }
    
      
      componentDidMount() {
        fetch('/users/')
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                users: result
              });          
            },
            (error) => {
              this.setState({ error });
            }
          )
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
        this.setState({
            step: 1,
            name: '',
            email: '',
            password: '',
            repassword: ''
        });
    }
    display = () =>{
        this.componentDidMount();
        this.setState({ step: 4});
    }
    // Handle change and add it to the state
    handleChange = (input) => e => {
        this.setState({ [input]: e.target.value });
    }
    render() {        
        const {step} = this.state;
        const { name, email, password, repassword, users }= this.state;
        const values = { name, email, password, repassword };

        switch(step){
            case 1: 
                return(
                    <React.Fragment>                        
                        <UserData 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                        />
                    </React.Fragment>
                    
                );
            case 2:
                return(
                    <React.Fragment>
                        <Confirm 
                            values = {values}
                            prevStep = {this.prevStep}
                            nextStep = {this.nextStep}
                        />
                    </React.Fragment>
                );
            case 3:
                return(
                    <React.Fragment>
                        <Success
                            startOver = {this.startOver}
                        />
                    </React.Fragment>
                );
        }
    }
}

export default UserForm;
