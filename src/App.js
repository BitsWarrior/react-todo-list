import React, { Component } from 'react';
import {v4 as uuid} from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default class App extends Component {
  state = {
    items: [{id:1, title:"wake up"}, {id:2,title:"make breakfast"}],
    id: uuid(),
    item:'',
    editItem:false
  };
  handleChange = (e)=>(console.log("Handle Change"));
  handleSubmit = (e)=>(console.log("Handle Submit"));
  handleDelete = (e)=>(console.log("Handle delete ${id}"));
  handleEdit = (e)=>(console.log("Handle edit ${id}"));
  clearList = ()=>(console.log("Clear List"));
  
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mc-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">todo input</h3>
              <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
              <TodoList items={this.state.item} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
