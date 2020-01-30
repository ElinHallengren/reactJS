import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button/';


export class AddUser extends Component {
  
  render() {
    const {handleChange} = this.props;
    const {handleSubmit} = this.props;
    const {name, email, age} = this.props.values;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          
          <h1>Post to Server:</h1>
          <TextField 
            label = 'Name'
            type = 'Text'
            //fullWidth
            onChange = {handleChange('name')}
            defaultValue = {name}
            ref={this.fileRef}
          />
          <br/>
          <TextField 
            label = 'Email'
            type = 'Email'
            onChange = {handleChange('email')}
            defaultValue = {email}
          />
          <br/>
          <TextField 
            label = 'Age'
            type = 'Number'
            onChange = {handleChange('age')}
            defaultValue = {age}
          />
          <br/>
          <Button type="submit" variant='contained' color='primary' style ={{margin: 8}} onClick={handleSubmit}>
            Submit
          </Button>
          <h1>{name}</h1>
          <h1>{email}</h1>
          <h1>{age}</h1>
          
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default AddUser
