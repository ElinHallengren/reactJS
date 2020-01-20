import React from 'react';
import './App.css';
import {UserForm} from './components/UserForm';
/*const express=require('express');
const mysql=require('mysql');

const app=express();

const conn=mysql.createConnection({
    host:'mysql58.unoeuro.com',
    user:'joffi_se',
    password:'4cy53r5674',
    database:'joffi_se_db_open_shop'
});

conn.connect(err => {
  if(err){
    return err;
  }
});
console.log(conn);*/
function App() {
  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App;
