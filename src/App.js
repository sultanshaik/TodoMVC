import React, { Component} from "react";
import TaskList from "./TaskList.js"

class App extends Component{

  constructor()
  {
    super();
    this.state = {id : 0,task:'' , listOfTasks : []};
  }

  handleChange(e)
  {
      this.setState({task : e.target.value});
  }

  addTaskToList(e)
  {
    if(e.keyCode === 13)
    {
      let task  =
      {
        "id" : this.state.id,
        "task" : this.state.task,
        "Completed" : false
      }

      this.setState(
        {
          task : '',
          id : this.state.id+1,
          listOfTasks : [task ,...this.state.listOfTasks]
        }
      );
    }

  }

  render(){
    return(
      <div>
        <h3>Todos</h3>
        <input placeholder = "What needs to be done?" onKeyDown = {(e)=>this.addTaskToList(e)} onChange = {(e)=>this.handleChange(e)}></input>
        <TaskList taskList = {this.state.listOfTasks} />
        <a href = "#">All</a> <a href  = "#">Active</a> <a href = "#">Completed</a>
      </div>
    );
  }
}

export default App;
