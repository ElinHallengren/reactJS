import React, { Component } from 'react';
import './App.css';
import ListItems from './Listitems';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text: '',
        key: ''
      }
      
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem:{
          text: '',
          key: ''
        }
      })
    }
  }
  deleteItem(key){
    const filteredItems = this.state.items.filter(item =>
      item.key !==key);
      this.setState({
        items: filteredItems
      })
  }
  setUpdate(text, key){
    const items = this.state.items;
    items.map(item =>{
      if(item.key===key){
        item.text=text;
      }
    })
    this.setState({
      items: items
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form">
            <input type="text" placeholder="Enter Text"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            ></input>
            <button type="submit"
              onClick={this.addItem}
            >Add</button>
          </form>
        </header>
        <ListItems 
          items = {this.state.items}
          deleteItems = {this.deleteItem}
          setUpdate = {this.setUpdate}
        ></ListItems>
      </div>
    )
  }
}



export default App;
