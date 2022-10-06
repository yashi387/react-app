import React, { Component } from 'react'
import TodoInputs from './Components/TodoInputs';
import TodoList from './Components/TodoList';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state={
    items:[],
    id:uuidv4(),
    item:"",
    editItem:false
  }
  async componentDidMount() {
    const result = await axios.get("http://localhost:4000/posts")
    console.log(result.data)
    this.setState({
      items:result.data
    })
  }

  handleChange = e =>{
    this.setState({
      item:e.target.value
    });
  };
  handleSubmit = e =>{
    e.preventDefault();

    const newItem = {
      id:this.state.id,
      title:this.state.item,
      completed:this.state.completed,
    }
// console.log(newItem);
    const updateItems = [...this.state.items,newItem];

    this.setState({
      items:updateItems,
      item:"",
      id:uuidv4(),
      editItem:false

    });
  };
  clearList =() =>{
    this.setState({
      items:[],
    });
  }
  handleDelete =(id) =>{
    const filteredItems = this.state.items.filter(item =>item.id !== id);
    this.setState({
      items:filteredItems
    });
  }
  handleEdit =(id) =>{
    const filteredItems = this.state.items.filter(item =>item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items:filteredItems, 
      item:selectedItem.title,
      editItem:true,
      id:id
    });
  }
  handleComplete = (id) => {    
    this.setState( previousState => {
      let newItems = [...previousState.items];
      let indexOfSelectedItem = previousState.items.findIndex(item => item.id === id);
      
      newItems[indexOfSelectedItem].completed = !previousState.completed;
      
      return {
        items: newItems, 
        id:id
      }
    })
  }

  render() {
    return (
      <div className= "container">
      <div className= "row">
         <div className= "col-10 mx-auto col-md-8 mt-4"> 
           <h3 className="text-capitalize text-center">todo App</h3>
           <TodoInputs item={this.state.item}
           handleChange={this.handleChange}
           handleSubmit={this.handleSubmit}
           editItem={this.state.editItem}/>
           <TodoList 
           items={this.state.items} 
           clearList={this.clearList} 
           handleDelete={this.handleDelete}
           handleEdit={this.handleEdit}
           handleComplete = {this.handleComplete}
           />
          </div>
      </div>
    </div>
    )
  }
}
export default App;