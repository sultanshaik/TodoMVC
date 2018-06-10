import React, { Component} from "react";
import TaskList from "./TaskList.js"

class App extends Component{

  constructor()
  {
    super();
    this.state = {task:'' , listOfTasks : []};
  }

  handleChange(e)
  {
      this.setState({task : e.target.value});
  }

  addTaskToList(e)
  {
    if(e.keyCode === 13)
    {
      let task  = this.state.task;
      this.setState(
        {
          task : '',
          listOfTasks : [task ,...this.state.listOfTasks]
        }
      );
    }

  }

  render(){
    return(
      <div>
        <input placeholder = "What needs to be done?" onKeyDown = {(e)=>this.addTaskToList(e)} onChange = {(e)=>this.handleChange(e)}></input>
        <TaskList taskList = {this.state.listOfTasks} />
      </div>
    );
  }
}

export default App;
