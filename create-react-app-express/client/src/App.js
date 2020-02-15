import React from 'react';
import './App.css'
import Nav from './components/ButtonAppBar';
import Home from './components/Home';
import UserForm from './components/UserForm';
import DisplayTable from './components/DisplayTable';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">      
        <Nav />
        <Switch> 
          <Route path='/' exact component={Home} />
          <Route path='/newUser' exact component={UserForm} />
          <Route path='/showTable' component={DisplayTable} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;